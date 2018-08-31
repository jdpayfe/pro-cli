const path = require('path')

const glob = require('glob')

const PAGES_PATH = path.resolve(__dirname, '../src/pages')

function getEntries() {
  let entries = glob.sync(PAGES_PATH + '/**/*.js')
  let pages = {}
  entries.forEach(file => {
    let fileName = file.substring(
      file.lastIndexOf('/') + 1,
      file.lastIndexOf('.')
    )
    pages[fileName] = {
      template: './src/pages/' + fileName + '/' + fileName + '.html',
      entry: './src/pages/' + fileName + '/' + fileName + '.js',
      filename: fileName + '.html',
      title:
        fileName.substring(0, 1).toLocaleUpperCase() + fileName.substring(1),
      //   chunks: ['chunk-vendors', 'chunk-common', fileName],
    }
  })
  return pages
}

module.exports = {
  pages: getEntries(),
}
