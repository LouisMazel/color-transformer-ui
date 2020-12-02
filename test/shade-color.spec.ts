import { shadeColor } from '../lib/app'

describe('Test shade-color', () => {
  test('should return lighten color', () => {
    expect(shadeColor('#1e90ff', -10)).toBe('#1b81e5')
  })
  test('should return darken color', () => {
    expect(shadeColor('#1e90ff', 10)).toBe('#219eff')
  })
  test('should throw format error', () => {
    expect(() => shadeColor('#fff', 10)).toThrow()
  })
  test('should throw type error', () => {
    expect(() => shadeColor('dodgerblue', 10)).toThrow()
  })
})
