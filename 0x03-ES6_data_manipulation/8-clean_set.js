export default function cleanSet(set, startString) {
  const str = [];
  for (const s of set) {
    if (startString.length && s.startsWith(startString)) {
      str.push(s.replace(startString, ''));
    }
  }
  return str.join('-');
}
