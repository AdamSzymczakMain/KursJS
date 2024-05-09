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
  let result = arr.map((arr) => {
    if (arr.length % 2) {
      str1 = arr.slice(0, 1);
      str2 = arr;
    }
  });
}

isolateIt(["abcd", "efgh"]);
