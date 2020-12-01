import { hexToRgba } from '../lib/app'

describe('Test hex-to-rgba', () => {
  test('should return a RGBA color', () => {
    expect(hexToRgba('#1e90ff')).toBe('rgba(30, 144, 255, 1)')
  })
  test('should return a RGBA color with 0.5 coef', () => {
    expect(hexToRgba('#1e90ff', 0.5)).toBe('rgba(30, 144, 255, 0.5)')
  })
  test('should throw an error', () => {
    expect(() => hexToRgba('okok')).toThrow()
  })
})
