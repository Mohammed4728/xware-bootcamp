//1) Create a function that takes an integer as an argument and returns "Even" for even 
// numbers or "Odd" for odd numbers.


// function CheckNum(number) {
//     switch (true) {
//         case typeof number !== 'number':
//             console.log("This is not a number");
//             break;
//         case number % 2 === 0:
//             console.log("This is even");
//             break;
//         default:
//             console.log("This is odd");
//             break;
//     }
// }
// CheckNum(5);

////////////////////////////////////////////////////////////////////////////////////////////////

//2) You get an array of numbers, return the sum of all of the positives ones.


//way 1

// let number = [5,6,3,7,-10,-50];
// let result = number.filter(checkSign);

// function checkSign(num) {
//     return  num>= 0;
//   }
// let sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 

//way 2

// let numbers = [1, -4, 7, 12];
// function sumOfPositives(arr) {
//     return arr
//         .filter(num => num > 0)
//         .reduce((accumulator, currentValue) => accumulator + currentValue, 0); [search this]
// }
// let sum = sumOfPositives(numbers);
// console.log(sum); 

////////////////////////////////////////////////////////////////////////////////////////////////////////

//3) Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element 
// ( by value, not by index! ).

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// const middlePoints = points.slice(1, 5);
// console.log(middlePoints)
// const sum = middlePoints.reduce((accumulator, currentValue) => {
// return accumulator + currentValue;}, 0);
// console.log(sum); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4)String-repeat  ==> Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// let result = repeatString(3, "hello ");
// function repeatString(n, s) {
//     return s.repeat(n);
// }
// console.log(result); 

///////////////////////////////////////////////////////////////////////////////////////////////////////

//5)Given a random non-negative number, you have to return the digits of this number within an array 
// in reverse order.

// let result = reverseDigits(348597);
// function reverseDigits(num) {
//     return num
//         .toString()
//         .split('')
//         .reverse()
//         .map(Number);
// }
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//6)Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present). [read again]

// const sheepArray = [true, true, false, true, false, false, true, true, false, true];
// function countSheep(arrayOfSheep) {
//   return arrayOfSheep.filter(sheep => sheep === true).length;
// }
//   const numberOfSheep = countSheep(sheepArray);
//   console.log(numberOfSheep);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//7)Very simple, given a number (integer / decimal / both depending on the language), 
// find its opposite (additive inverse). ex 1 = -1  [there is more ways , do later]

// let x = -5;
// function inverse(){
//   return x = -x
// }
// console.log(inverse())

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//8)In this simple assignment you are given a number and have to make it negative.
//  But maybe the number is already negative?

// let x = 5;
// function negative(){
//   if (x>0) {
//     console.log(-x);
//   } else {
//     console.log(x);
//   }
// }
// negative();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//9)Write a function findNeedle() that takes an array full of junk but containing one "needle" 
// After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:

// const haystack = ["hay", "junk", "hay", "hay", "needle", "more junk", "hay"];
// function findNeedle(haystack) {
//     let position = haystack.indexOf("needle");
//     return `found the needle at position ${position}`; //resurch this more
//   }
//   console.log(findNeedle(haystack));
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//10)Return an array, where the first element is the count of positives numbers and the second 
// element is sum of negative numbers. 0 is neither positive nor negative.

// let arr = [1,2,3,4,5,0,-1.-2.-3.-4.-5];

// function sum(number) {
//     let sumPositive = 0;
//     let sumNegative = 0;

//     number.forEach(item => {
//         item > 0 ? sumPositive++ : sumNegative +=item
//     });
//         return [sumPositive , sumNegative];
// }
// console.log(sum(arr));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11)Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//  Example: String === SSttrriinngg

// let x = "String";
// function doubleChar(str) {
//     return str.split('').map(char => char + char).join('');
// }
// console.log(doubleChar(x)); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//12)Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the

function mathematicalOperations (operation , value1 , value2){
    switch (operation) {
        case "+":
            return value1 + value2
            break;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return "Invalid Operation"
            break;
    }
}
let value1 = 15;
let value2 = 5;

console.log(mathematicalOperations("+", value1, value2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//14)Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// function multiples(x, n) {
//     let result = [];
//     for (let i = 1; x * i <= n; i++) {
//         result.push(x * i);
//     }
//     return result;
// }
// console.log(multiples(3, 10));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//15)Write a function that removes the spaces from the string, then return the resultant string.

// let x = "This is JavaScript"
// function removeSpaces(str) {
//     return str.replace(/\s+/g, '');
//   }
//   console.log(removeSpaces(x));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//16)Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
// and the negatives become positives. Example:[ -1, 2, -3, 4, -5 ] ===> [ 1, -2, 3, -4, 5 ]

// let x = [-1, 2, -3, 4, -5];
// function invertArray(arr) {
//     return arr.map(num => -num);
//   }
//   console.log(invertArray(x)); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//17)Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.  [read it again]

// function boolToWord(bool) {
//     return bool ? "Yes" : "No";
//   }
  
//   console.log(boolToWord(true));
//   console.log(boolToWord(false));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//18)You need to write a function that reverses the words in a given string. A word can also fit an empty string. 
// If this is not clear enough, here are some examples: "Hello World" --> "World Hello"

// let str = "Hello World"
// console.log(str.split(' ').reverse().join(' '))


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//19)Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, 

// let hours = 30;
// let litres = 0.5 * hours;
// console.log(litres);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//20)We need a function that can transform a number (integer) into a string. Examples 123  --> "123"

// let num = 15;
// let text = num.toString();
// console.log(text)
// console.log(typeof text);

////////////////////////////////////////////////////////////////////////////////////////////////////

//22)We need a function that can transform a string into a number. What ways of achieving this do you know? 
// Examples "1234" --> 1234

//way 1

// let num = "1234";
// let str = +num;
// console.log(str);
// console.log(typeof str);

//way 2

// let num = "1234";
// let str = parseInt(num)
// console.log(str);
// console.log(typeof str);

//way 3

// let num = "1234";
// let str = parseFloat(num)
// console.log(str);
// console.log(typeof str);

//way 4

// let num = "1234";
// let str = munber(num)
// console.log(str);
// console.log(typeof str);

////////////////////////////////////////////////////////////////////////////////////////////////////

//29)Take an array and remove every second element from the array. Always keep the first element and start 
// removing with the next element. Example:["Keep", "Remove", "Keep", "Remove", "Keep", ...] 
// --> ["Keep", "Keep", "Keep", ...]

// let x = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"]
// function removeSecondElement(arr) {
//     return arr.filter((_, index) => index % 2 === 0);
//   }
// console.log(removeSecondElement(x));


////////////////////////////////////////////////////////////////////////////////////////////////////




