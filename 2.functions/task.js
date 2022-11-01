// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = Number((sum/arr.length).toFixed(2));

  return (`min: ${min}, max: ${max}, avg: ${avg}`);
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let a of arr){
    sum += a;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let arr of arrOfArr) {
    let sum = func(arr);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let difference = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i<arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  difference = Math.abs(max - min);
  return difference;
}
