import PyPDF2
import sys

pdf_path = r'c:\Users\danie\OneDrive\Desktop\Asset Projects\portfolio\public\images\Daniel Obeng Portfolio.pdf'

try:
    with open(pdf_path, 'rb') as pdf_file:
        reader = PyPDF2.PdfReader(pdf_file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
        print(text)
except Exception as e:
    print(f"Error reading PDF: {e}", file=sys.stderr)
    sys.exit(1)
