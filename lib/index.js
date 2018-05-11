const { convertLargeToWord } = require('./number-names')

const input = parseInt(process.argv[2], 10)
console.log(convertLargeToWord(input)) // eslint-disable-line no-console
