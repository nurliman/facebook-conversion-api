import isNumeric from "./isNumeric";

export function float2int(value: any) {
  if (!isNumeric(value)) return null;

  value = parseFloat(value);

  return value | 0;
}

export default float2int;
