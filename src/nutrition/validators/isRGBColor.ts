export const isRGBColor = async (value: string) => {
  const regex = /^rgb\(\d{1,3},\d{1,3},\d{1,3}\)/;
  const isRGBColor = regex.test(value);
  if(!isRGBColor) {
    throw new Error(`Color should be in rgb format: ${value}`);
  }
}