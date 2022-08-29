class Processor {
  static Process(data) {
    const row = data.split('\r\n')
    const rows = []
    row.forEach(row => {
      const arr = row.split(",")
      rows.push(arr)
    })
    return rows
  }
}

export default Processor