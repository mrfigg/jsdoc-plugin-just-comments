exports.handlers = {
  beforeParse: (event) => {
    event.source = [
      ...event.source.matchAll(
        /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/gi
      ),
    ]
      .map((match) => match[0])
      .join('\n')
      .replace(/^ *(?=\/)/gm, '')
      .replace(/^ *(?=\*)/gm, ' ')
  },
}
