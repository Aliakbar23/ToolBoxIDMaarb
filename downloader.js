const fs = require('fs');
const path = require('path');
const axios = require('axios');
const readline = require('readline');

// List of working Cobalt instances (v10 API compliant)
const COBALT_SERVERS = [
  "https://api.cobalt.liubquanti.click",
  "https://cobaltapi.cjs.nz",
  "https://api.cobalt.blackcat.sweeux.org",
  "https://fox.kittycat.boo",
  "https://dog.kittycat.boo",
  "https://rue-cobalt.xenon.zone"
];

// Helper to ask user input via CLI
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

// Main execution function
async function main() {
  console.log("=== ToolboxID Social Media Downloader (Node.js) ===\n");
  
  let targetUrl = process.argv[2];
  if (!targetUrl) {
    targetUrl = await askQuestion("Masukkan URL video (YouTube, TikTok, Instagram, dll): ");
  }
  
  targetUrl = targetUrl.trim();
  if (!targetUrl) {
    console.error("Error: URL tidak boleh kosong!");
    return;
  }
  
  let audioOnly = process.argv[3] === 'audio' || false;
  if (!process.argv[3]) {
    const formatChoice = await askQuestion("Format unduhan?\n1: Video + Audio (Default)\n2: Audio Saja (MP3)\nPilih (1/2): ");
    if (formatChoice.trim() === '2') {
      audioOnly = true;
    }
  }

  console.log(`\nMemproses URL: ${targetUrl}`);
  console.log(`Format: ${audioOnly ? 'Audio Saja (MP3)' : 'Video + Audio (MP4)'}`);
  
  // Try Cobalt servers one by one
  let downloadUrl = null;
  let filename = null;
  let chosenServer = null;
  
  for (const server of COBALT_SERVERS) {
    console.log(`Mencoba server: ${server}...`);
    try {
      const payload = {
        url: targetUrl,
        videoQuality: "720",
        downloadMode: audioOnly ? "audio" : "auto"
      };
      
      const response = await axios.post(server, payload, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 10000 // 10 seconds timeout per server
      });
      
      if (response.data && response.data.url) {
        downloadUrl = response.data.url;
        filename = response.data.filename || `download_${Date.now()}.${audioOnly ? 'mp3' : 'mp4'}`;
        chosenServer = server;
        break; // Successfully got download link
      } else if (response.data && response.data.status === 'stream' && response.data.url) {
        downloadUrl = response.data.url;
        filename = response.data.filename || `download_${Date.now()}.${audioOnly ? 'mp3' : 'mp4'}`;
        chosenServer = server;
        break;
      }
    } catch (err) {
      const errMsg = err.response ? `HTTP ${err.response.status}` : err.message;
      console.log(`Gagal menghubungi ${server}: ${errMsg}`);
    }
  }
  
  if (!downloadUrl) {
    console.error("\n[Error] Semua server Cobalt sibuk atau tidak merespons. Silakan coba lagi nanti.");
    return;
  }
  
  console.log(`\n[Sukses] Link didapatkan dari server: ${chosenServer}`);
  console.log(`Nama File: ${filename}`);
  console.log("Memulai unduhan langsung ke disk...");
  
  const savePath = path.join(process.cwd(), filename);
  const writer = fs.createWriteStream(savePath);
  
  try {
    const response = await axios({
      method: 'GET',
      url: downloadUrl,
      responseType: 'stream'
    });
    
    // Calculate progress if content-length is present
    const totalLength = response.headers['content-length'];
    let downloadedLength = 0;
    
    if (totalLength) {
      response.data.on('data', (chunk) => {
        downloadedLength += chunk.length;
        const percent = ((downloadedLength / totalLength) * 100).toFixed(1);
        process.stdout.write(`\rUnduh progress: ${percent}% (${(downloadedLength / 1024 / 1024).toFixed(2)}MB / ${(totalLength / 1024 / 1024).toFixed(2)}MB)`);
      });
    } else {
      response.data.on('data', (chunk) => {
        downloadedLength += chunk.length;
        process.stdout.write(`\rMengunduh: ${(downloadedLength / 1024 / 1024).toFixed(2)}MB`);
      });
    }
    
    response.data.pipe(writer);
    
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
    
    console.log(`\n\n🎉 [Sukses] Unduhan selesai! File disimpan di: ${savePath}`);
    console.log("ℹ️ [Tip] Jika file video tidak memiliki durasi (tidak bisa di-seek), hal ini disebabkan oleh pembatasan remuxing ffmpeg pada server Cobalt publik tersebut.");
    console.log("          Silakan jalankan kembali skrip ini untuk mencoba server fallback lainnya.\n");
  } catch (err) {
    console.error(`\n\n[Error] Gagal mengunduh file media: ${err.message}`);
    // Clean up partial file
    if (fs.existsSync(savePath)) {
      fs.unlinkSync(savePath);
    }
  }
}

main().catch(err => console.error("Unhandled error:", err));
