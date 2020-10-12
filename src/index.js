
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix)){
    let arr = []
    arr = matrix.flat(Infinity);
    arr = arr.sort((a,b) => a - b);
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    return arr;
  }else{
    return false;
  }
}
