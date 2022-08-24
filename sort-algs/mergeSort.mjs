export function mergeSort(arr) {

  if (arr.length === 1){
    return arr;
  };

  let arrA = mergeSort(arr.slice(0, arr.length / 2));
  let arrB = mergeSort(arr.slice(   arr.length / 2));

  let i = 0;
  let j = 0;
  let newArr = [];

  while(i < arrA.length || j < arrB.length) {
    if(i !== arrA.length && (arrA[i] < arrB [j] || j === arrB.length)) {
      newArr.push(arrA[i]);
      i++;
    } else {
      newArr.push(arrB[j]);
      j++;
    };
  };
  return newArr;
};

