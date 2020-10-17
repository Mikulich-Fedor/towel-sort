
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix)){
    let arr;    
    return arr = matrix.map((item,index) => !(index & 1) ? item.sort((a,b) => a - b) : item.sort((a,b) => b - a)).flat(Infinity);
  }
  else{
    return [];
  }
}
