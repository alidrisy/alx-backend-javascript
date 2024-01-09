export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '' || typeof startString !== 'string') return '';
  for (const s of set) {
    if (typeof s === 'string' && s.startsWith(startString)) {
      str.push(s.replace(startString, ''));
    }
  }
  return str.join('-');
}
