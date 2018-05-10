const { ones, tens, teens } = require('./constants')

exports.conver999ToWord = number => {
  if (number === 0) return 'zero'

  let outputBuilder = ''

  const hundredth = Math.floor(number / 100)
  const subHundred = number % 100
  const tenth = Math.floor(subHundred / 10)
  const oneth = subHundred % 10

  outputBuilder += hundredth ? ` ${ones[hundredth - 1]} hundred` : ''
  outputBuilder += hundredth && subHundred > 0 ? ' and' : ''
  outputBuilder += subHundred > 10 && subHundred < 20
      ? ` ${teens[oneth - 1]}`
      : (tenth ? ` ${tens[tenth - 1]}` : '') +
        (oneth ? ` ${ones[oneth - 1]}` : '')

  return outputBuilder.trim()
}

exports.groupByThreeDigits = number => {
  const groups = []
  let remaining = number
  do {
    const group = remaining % 1000
    remaining = Math.floor(remaining / 1000)
    groups.unshift(group)
  } while(remaining > 0)
  return groups
}
