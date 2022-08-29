import pdf from 'html-pdf'

class PdfWriter {
  static WritePdf(filename, html) {
    pdf.create(html, {}).toFile(filename, (err) => {console.log(err)})
  }
}

export default PdfWriter