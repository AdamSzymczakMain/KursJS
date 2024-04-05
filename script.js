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
