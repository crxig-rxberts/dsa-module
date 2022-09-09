export function insertionSort(arr) {

  for(let i = 1; i < arr.length; i++) {

    let current = arr[i];
    let j;

    for(j = i - 1; j >= 0 && arr[j] > current; j--) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    };

  };
  return arr;
};


