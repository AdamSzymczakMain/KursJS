// TASK 22
// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// Example:

// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

// ANSWER
// niesetety nic nie jest w stanie zrobić w tym zadaniu
let shuffleIt = (arr, ...arrB) => {
  for (let i = 0; i < arrB.length; i++) {
    let [from, to] = arrB[i];
    [arr[from], arr[to]] = [arr[to], arr[from]];
    console.log(arr);
  }
};

shuffleIt([1, 2, 3, 4, 5], [1, 2]);
shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]);

//task wykonany, z pomoc było dużo łatwiej
