export default (color: string): boolean => {
  if (!color) throw new Error('is-color-name: No color provided')

  const s = new Option().style
  s.color = color
  return s.color === color
}
