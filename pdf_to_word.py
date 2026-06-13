import os
import sys
import argparse

# Colorful console output helper
def safe_print(text):
    try:
        print(text)
    except UnicodeEncodeError:
        try:
            encoding = sys.stdout.encoding or 'utf-8'
            sys.stdout.buffer.write((text + '\n').encode(encoding, errors='replace'))
            sys.stdout.flush()
        except Exception:
            print(text.encode('ascii', errors='replace').decode('ascii'))

def print_status(emoji, text, color="\033[94m"):
    reset = "\033[0m"
    safe_print(f"{emoji} {color}{text}{reset}")

def print_error(text):
    safe_print(f"❌ \033[91mError: {text}\033[0m")

def print_success(text):
    safe_print(f"🎉 \033[92mSuccess: {text}\033[0m")

try:
    # pyrefly: ignore [missing-import]
    from pdf2docx import Converter
except ImportError:
    print_error("Modul 'pdf2docx' belum terinstal.")
    print_status("💡", "Silakan instal terlebih dahulu menggunakan pip dengan menjalankan perintah berikut:")
    print("\n   pip install pdf2docx\n")
    sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="ToolboxID Companion - PDF to Word Converter (High Fidelity Layout)")
    parser.add_argument("pdf_path", help="Path file PDF yang ingin dikonversi")
    parser.add_argument("docx_path", nargs="?", help="Path file Word (.docx) hasil konversi (opsional)")
    
    args = parser.parse_args()
    
    pdf_path = args.pdf_path
    
    if not os.path.exists(pdf_path):
        print_error(f"File '{pdf_path}' tidak ditemukan.")
        sys.exit(1)
        
    if not pdf_path.lower().endswith(".pdf"):
        print_error(f"File '{pdf_path}' bukan berkas PDF.")
        sys.exit(1)
        
    # Determine docx output path
    docx_path = args.docx_path
    if not docx_path:
        docx_path = os.path.splitext(pdf_path)[0] + ".docx"
        
    print_status("📄", f"Membaca berkas: {os.path.basename(pdf_path)}", "\033[95m")
    print_status("⏳", "Sedang memproses konversi layout (ini mungkin memakan waktu beberapa detik)...", "\033[93m")
    
    try:
        cv = Converter(pdf_path)
        # Convert all pages
        cv.convert(docx_path, start=0, end=None)
        cv.close()
        
        print_success(f"Konversi berhasil diselesaikan!")
        print_status("💾", f"Berkas disimpan di: {os.path.abspath(docx_path)}", "\033[92m")
    except Exception as e:
        print_error(f"Gagal melakukan konversi. Detail error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Enable color support in Windows cmd/powershell
    if os.name == 'nt':
        os.system('color')
    main()
