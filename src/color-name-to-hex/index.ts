import colors from './../_constantes'

export default (color: string): string => {
  if (!color) throw new Error('color-name-to-hex: No color name provided')

  const colorFound = colors[color.toLowerCase()]

  if (typeof colorFound !== 'undefined') return colorFound

  throw new Error(`No hex found for ${color}`)
}
