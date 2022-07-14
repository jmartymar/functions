// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}


console.log(maxOfTwoNumbers(3, 9));
  
// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
// defining a function expression using ternary expression
const maxOfThree = function (x, y, z) {
return x >= y && x >= z ? x
        : y >= x && y >= z ? y
        : z;
}
//calling the function expression
console.log(maxOfThree(1,13,9));


// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
//defining a function declaration
function isCharAVowel (char) {
const vowels = ["A", "E", "I", "O", "U"];
return vowels.includes(char.toUpperCase());
}

//calling the function declaration
console.log(isCharAVowel("u"));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(arr) {
    let sum = 0;
    arr.forEach(function(value) {
        sum += value;
    })
    return sum;
}

console.log(sumArray([1,2,3]));

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multipleArray(arr) {
    let prod = 0;
    arr.forEach(function(value) {
        if(prod === 0) {
            prod = value;
        } else {
            prod *= value;
        }
    })
    return prod;
}

console.log(multipleArray([2,2,3]));

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.


const numArgs = function() {
    return arguments.length;
}

console.log(numArgs(1,2,3,4));


// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let reverseStr = reverseArr.join("");
    return reverseStr;
}

console.log(reverseString("Hello"));

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arr) {
    let longestStr = 0;
    arr.forEach(function(str) {
        if(str.length >= longestStr) {
            longestStr = str.length;
        }
    })
    return longestStr;
}

console.log(longestStringInArray(["Hi", "Yup", "Noway", "Sure"]));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
    let longestStringArr = []
    arr.forEach(function(str) {
        if(str.length > num) {
            longestStringArr.push(str);
        }
    })
    return longestStringArr;
}

console.log(stringsLongerThan(["Hi", "Yup", "Noway", "Sure"],3));

