// Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Example
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]
// a little hint: Flexible use of slice() Will make the work more simple.

// function isolateIt(arr) {
//   let result = arr.map((arr) => {
//     if (arr % 2) {
//       arr.slice(2, 0, "|");
//     }
//   });
//   console.log(result);
// }

function isolateIt(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].length);
    let word = arr[i];
    let length = word.length;
    if (length % 2 === 0) {
      let half = length / 2;
      // console.log(length, half);
      let firstHalf = word.slice(0, half);
      let secondHalf = word.slice(half, length);
      newArray.push(firstHalf + "|" + secondHalf);
    } else {
      let half = length / 2 - 0.5;

      let test = word.split("");
      test[half] = "|";

      newArray.push(test.join(""));
    }
  }
  console.log(newArray);
  return newArray;
}

function isolateIt(arr) {
  return arr.map((word) => {
    let length = word.length;
    if (length % 2 === 0) {
      let half = length / 2;
      // console.log(length, half);
      let firstHalf = word.slice(0, half);
      let secondHalf = word.slice(half, length);
      return firstHalf + "|" + secondHalf;
    } else {
      let half = length / 2 - 0.5;

      let test = word.split("");
      test[half] = "|";

      return test.join("");
    }
  });
}
// console.log(
//   isolateIt(["abcd", "efgh"]),
//   isolateIt(["abcde", "fghij"]),
//   isolateIt(["1234", "56789"])
// );
//////////////////////////////////////

// array = [
//   { width: 10, height: 2 },
//   { width: 2, height: 3 },
//   { width: 12, height: 12 },
// ];

// const newArray = array.map((a) => {
//   let square = a.height === a.width;

//   return { area: a.height * a.width, isSquare: square };
// });
// console.log(newArray);

// array = [
//   { firstName: "Adam", lastName: "Szymczak", age: 20 },
//   { firstName: "Grzegorz", lastName: "Twardowski", age: 21 },
//   { firstName: "John", lastName: "Doe", age: 22 },
// ];

// const newArray = array.map((a) => {
//   return { username: a.firstName + " " + a.lastName };
// });
// console.log(newArray);
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   let age = array[i].age;

//   sum = sum + age;
// }

// array.forEach((a) => {
//   sum = sum + a.age;
// });
// console.log(sum);
