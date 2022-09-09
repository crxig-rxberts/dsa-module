import {bubbleSort}     from './sort-algs/bubbleSort.mjs';
import {selectionSort}  from './sort-algs/selectionSort.mjs';
import {insertionSort}  from './sort-algs/insertionSort.mjs';
import {mergeSort}      from './sort-algs/mergeSort.mjs';
import {linearSearch}   from './search-algs/linearSearch.mjs';
import {binarySearch}   from './search-algs/binarySearch.mjs';
import * as fs from 'fs';

// README 
// This program executes the sort or search algorithms n times. The two main functions 'storeSortData' & 'storeSearchData' will create csv files, loop over a list of arrary lengths,
// execute the function and then store the effiency data we get back from that. The nested for loop within both functions using index j can be changed to perform this action as many times
// as neccessary, the functions will take an average an only store that value.
// Executing the function looks like this functionCall(sortLengths, mergeSort, 'filename.csv', 1);
// Where sortLengths is a pre initialised array of sizes that you would like to be tests. mergeSort is the function name of the chosen algorithm and '1' is the amount of test runs you would like to perform.



function createSortArr(length) {
  let arr = [];
  for(let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random()*length));
  };
  return arr;
};

function createPartSortArr(length) {

  let part93  = Math.floor(length * 0.93);
  let part07  = Math.floor(length * 0.07);
  let arr     = [];

  for(let i = 0; i < part93; i++) {
    arr.push(i);
  };

  for(let i = 0; i < part07; i++) {
    arr.push(length - i);
  };
  return arr;
};

function createSearchArr(length) {
  let arr = [];
  for(let i = 1; i < length + 1; i++) {
    arr.push(i);
  };
  return arr;
};



// --------------- SORT ------------- //

function storeSortData(lengthsList, func, _file) {

  // creates an empty csv file using the _file parameter
  fs.writeFileSync(_file, '', 'utf8', (err) => {
    if (err) {
      console.log('An error occured during creation');
    } else {
      console.log('File created');
    };
  });

  // loops over the lengthsList, so that we call the function for each array length
  for(let i = 0; i < lengthsList.length; i++) {

    // captures the execution time of the given function for that array length (lengthsList[i])
    let arr       = lengthsList[i];
    let startTime = new Date().getTime();
    func(arr);
    let endTime   = new Date().getTime();
    let excTime = (endTime - startTime);

    // appends this data to the file in the format... arrayLength, excTime
    fs.appendFileSync(_file, lengthsList[i].length + ', ' + excTime + '\n', 'utf8', (err) => {
      if (err) {
        console.log('An error occured during append: ' + i);
      } else {
        console.log('Data appended: ' + i);
      };
    });
  };
};


const sortLengths = [createSortArr(100), createSortArr(1000), createSortArr(5000), createSortArr(10000), createSortArr(20000), 
  createSortArr(40000),  createSortArr(80000),  createSortArr(120000), createSortArr(160000), createSortArr(200000), createSortArr(240000), 
  createSortArr(280000), createSortArr(320000), createSortArr(360000), createSortArr(400000), createSortArr(450000), createSortArr(500000)];

storeSortData(sortLengths, mergeSort, 'data/mergeSort.csv', 1);
storeSortData(sortLengths, bubbleSort, 'data/bubbleSort.csv', 1);
storeSortData(sortLengths, insertionSort, 'data/insertionSort.csv', 1);
storeSortData(sortLengths, selectionSort, 'data/selectionSort.csv', 1);


// This next function is an adaption of the above for the extension on the assignment regarding assertion sort.

function storePartSortData(lengthsList, func, _file, runCount) {

  // creates an empty csv file using the _file parameter
  fs.writeFileSync(_file, '', 'utf8', (err) => {
    if (err) {
      console.log('An error occured during creation');
    } else {
      console.log('File created');
    };
  });

  // loops over the lengthsList, so that we call the function for each array length
  for(let i = 0; i < lengthsList.length; i++) {
    
    let excTimeList = [];

    // loops 10 times, so that we test with every array length 10 times and store the average
    for(let j = 0; j < runCount; j++) {
      let arr       = createPartSortArr(lengthsList[i]);
      let startTime = new Date().getTime();
      func(arr);
      let endTime   = new Date().getTime();
      excTimeList.push(endTime - startTime);
    };

    // gets the average of all 10 runs on a single array length, lloping over our excTimeList
    let avgExcTime = 0;
    for(let i = 0; i < excTimeList.length; i++) {
      avgExcTime += excTimeList[i];
    };
    avgExcTime = avgExcTime / excTimeList.length;

    // appends this data to the file in the format... arrayLength, avgTime/ms
    fs.appendFileSync(_file, lengthsList[i] + ', ' + avgExcTime + '\n', 'utf8', (err) => {
      if (err) {
        console.log('An error occured during append ' + i);
      } else {
        console.log('Data appended ' + i);
      };
    });
  };
};

// storePartSortData(sortLengths, insertionSort, 'insertionPartSort.csv', 1);


// --------------- SEARCH --------------- //
function storeSearchData(lengthsList, func, runCount, _file) {

  // creates an empty csv file using the _file parameter
  fs.writeFileSync(_file, '', 'utf8', (err) => {
    if (err) {
      console.log('An error occured during creation');
    } else {
      console.log('File created');
    };
  });

  // loops over the lengthsList, so that we call the function for each array length
  for(let i = 0; i < lengthsList.length; i++) {
    
    let guessNumList = [];

    // loops n times, (n = runCount) so that we test with every array length n times and store the average
    for(let j = 0; j < runCount; j++) {

      let arr          = createSearchArr(lengthsList[i]);
      let target_value = Math.floor(Math.random()*arr.length);
      let guesses      = func(arr, target_value);

      guessNumList.push(guesses);
    };

    // gets the average of n runs on a single array length, (n = runCount) looping over our guessNumList
    let avgGuessNum = 0;
    for(let i = 0; i < guessNumList.length; i++) {

      avgGuessNum = avgGuessNum + guessNumList[i];
    };
  
    avgGuessNum = Math.floor(avgGuessNum / guessNumList.length);

    // appends this data to the file in the format ->  arrayLength, avgGuessNum
    fs.appendFileSync(_file, lengthsList[i] + ', ' + avgGuessNum + '\n', 'utf8', (err) => {
      if (err) {
        console.log('An error occured during append number: ' + i);
      } else {
        console.log('Data appended: ' + i);
      };
    });
  };
};

// Execution
const searchLengths = [100, 1000, 5000, 10000, 20000, 40000, 80000, 120000, 160000, 200000, 240000, 280000, 320000, 
  360000, 400000, 450000, 500000, 600000, 700000, 800000, 900000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000];

storeSearchData(searchLengths, binarySearch, 1000, 'binarySearch.csv');
storeSearchData(searchLengths, linearSearch, 1000, 'linearSearch.csv');