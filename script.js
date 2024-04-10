// Task 1

function helloWorld() {
  const str = `Hello World !`; // ""

  console.log(str);
}

// Task 2

function getLength(arr) {
  //return length of arr
  return arr.lenght;
}

//Task 5
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// Finalne rozwiązanie zadanie

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Największy problem miałem tutaj z zrozumieniem dlaczego nie można użyc kodu

// function animal(obj) {
//   return `This ${color} ${name} has ${legs} legs.`;
// }

// I pomimo tego że zadanie wcześniej zroiłem (z pomocą) dziś ponownie miałem problem zrozumieć dlaczego kod nie działa, na spokojnie przeczytałem że żeby wywoałać objekt trzeba użyć nazwy objektu + (rzeczy do wywołania).

// Task 6

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// Poczatkowy kod:
// function trueOrFalse(val){
//   if (!val)    return false;
//   else     return true;
// }
// jest on poprawny tyłko nie dodałem 'false' i 'true' przy return.
// jednak nie rozumiem dlaczego nie można użyć takiego kodu?
// function trueOrFalse(val){
//   if (val===false)    return 'false';
//   else     return 'true';

//Task 7
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

// Początkowy kod który nie działa:
// function saleHotdogs(n){
//   return n < 5 ? 100 : n < 10? 95 : 90;
// }

// po ponownym przeanalizowaniu pytania i dokładnym zastanwieniu się udało się rozwiązać zadanie. Ale nie mogłem na początku dojść dlaczego kod powyższy nie działa i próbowałem też zwykłym if else ...

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// Task 8
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

//

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
  }
  return days;
}

// Po kilku próach udało się napisać poprawny kod, jednak nie wiem dlaczego w switch(month) - dodajemy w () month i dlaczego var mamy days i dodajemy w case days?

// Task 9
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// Tutaj niestety nie byłem w stanie zrobić tego zadania próbowałem a nic nie wychodziło. Niestety będę potrzebować wytłumaczenia całego zadania

//Task 10
// Funkcja pickItprzyjmuje 1 parametr, arrktóry jest tablicą liczb. Musimy przejść arrza pomocą forpętli. Jeśli element jest liczbą nieparzystą, wypchnij go do tablicy odd, a jeśli jest liczbą parzystą, wypchnij go do eventablicy.

// Zdefiniowałem dwie tablice oddi evenw funkcji, a także napisałem instrukcję return. Twoim zadaniem jest napisanie forpętli.

//Pierwsza próba bez pomocy żadnej

// function pickIt(arr){
//   var odd=[],even=[];
//   //coding here
//   for(let i=0;i<arr.length;i++){
//     if(i % 2){
//       even.push()
//     }
//     else odd.push()
//   }

//   return [odd,even];
// }

// Kod niestety niepoprawny. przy pomocy gpt
// function pickIt(arr){
//   var odd=[],even=[];
//   //coding here
//   for(let i=0;i<arr.length;i++){
//     if(i % 2){
//       even.push(arr[i])
//     }
//     else odd.push(arr[i])
//   }

//   return [odd,even];
// }

//KOd niestety nie jest w pełni poprawny.

function pickIt(arr) {
  var odd = [],
    even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }

  return [odd, even];
} // poprawny kod jedak wspomagałem się gpt, poprosiłem czat aby wytłumaczył jedna nadal trochę nie do zrozumienia dla mnie jest if (arr[i] % 2 === 0) jednak uważam to za progres bo chyba właśnie w zadaniu 9 trzeba podobnie stworzyć odpowiedź

//Task 11

//Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// answer

function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Barbie doll" || dolls[i] === "Hello Kitty") {
      bag.push(dolls[i]);

      if (bag.length === 3) break;
    }
  }
  return bag;
}

// po ogromnej ilości prób udało się zrobić bez praktycznie żadnej pomocy i sprawdzania odpowiedzi. :D Jednak kod wpełni nie działa ponieważ nie uzyłem continue

// poprawny kod

function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") {
      continue;
    }
    bag.push(dolls[i]);

    if (bag.length === 3) break;
  }
  return bag;
}

// taks 12

// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

// answer

function giveMeFive(obj) {
  //coding here
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
  }
  for (let key in obj) {
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

//
