import Color from 'color'

export default function mix(
  color1: string,
  color2: string,
  strenth = 1,
): string {
  return Color(color1)
    .mix(Color(color2), strenth)
    .hex();
}
