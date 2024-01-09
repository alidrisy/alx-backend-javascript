export const weakMap = new WeakMap();
export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    const val = weakMap.get(endPoint);
    if (val < 4) {
      weakMap.set(endPoint, val + 1);
    } else {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endPoint, 1);
  }
}
