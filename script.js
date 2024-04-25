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

// answer

// nadal bez pomocy nie potrafiłem zrobić tego zdania
function padIt(str, n) {
  //coding here
  while (n > 0) {
    if (n % 2) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    n--;
  }
  return str;
}

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

// Count words

// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

// potrzebuje wytłumaczenia

//Task 13Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

// answer

function whatNumberIsIt(n) {
  //coding here
  if (n === 1.7976931348623157e308) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === 5e-324) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    return `Input number is Number.NaN`;
  } else if (n === -Infinity) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Infinity) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else return `Input number is ${n}`;
}

// zadanie rozwiązanie całkie sprawie jednyny kłopoto był przy else if (isNaN(n)) ale udało się wyszukać rozwiązania jak używać isNaN()

// task 14Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.

// for example:

// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"
// That's all of your work. My work is print your color code on your screen.

function colorOf(r, g, b) {
  //coding here
  let colorR = r.toString(16).padStart(2, "0");
  let colorG = g.toString(16).padStart(2, "0");
  let colorB = b.toString(16).padStart(2, "0");

  let color = colorR + colorG + colorB;

  return "#" + color;
}

// zadanie zrobione, jedynie potrzebna była pomoc
// przy padStart() nie wiedziałem dlaczego bez tego nie chciała mu
//zwrócić poprawengo ciągu.

//task 15

// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

//answer

function howManySmaller(arr, n) {
  //coding here..
  let twoParameter = arr.map((arr) => arr.toFixed(2));
  let result = [];

  for (let i = 0; i < twoParameter.length; i++) {
    if (twoParameter[i] < n) {
      result.push(twoParameter[i]);
    }
  }
  return result.length;
}

// udało się cały kod zrobić, miałem tylko na początku problem bo
//zamiast tablicy w result podstawiłem 0 i zwracało mi błąd.

//task 16
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
function cutIt(arr) {
  //coding here...
  let shortStr = arr[0].length;
  let shortArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortStr) {
      shortStr = arr[i].length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    shortArr.push(arr[i].slice(0, shortStr));
  }
  return shortArr;
}

// kod rozwiązany z pomocą, nie wiedziałem jak wyszukać najkrótszy string w tablicy

//task 17
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

//
function firstToLast(str, c) {
  //coding here..
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);

  if (first >= 0 && last >= 0) {
    return last - first;
  } else if (first === -1 && last === -1) return -1;
  else return 0;
}

// kod działa poprawnie, ale nie wiem czemu nie działa mi wcześniej gdy miałem zapisałego go w sposób

function firstToLast(str, c) {
  //coding here..
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);

  if (first >= 0 && last >= 0) {
    return last - first;
  } else if (first === last) return 0;
  else if (first === -1 && last === -1) return -1;
}

// task 18

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

// pierwsza odpowiedź
function splitAndMerge(string, separator) {
  return string.split("").join(separator);
}

// niestety błędna
function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((word) => word.split("").join(separator))
    .join(" ");
}
// bez pomcy był nigdy do tego nie doszedł.

//Task 19
// o co chodzi z tym /\b\w/g
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier

function alienLanguage(str) {
  //coding here...
  let upper = str.toUpperCase();
  let arr = upper.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, -1) + arr[i][arr[i].length - 1].toLowerCase();
  }

  return arr.join(" ");
}

// niestety nie wiedział jak pętli zrobić aby zamienić ostatnia litere na mała

// task 20
// Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:

// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"
// Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".

// This task may be more difficult for beginners. Good Luck!

// Some trainer may have doubts about the three questions, the following is some explanation, I hope to be helpful to the trainer.

// for example, after you click "submit", you see these text on your screen:

// Top secret files: No. 3330
// Super agent eEB, on a dark night, stole the Apple core from National Museum, causing $100 million in damage.
// and then:

// question 1 should answer:"3330"
// question 2 should answer:"eEB"
// question 3 should answer:"Apple core"
// if you haven't seen something like the text above, perhaps your decryption code is not correct ;-)

// Although the text is not the same every time, the next time may appear:

// Top secret files: No. 2135
// Super agent ZIUScE, on a dark night, stole the Lolli pop from National Museum, causing $100 million in damage.
// You only need to choose one of the text as the answer to the question. That is to say, any one of them is the correct answer.

