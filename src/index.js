module.exports = function towelSort (matrix) {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const arr4 = arr1.concat(arr2, arr3);


arr4.sort(function(a, b){
	return a - b;
});

console.log(arr4);
  return [];
}
