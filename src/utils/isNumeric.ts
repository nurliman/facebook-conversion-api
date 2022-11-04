export function isNumeric(input: any) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}
