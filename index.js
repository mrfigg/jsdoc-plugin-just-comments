const extractComments = require('extract-comments')

exports.handlers = {
  beforeParse: (event) => {
    event.source = extractComments(event.source)
      .map((comment) => `/*${comment.raw}*/`)
      .join('\n')
      .replace(/^ *(?=\*)/gm, ' ')
  },
}
