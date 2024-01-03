export default function appendToEachArrayValue(array, appendString) {
  const array1 = [];
  for (const val of array) {
    array1.push(appendString + val);
  }

  return array1;
}
