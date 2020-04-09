// jshint esversion: 7

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

let arrMax = (arr) => {
  currMax = 0;
  arr.forEach((elem) => {
    if (elem >= currMax){
      currMax = elem;
    }
  });
  return currMax;
};

let sumEvens = (arr) => {
  let sum = 0;
  for (let i of arr) {
    if (arr[i - 1] % 2 == 0){
      sum = sum + arr[i];
    }
  }
  return sum;
};
