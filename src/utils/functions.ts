export const useCapitalizeWord = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const useConvertInchToCm = (length: number) => {
  const BASE_VALUE = 2.54;
  const lenghCm = length && length * BASE_VALUE;
  return lenghCm?.toFixed(2);
};
