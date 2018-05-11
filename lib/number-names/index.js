const { ones, tens, teens, units } = require('./constants')

const conver999ToWord = number => {
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

const groupByThreeDigits = number => {
  const groups = []
  let remaining = number
  do {
    const group = remaining % 1000
    remaining = Math.floor(remaining / 1000)
    groups.unshift(group)
  } while (remaining > 0)
  return groups
}

const convertLargeToWord = number => {
  let word = ''

  if (number === 0) return 'zero'
  if (number < 0) word += 'negative '

  const absoluteNumber = Math.abs(number)
  const groups = groupByThreeDigits(absoluteNumber)
  word += groups.reduce((prevResult, numberGroup, index) => {
    const isLastGroup = index === groups.length - 1
    const groupWord = conver999ToWord(numberGroup)
    const unit = groupWord && ` ${units[groups.length - index - 1]}`

    // put a comma only if the subsequent groups have a value > 100
    const remainingValue = groups
      .slice(index + 1)
      .reduce((sum, group) => sum * 1000 + group, 0)

    const comma = !isLastGroup && groupWord && remainingValue
        ? `${remainingValue >= 100 ? ', ' : ' and '}`
        : ''
    return `${prevResult}${groupWord}${unit}${comma}`
  }, '')
  return word.trim()
}

module.exports = {
  conver999ToWord,
  groupByThreeDigits,
  convertLargeToWord,
}
