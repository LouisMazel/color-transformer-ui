import { isColorName } from '../lib/app'

describe('Test is-color-name', () => {
  test('should be true', () => {
    expect(isColorName('dodgerblue')).toBeTruthy()
  })
  test('should be false', () => {
    expect(isColorName('#1e90ff')).toBeFalsy()
  })
})
