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

// let number = [5,6,3,7,-10,-50];
// let result = number.filter(checkSign);

// function checkSign(num) {
//     return  num>= 0;
//   }
// let sum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); 

////

// let numbers = [1, -4, 7, 12];
// function sumOfPositives(arr) {
//     return arr
//         .filter(num => num > 0)
//         .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// let sum = sumOfPositives(numbers);
// console.log(sum); 

////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//8)In this simple assignment you are given a number and have to make it negative.
//  But maybe the number is already negative?



///////////////////////////////////////////////////////////////////////////////////////////////////////////

//20)We need a function that can transform a number (integer) into a string. Examples 123  --> "123"

// let num = 15;
// let text = num.toString();
// console.log(text)
// console.log(typeof text);

////////////////////////////////////////////////////////////////////////////////////////////////////



//22)We need a function that can transform a string into a number. What ways of achieving this do you know? 
// Examples "1234" --> 1234

// let num = "1234";
// let str = +num;
// console.log(str);
// console.log(typeof str);

////

// let num = "1234";
// let str = parseInt(num)
// console.log(str);
// console.log(typeof str);

////

// let num = "1234";
// let str = parseFloat(num)
// console.log(str);
// console.log(typeof str);

////

// let num = "1234";
// let str = munber(num)
// console.log(str);
// console.log(typeof str);

////////////////////////////////////////////////////////////////////////////////////////////////////


