import ejs from 'ejs'

class HtmlParser {
  static async Parse(table) {
    return await ejs.renderFile("./public/table.ejs", { header: table.header, rows: table.rows })
  }
}

export default HtmlParser