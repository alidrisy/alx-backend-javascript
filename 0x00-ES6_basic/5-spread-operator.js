export default function concatArrays(array1, array2, string) {
  return Array(...array1, ...array2, ...string);
}
