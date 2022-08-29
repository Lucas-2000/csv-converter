import fs from 'fs';
import util from 'util'

class Reader {

  constructor() {
    this.reader = util.promisify(fs.readFile)
  }

  async Read(filepath) {
    try {
      return await this.reader(filepath, 'utf-8')
    } catch(err) {
      return (err)
    }
  }
}

export default Reader