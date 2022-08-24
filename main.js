import {bubbleSort} from './sort-algs/bubbleSort.mjs';
import {selectionSort} from './sort-algs/selectionSort.mjs';
import {insertionSort} from './sort-algs/insertionSort.mjs';
import {mergeSort} from './sort-algs/mergeSort.mjs';




function createArr(length) {
  let arr = [];
  for(let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random()*length));
  };
  return arr;
};

const arr100   = createArr(100);
const arr1k    = createArr(1000);
const arr5k    = createArr(5000);
const arr10k   = createArr(10000);
const arr20k   = createArr(20000);
const arr40k   = createArr(40000);
const arr80k   = createArr(80000);
const arr120k  = createArr(120000);
const arr160k  = createArr(160000);
const arr200k  = createArr(200000);
const arr240k  = createArr(240000);
const arr280k  = createArr(280000);
const arr320k  = createArr(320000);
const arr360k  = createArr(360000);
const arr400k  = createArr(400000);
const arr450k  = createArr(450000);
const arr500k  = createArr(500000);




// selction sort times

// let selection100Start = new Date().getTime();
// selectionSort(arr100);
// let selection100End = new Date().getTime();
// let selection100 = (selection100End - selection100Start);
// console.log(selection100);

// let selection1kStart = new Date().getTime();
// selectionSort(arr1k);
// let selection1kEnd = new Date().getTime();
// let selection1k = (selection1kEnd - selection1kStart);
// console.log(selection1k);

// let selection5kStart = new Date().getTime();
// selectionSort(arr5k);
// let selection5kEnd = new Date().getTime();
// let selection5k = (selection5kEnd - selection5kStart);
// console.log(selection5k);

// let selection10kStart = new Date().getTime();
// selectionSort(arr10k);
// let selection10kEnd = new Date().getTime();
// let selection10k = (selection10kEnd - selection10kStart);
// console.log(selection10k);

// let selection20kStart = new Date().getTime();
// selectionSort(arr20k);
// let selection20kEnd = new Date().getTime();
// let selection20k = (selection20kEnd - selection20kStart);
// console.log(selection20k);

// let selection40kStart = new Date().getTime();
// selectionSort(arr40k);
// let selection40kEnd = new Date().getTime();
// let selection40k = (selection40kEnd - selection40kStart);
// console.log(selection40k);

// let selection80kStart = new Date().getTime();
// selectionSort(arr80k);
// let selection80kEnd = new Date().getTime();
// let selection80k = (selection80kEnd - selection80kStart);
// console.log(selection80k);

// let selection120kStart = new Date().getTime();
// selectionSort(arr120k);
// let selection120kEnd = new Date().getTime();
// let selection120k = (selection120kEnd - selection120kStart);
// console.log(selection120k);

// let selection160kStart = new Date().getTime();
// selectionSort(arr160k);
// let selection160kEnd = new Date().getTime();
// let selection160k = (selection160kEnd - selection160kStart);
// console.log(selection160k);

// let selection200kStart = new Date().getTime();
// selectionSort(arr200k);
// let selection200kEnd = new Date().getTime();
// let selection200k = (selection200kEnd - selection200kStart);
// console.log(selection200k);

// let selection240kStart = new Date().getTime();
// selectionSort(arr240k);
// let selection240kEnd = new Date().getTime();
// let selection240k = (selection240kEnd - selection240kStart);
// console.log(selection240k);

// let selection280kStart = new Date().getTime();
// selectionSort(arr280k);
// let selection280kEnd = new Date().getTime();
// let selection280k = (selection280kEnd - selection280kStart);
// console.log(selection280k);

// let selection320kStart = new Date().getTime();
// selectionSort(arr320k);
// let selection320kEnd = new Date().getTime();
// let selection320k = (selection320kEnd - selection320kStart);
// console.log(selection320k);

// let selection360kStart = new Date().getTime();
// selectionSort(arr360k);
// let selection360kEnd = new Date().getTime();
// let selection360k = (selection360kEnd - selection360kStart);
// console.log(selection360k);

// let selection400kStart = new Date().getTime();
// selectionSort(arr400k);
// let selection400kEnd = new Date().getTime();
// let selection400k = (selection400kEnd - selection400kStart);
// console.log(selection400k);

