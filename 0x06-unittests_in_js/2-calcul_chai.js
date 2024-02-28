/**
 * a function round a number and sum
 * @param {String} type a type of opration
 * @param {Number} a a number to rounded
 * @param {Number} b a number to rounded
 * @returns return the sum of a and b
 */
const calculateNumber = (type, a, b) => {
  if (type === 'SUM'){
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
};
    
module.exports = calculateNumber;
