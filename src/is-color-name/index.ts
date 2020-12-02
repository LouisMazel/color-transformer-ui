import colors from './../_constantes'

export default (color: string): boolean => {
  if (!color) throw new Error('is-color-name: No color provided')

  const colorsList = Object.keys(colors)

  return colorsList.includes(color)
}
