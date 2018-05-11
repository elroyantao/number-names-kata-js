const {
  conver999ToWord,
  groupByThreeDigits,
  convertLargeToWord,
} = require('./index')

describe('number names', () => {
  describe('conver999ToWord()', () => {
    ;[
      { in: 0, out: 'zero' },
      { in: 1, out: 'one' },
      { in: 5, out: 'five' },
      { in: 9, out: 'nine' },
      { in: 10, out: 'ten' },
      { in: 11, out: 'eleven' },
      { in: 16, out: 'sixteen' },
      { in: 22, out: 'twenty two' },
      { in: 68, out: 'sixty eight' },
      { in: 100, out: 'one hundred' },
      { in: 101, out: 'one hundred and one' },
      { in: 121, out: 'one hundred and twenty one' },
      { in: 514, out: 'five hundred and fourteen' },
      { in: 888, out: 'eight hundred and eighty eight' },
      // { in: 1000, out: 'one thousand' },
      // { in: 5678, out: 'five thousand, six hundred and seventy eight' },
    ].forEach(testData => {
      it(`outputs "${testData.out}" when input is ${testData.in}`, () => {
        expect(conver999ToWord(testData.in)).toEqual(testData.out)
      })
    })
  })
  describe('groupByThreeDigits()', () => {
    ;[
      { in: 10, out: [10] },
      { in: 1212, out: [1, 212] },
      { in: 10001000, out: [10, 1, 0] },
      { in: 11111011, out: [11, 111, 11] },
      { in: 555000055, out: [555, 0, 55] },
    ].forEach(testData => {
      it(`outputs "${testData.out}" when input is ${testData.in}`, () => {
        expect(groupByThreeDigits(testData.in)).toEqual(testData.out)
      })
    })
  })
  describe('convertLatgeToWord()', () => {
    ;[
      {
        in: 56945781,
        out: 'fifty six million, nine hundred and forty five thousand, seven hundred and eighty one',
      },
      {
        in: 105,
        out: 'one hundred and five',
      },
      {
        in: 1001,
        out: 'one thousand and one',
      },
      {
        in: 1001010,
        out: 'one million, one thousand and ten',
      },
      {
        in: 10000001,
        out: 'ten million and one',
      },
    ].forEach(testData => {
      it(`outputs "${testData.out}" when input is ${testData.in}`, () => {
        expect(convertLargeToWord(testData.in)).toEqual(testData.out)
      })
    })
  })
})
