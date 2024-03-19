// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function calcMaxValue(temps) {
  let max = temps[0];

  for (let i = 1; i < temps.length; i++) {

    if (typeof temps[i] !== 'number') continue

    if (temps[i] > max) {
      max = temps[i];
    }
  }
  return max;
}

function calcMinValue(temps) {
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {

    if (typeof temps[i] !== 'number') continue
    if (temps[i] < min) {
      min = temps[i];
    }   
  }
  return min;
}

function calcTempAmplitute(temps) {

    const min = calcMinValue(temps);
    const max = calcMaxValue(temps);

    console.log(min, max);

    return max - min;
}

const tempArrays = [19, 6, 10, 'error', 12, 14, -6];


console.log(calcTempAmplitute(tempArrays));


