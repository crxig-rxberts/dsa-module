import {bubbleSort}     from './sort-algs/bubbleSort.mjs';
import {selectionSort}  from './sort-algs/selectionSort.mjs';
import {insertionSort}  from './sort-algs/insertionSort.mjs';
import {mergeSort}      from './sort-algs/mergeSort.mjs';
import {linearSearch}   from './search-algs/linearSearch.mjs';
import {binarySearch}   from './search-algs/binarySearch.mjs';
import * as fs from 'fs';

// README 
// ===================================================================================================================================================================================
// line 58 onward sort algorithm execution
// line 165 onward search algorithm execution
// line 227 onward recursion
// ===================================================================================================================================================================================
// This program executes the sort or search algorithms n times. The two main functions 'storeSortData' & 'storeSearchData' will create csv files, loop over a list of arrary 
// lengths, execute the function and then store the effiency data we get back from that. The nested for loop within the search function using index j can be changed to perform this 
// action as many times as neccessary, the function will take an average an only store that value.
// Executing the function looks like this functionCall(sortLengths, mergeSort, 'filename.csv', 1);
// Where sortLengths is a pre initialised array of sizes that you would like to be tested. mergeSort is the function name of the chosen algorithm and '1' 
// is the amount of test runs you would like to perform. See line 160 onwards.
// ===================================================================================================================================================================================


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

// sortLengths is initialised in this way so that the sort algortihms use the same set of data for each run. 

// const sortLengths = [createSortArr(100), createSortArr(1000), createSortArr(5000), createSortArr(10000), createSortArr(20000), 
//    createSortArr(40000),  createSortArr(80000),  createSortArr(120000), createSortArr(160000), createSortArr(200000), createSortArr(240000), 
//    createSortArr(280000), createSortArr(320000), createSortArr(360000), createSortArr(400000), createSortArr(450000), createSortArr(500000)];

// storeSortData(sortLengths, mergeSort, 'data/mergeSort.csv');
// storeSortData(sortLengths, bubbleSort, 'data/bubbleSort.csv');
// storeSortData(sortLengths, insertionSort, 'data/insertionSort.csv');
// storeSortData(sortLengths, selectionSort, 'data/selectionSort.csv');







// This next function is an adaption of the above for the extension on the assignment regarding insertion sort.

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
// const searchLengths = [100, 1000, 5000, 10000, 20000, 40000, 80000, 120000, 160000, 200000, 240000, 280000, 320000, 
//   360000, 400000, 450000, 500000, 600000, 700000, 800000, 900000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000];

// storeSearchData(searchLengths, binarySearch, 1000, 'binarySearch.csv');
// storeSearchData(searchLengths, linearSearch, 1000, 'linearSearch.csv');












// ---------------------------- RECURSION SECTION ----------------------------- //

// The below section is written for the recursion part of the assignment, we have the function itself and then execution capturing efficiency data
// Comments below were just to aid me in understanding the formula. 

// M = 1, C = 2, V = 3

// P(n)
// P(1) = 1
// P(2) = 2
// P(3) = 4
// P(4) = 7
// P(5) = 13
// P(6) = 24
// P(7) = 44
// P(8) = 81



// MMMMM
// CMMM
// MMMC
// MCMM
// MMCM
// VC
// CV
// MMV
// MVM
// VMM
// CCM
// CMC
// MCC

function Parking(n) {

  if(n == 1) {
    return 1;

  } else if(n == 2) {
    return 2;
  
  } else if(n == 3) {
    return 4;
  }

  return Parking(n - 1) + Parking(n - 2) + Parking(n - 3);
};


for(let i = 1; i <= 8; i = i + 1) {
  console.log(Parking(i))
}

