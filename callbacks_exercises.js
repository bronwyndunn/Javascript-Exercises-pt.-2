// class Clock {
//   constructor() {
//     const date = new Date();
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
//     this.printTime();
//
//     setInterval(this._tick.bind(this), 1000);
//     // 1. Create a Date object.
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.
//   }
//
//   printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }
//
//   _tick() {
//     if (this.seconds === 59 ) {
//       this.seconds = 0;
//       this.minutes += 1;
//       this.printTime();
//
//
//     }
//     else {
//         this.seconds += 1;
//         this.printTime();
//       }
//     }
//
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   }
// //
// // const readline = require('readline');
// // const reader = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });
//
// function addNumbers(sum, numsLeft, competionCallback) {
//   if (numsLeft > 0) {
//   reader.question("Give me a number", function(answer) {
//     let num = parseInt(answer);
//     sum += num;
//     numsLeft -= 1;
//     console.log(sum);
//     addNumbers(sum, numsLeft, competionCallback);
//   });
// } else {
//     competionCallback(sum);
//     reader.close();
//
//   }
// }


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function(answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context, ...args) {
  return () => this.apply(context);
};
