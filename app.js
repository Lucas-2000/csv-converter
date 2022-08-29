import Reader from './bin/Reader.js'
import Processor from './bin/Processor.js'
import Table from './bin/Table.js'
import HtmlParser from './bin/HtmlParser.js'
import Writer from './bin/Writer.js'
import PdfWriter from './bin/PdfWriter.js'

const reader = new Reader()
const writer = new Writer()

async function main() {
  const data = await reader.Read('./users.csv')
  const processData = Processor.Process(data)
  const users = new Table(processData)
  const html = await HtmlParser.Parse(users)
  writer.Write(Date.now() + '.html', html)
  PdfWriter.WritePdf(Date.now() + '.pdf', html)
}

main()