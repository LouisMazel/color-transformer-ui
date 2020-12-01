import { colorNameToHex } from '../lib/app'

describe('Test color-name-to-hex', () => {
  test('should return a HEX color', () => {
    expect(colorNameToHex('dodgerblue')).toBe('#1e90ff')
  })
  test('should throw an Error', () => {
    expect(() => colorNameToHex('bad_color')).toThrow()
  })
})
