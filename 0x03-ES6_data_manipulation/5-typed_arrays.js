export default function createInt8TypedArray(len, pos, val) {
  if (pos < 0 || pos >= len) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(len);
  const arr8 = new DataView(buffer);
  arr8.setInt8(pos, val);
  return arr8;
}