// let selection450kStart = new Date().getTime();
// selectionSort(arr450k);
// let selection450kEnd = new Date().getTime();
// let selection450k = (selection450kEnd - selection450kStart);
// console.log(selection450k);

// let selection500kStart = new Date().getTime();
// selectionSort(arr500k);
// let selection500kEnd = new Date().getTime();
// let selection500k = (selection500kEnd - selection500kStart);
// console.log(selection500k);




// // 1k Times

// let bubble1kStart = new Date().getTime();
// bubbleSort(arr1k);
// let bubble1kEnd = new Date().getTime();
// let bubble1k = (bubble1kEnd - bubble1kStart);
// console.log(bubble1k);

// let selection1kStart = new Date().getTime();
// selectionSort(arr1k);
// let selection1kEnd = new Date().getTime();
// let selection1k = (selection1kEnd - selection1kStart);
// console.log(selection1k);

// let insertion1kStart = new Date().getTime();
// insertionSort(arr1k);
// let insertion1kEnd = new Date().getTime();
// let insertion1k = (insertion1kEnd - insertion1kStart);
// console.log(insertion1k);

// let merge1kStart = new Date().getTime();
// mergeSort(arr1k);
// let merge1kEnd = new Date().getTime();
// let merge1k = (merge1kEnd - merge1kStart);
// console.log(merge1k);

// console.log("-------------------------------")

// // 10k Times

// let bubble10kStart = new Date().getTime();
// bubbleSort(arr10k);
// let bubble10kEnd = new Date().getTime();
// let bubble10k = (bubble10kEnd - bubble10kStart);
// console.log(bubble10k);


// let selection10kStart = new Date().getTime();
// selectionSort(arr10k);
// let selection10kEnd = new Date().getTime();
// let selection10k = (selection10kEnd - selection10kStart);
// console.log(selection10k);


// let insertion10kStart = new Date().getTime();
// insertionSort(arr10k);
// let insertion10kEnd = new Date().getTime();
// let insertion10k = (insertion10kEnd - insertion10kStart);
// console.log(insertion10k);

// let merge10kStart = new Date().getTime();
// mergeSort(arr10k);
// let merge10kEnd = new Date().getTime();
// let merge10k = (merge10kEnd - merge10kStart);
// console.log(merge10k);

// console.log("-------------------------------")



// // 100k Times

// let bubble100kStart = new Date().getTime();
// bubbleSort(arr100k);
// let bubble100kEnd = new Date().getTime();
// let bubble100k = (bubble100kEnd - bubble100kStart);
// console.log(bubble100k);


// let selection100kStart = new Date().getTime();
// selectionSort(arr100k);
// let selection100kEnd = new Date().getTime();
// let selection100k = (selection100kEnd - selection100kStart);
// console.log(selection100k);


// let insertion100kStart = new Date().getTime();
// insertionSort(arr100k);
// let insertion100kEnd = new Date().getTime();
// let insertion100k = (insertion100kEnd - insertion100kStart);
// console.log(insertion100k);


// let merge100kStart = new Date().getTime();
// mergeSort(arr100k);
// let merge100kEnd = new Date().getTime();
// let merge100k = (merge100kEnd - merge100kStart);
// console.log(merge100k);

// console.log("-------------------------------")


// // 1m Times

// // let bubble1mStart = new Date().getTime();
// // bubbleSort(arr1m);
// // let bubble1mEnd = new Date().getTime();
// // let bubble1m = (bubble1mEnd - bubble1mStart);
// // console.log(bubble1m);


// // let selection1mStart = new Date().getTime();
// // selectionSort(arr1m);
// // let selection1mEnd = new Date().getTime();
// // let selection1m = (selection1mEnd - selection1mStart);
// // console.log(selection1m);


// // let insertion1mStart = new Date().getTime();
// // insertionSort(arr1m);
// // let insertion1mEnd = new Date().getTime();
// // let insertion1m = (insertion1mEnd - insertion1mStart);
// // console.log(insertion1m);

// // let merge1mStart = new Date().getTime();
// // mergeSort(arr1m);
// // let merge1mEnd = new Date().getTime();
// // let merge1m = (merge1mEnd - merge1mStart);
// // console.log(merge1m);
