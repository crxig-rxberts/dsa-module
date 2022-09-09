export function binarySearch(arr, value) {

  let mid;
  let low      = 0;
  let high     = arr.length;
  let guess_no = 0;

  while(low <= high) {

    guess_no++
    mid = Math.floor((low + high) / 2);

    if(arr[mid] === value) {

      return guess_no;

    } else if (arr[mid] < value) {

      low = mid + 1;

    } else {

      high = mid - 1;
    };
  };
  return -1;
};