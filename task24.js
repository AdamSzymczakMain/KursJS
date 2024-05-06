// Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

// Note1: You should not modify the original array.

// Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.

// Example:

// threeInOne( [1,2,3]) should return [6]
// threeInOne( [1,2,3,4,5,6]) should return [6,15]
// threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
// threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]

//answer
// function threeInOne(arr) {
//   //coding here...
//   let sum = 0;
//   let result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     sum = sum + arr[i];
//   }
//   result.push(sum);
//   console.log(result);
// }
// threeInOne([1, 2, 3]);

// nie działa zgodnie z kata
// function threeInOne(arr) {
//   //coding here...
//   let sum1 = 0;
//   let sum2 = 0;
//   let sum3 = 0;
//   result = [];
//   for (let i = 2; i >= 0; i--) {
//     if (arr.length > 6) {
//       let newArr1 = arr.slice(0, 3);
//       let newArr2 = arr.slice(3, 6);
//       let newArr3 = arr.slice(6);

//       sum1 = sum1 + newArr1[i];
//       sum2 = sum2 + newArr2[i];
//       sum3 = sum3 + newArr3[i];
//     } else if (arr.length > 4) {
//       let newArr1 = arr.slice(0, 3);
//       let newArr2 = arr.slice(3);

//       sum1 = sum1 + newArr1[i];
//       sum2 = sum2 + newArr2[i];
//     } else {
//       let newArr1 = arr.slice(0, 3);
//       sum1 = sum1 + newArr1[i];
//     }
//   }
//   if (sum3 === 0 && sum2 > 0) {
//     result.push(sum1, sum2);
//   } else if (sum2 === 0) {
//     result.push(sum1);
//   } else {
//     result.push(sum1, sum2, sum3);
//   }

//   return result;
// }
// console.log(sum1);

// function threeInOne(arr) {
//   let result = [];

//   let sum = 0;
//   if (arr < 4) {
//     for (let i = 0; i < arr.length; i++) {
//       let newArry = arr.slice(0, 3);

//       sum = sum + newArry[i];
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       let newArry = arr.slice();
//       let new2 = newArry.splice(0, 3);
//       sum = sum + newArry[i];
//       console.log(new2);
//       // console.log(sum);
//     }
//   }
//   result.push(sum);
// }

// function threeInOne(arr) {
//   let newArry = arr.slice();
//   let result = [];

//   for (let i = 0; i < newArry.length; i++) {
//     let arr2 = newArry.splice(0, 3);
//     // console.log(arr2[i]);
//     for (let j = 0; j < arr2.length; j++) {
//       // console.log(arr2);
//       console.log(arr2[i]);
//       // console.log(sum);
//     }
//   }
// }

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// rozwiązanie

function threeInOne(arr) {
  let newArr = arr.slice();
  let result = [];

  for (let i = 0; i < newArr.length; i = i + 3) {
    let num1 = newArr[i];
    let num2 = newArr[i + 1];
    let num3 = newArr[i + 2];
    result.push(num1 + num2 + num3);
  }

  return result;
}

// threeInOne([1, 2, 3]);
// threeInOne([1, 2, 3, 4, 5, 6]);
// threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// function threeInOne(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i = i + 3) {
//     let newArr = arr.splice(0, 3);
//     let sum = 0;

//     for (let j = 0; j < newArr.length; j++) {
//       sum = sum + newArr[j];
//       console.log(sum);
//     }
//     result.push(sum);
//   }

//   return result;
// }

// threeInOne([1, 2, 3]);
// threeInOne([1, 2, 3, 4, 5, 6]);

// threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]);
threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]);