// function topSecret(str) {
//   //coding here...
//   let chars = [];
//   let min = 97;
//   let max = 123;
//   let minUpper = 65;
//   let maxUpper = 90;

//   for (let i = 0; i < str.length; i++) {
//     let code = str[i].charCodeAt() - 3;

//     if (code <= maxUpper && code >= minUpper) {
//       chars.push(String.fromCharCode(code));
//     }

//     if (str[i] === " ") {
//       chars.push(code[i]);
//     }

//     if (code < min) {
//       chars.push(String.fromCharCode(max - (min - code)));
//     } else {
//       chars.push(String.fromCharCode(code));
//     }
//   }
//   console.log(chars.join(""));

//   return chars.join("");
// }

// topSecret("Pb qdph lv Mrkq");

// kod który stworzyłem sam niestety nie dziala nie wiem jak go dalej ruszyć.

// kolejna próba

function topSecret(str) {
  //coding here...
  let chars = [];
  let min = 97;
  let max = 123;
  let minUpper = 65;
  let maxUpper = 90;
  let maxSpecial = 35;
  let minSpecial = 30;

  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt() - 3;

    if (str[i] === " ") {
      chars.push(str[i]);
    } else if (code <= maxUpper && code >= minUpper) {
      chars.push(String.fromCharCode(code));
    } else if (code <= maxSpecial && code >= minSpecial) {
      chars.push(String.fromCharCode(code + 3));
    } else if (code < min) {
      chars.push(String.fromCharCode(max - (min - code)));
    } else chars.push(String.fromCharCode(code));
  }

  return chars.join("");
}

topSecret("Pb qdph lv Mrkq");

// udało się dojść do kodu końcowego.

// task loop while

// function drawSix() {
//   let i = 1;

//   while (i) {
//     let random = Math.floor(Math.random() * 6) + 1;
//     if (random === 6) {
//       console.log(`Congrats! You drew 6 in ${i} tries`);
//       break;
//     }

//     i++;
//   }
// }
// drawSix();

// Task 21
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ")
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it

// answer

// function fiveLine(s) {
//   s = s.trim();
//   let str = "";
//   let arr = []
//   for (let i = 0; i < 5; i++) {
//     arr.push(str=str+s)
//   }
//   return arr.join('\n');
// }

// fiveLine("a");

//task 23

// Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

// You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

// Finally, return arr.

// answer
function infiniteLoop(arr, d, n) {
  //coding here...

  if (d === "left") {
    for (let i = 0; i < n; i++) {
      arr[2].push(arr[0].shift()) &
        arr[1].push(arr[2].shift()) &
        arr[0].push(arr[1].shift());
    }
  } else {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop()) &
        arr[2].unshift(arr[1].pop()) &
        arr[1].unshift(arr[0].pop());
    }
  }
  console.log(arr);
}

// infiniteLoop(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   "left",
//   1
// );

// infiniteLoop(
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ],
//   "right",
//   1
// );

// zadanie rozwiązane bez większy problemów tylko czy kod w miare czytelny to jest pytanie

//Task 24
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
function threeInOne(arr) {
  //coding here...
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  result = [];
  for (let i = 2; i >= 0; i--) {
    if (arr.length > 6) {
      let newArr1 = arr.slice(0, 3);
      let newArr2 = arr.slice(3, 6);
      let newArr3 = arr.slice(6);

      sum1 = sum1 + newArr1[i];
      sum2 = sum2 + newArr2[i];
      sum3 = sum3 + newArr3[i];
    } else if (arr.length > 4) {
      let newArr1 = arr.slice(0, 3);
      let newArr2 = arr.slice(3);

      sum1 = sum1 + newArr1[i];
      sum2 = sum2 + newArr2[i];
    } else {
      let newArr1 = arr.slice(0, 3);
      sum1 = sum1 + newArr1[i];
    }
  }
  if (sum3 === 0 && sum2 > 0) {
    result.push(sum1, sum2);
  } else if (sum2 === 0) {
    result.push(sum1);
  } else {
    result.push(sum1, sum2, sum3);
  }

  return result;
}
// console.log(sum1);
threeInOne([1, 2, 3]);
threeInOne([1, 2, 3, 4, 5, 6]);
threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]);
