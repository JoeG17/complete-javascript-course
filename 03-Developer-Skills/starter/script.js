// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// function calcMaxValue(temps) {
//   let max = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;

//     if (temps[i] > max) {
//       max = temps[i];
//     }
//   }
//   return max;
// }

// function calcMinValue(temps) {
//   let min = temps[0];

//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   return min;
// }

// function calcTempAmplitute(temp1, temp2) {
//   const temp3 = temp1.concat(temp2);

//   const min = calcMinValue(temp3);
//   const max = calcMaxValue(temp3);

//   console.log(min, max);

//   return max - min;
// }

// const temp1 = [19, 6, 10, 'error', 12, 14, -6];

// const temp2 = [3, 5, -4, 100];

// console.log(calcTempAmplitute(temp1, temp2));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degree celsius:'),
//   };
//   debugger;
//   console.warn(measurement.value);
//   console.table(measurement);

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// // identify bug
// console.log(measureKelvin());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//1 Create function
//2 first set is ... so need to create for loop

function printForecast(arr) {
  let forecast = '';

  for (let i = 0; i < arr.length; i++) {
    forecast =
      forecast +
      `${arr[i]} Degrees Celsius in ${i + 1} ${
        i + 1 <= 1 ? 'day' : 'days'
      } ... `;
  }

  console.log('... ' + forecast);
}

printForecast([12, 5, -5, 0, 4]);
