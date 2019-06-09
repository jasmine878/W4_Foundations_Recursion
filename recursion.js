// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */
function factorialIterative(num) {
    let total = 1;

    for (let i = num; i > 0; i--) {
        total *= i;
    }

    return total;
}

function factorial(num) {
    let total = num;
    
    if (num < 1) total = 1;
    if (num > 1) total *= factorial(num - 1);

    return total;
}

function sumTheDigits(arr) {
    let sum = 0;
    
    if (arr.length > 0) sum += arr[0];
    if (arr.length > 1) sum += sumTheDigits(arr.slice(1));
    
    return sum;
}

function countTheVowels(str) {
    const VOWELS = 'aeiou';
    let firstChar = str[0]
        count = 0;
    
    if (VOWELS.includes(firstChar)) count++;
    if (str.length > 1) count += countTheVowels(str.slice(1));

    return count;
}

function recSmallestInt(arr) {
    let smallestNum = arr[0];
    
    if (arr.length > 1) {
        const nextNum = recSmallestInt(arr.slice(1));

        if (nextNum < smallestNum) {
            smallestNum = nextNum;
        }
    }
    return smallestNum;
}

//NON-RECURSIVE
// function fib(num) {
//     let count = 1,
//         firstNum = 1,
//         secondNum = 1,
//         sum = 1;

//     if (num < 2) return sum;

//     while (count < num) {
//         count++;
//         sum = firstNum + secondNum;
//         secondNum = firstNum;
//         firstNum = sum;
//     }

//     return sum;
// }

//BASE CASE IS WHEN NUM === 0 || NUM === 1
//DECREASE til we hit the base case
//build back up by adding the #s at the 2 indexes together

//0 Based Index  :  0 1 2 3 4 5 6
//Fibonacci value:  1 1 2 3 5 8 13

function fib(num) {
    debugger;
    if (num < 2) return 1;

    return fib(num - 1) + fib(num - 2);
}

//USING TYPEOF
// function type(ele) {
//     switch (typeof ele) {
//         case 'undefined':
//             return 'Undefined';
//         case 'boolean':
//             return 'Boolean';
//         case 'number':
//             return 'Number';
//         case 'string':
//             return 'String';
//         case 'function':
//             return 'Function';
//     }

//     if (Array.isArray(ele)) return 'Array';
//     if (!ele) return 'Null';

//     return 'Object';
// }

// function type(ele) {
//     return Object.prototype.toString.call(ele);
// }

// console.log(type(und))  //expect [object Undefined]
// console.log(type(nll))  //expect [object Null]
// console.log(type(bool)) //expect [object Boolean]
// console.log(type(num))  //expect [object Number]
// console.log(type(str))  //expect [object String]
// console.log(type(fnc))  //expect [object Function]
// console.log(type(arr))  //expect [object Array]
// console.log(type(obj))  //expect [object Object]

function type(ele) {
    return Object.prototype
        .toString
        .call(ele)
        .split(" ")[1]
        .slice(0, -1);
}

//SCOTTS SOLUTION!!!
// function stringify(ele) {
    
//     if (type(ele) === 'String') {
//         return `"${ele}"`;
//     }
//     if (type(ele) === 'Array') {
//         let arr = [];

//         for (let i = 0; i < ele.length; i++) {
//             arr.push(stringify(ele[i]))
//         }

//         return `[${arr.join()}]`;
//     }

//     if (type(ele) === 'Object') {
//         let keysArr = Object.keys(ele),
//             arr = [];

//         for (let i = 0; i < keysArr.length; i++) {
//             const key = keysArr[i],
//                   val = stringify(ele[key]);
            
//             arr.push(`"${key}":${val}`);
//         }

//         return `{${arr.join()}}`
//     }

//     return ele + '';
    
// }

// console.log(stringify({c: 1, d: 2}))

const arrTest = [1, 2, 3, 4]

// console.log(arrTest);            //expect [1, 2, 3, 4]
// console.log(arrTest.join());     //expect 1,2,3,4
// console.log(arrTest.join(','));  //expect 1,2,3,4

function stringify(ele) {
    if (type(ele) === 'Undefined' || type(ele) === 'Null' || type(ele) === 'Boolean' || type(ele) === 'Number') {
        return `${ele}`;
    }
    if (type(ele) === 'String') {
        return `"${ele}"`;
    }
    if (type(ele) === 'Array') {
        let arr = [];

        for (let i = 0; i < ele.length; i++) {
            let currentEle = ele[i];

            arr.push(stringify(currentEle));
        }

        return `[${arr.join(',')}]`;
    }

    if (type(ele) === 'Object') {
        let arr = [];

        for (let key in ele) {
            const newKey = stringify(key);
            const newVal = stringify(ele[key]);

            arr.push(`${newKey}:${newVal}`)
        }

        return `{${arr.join()}}`;
    }
}

function search(callback) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];

        if (Array.isArray(currentEle)) {
            if (search.call(currentEle, callback) === true) {
                return true;
            }
        } else {
            if (callback(currentEle) === true) {
                return true;
            }
        }
    }

    return false;
}

// const arr = ['yellow', 13, {}, 'something else'],
//     result = search.call(arr, function (val) {
//         return val === 13;
//     }),
//     result1 = search.call(arr, function (val) {
//         return val === 11;
//     });
// //NESTED ARRAY
// arr2 = ['a', ['b', ['c', ['d'], 'e'], 'f'], ['g'], 'h', [['i'], 'j']],
//     result3 = search.call(arr2, val => {
//         return val === 'd';
//     });
// result4 = search.call(arr2, val => {
//     return val === 'z';
// });

// console.log(result)       //expect true,  arr contains 13
// console.log(result1)      //expect false,  arr doesn't contain 11

// console.log(result3)       //expect true,  arr contains 'd'
// console.log(result4)      //expect false,  arr doesn't contain 'z'

//WORKS BUT NEED TO USE RECURSION IN THE BASE CASE
// function recursiveMap(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const currentEle = arr[i];

//         if (Array.isArray(currentEle)) {
//             result = result.concat(recursiveMap(currentEle, callback));
//         } else {
//             result.push(callback(currentEle));
//         }
//     }

//     return result;
// }

//DOESN'T HANDLE NESTING
// function recursiveMap(arr, callback) {
//   let result = [];

//   if (arr.length > 0) {
//     result.push(callback(arr[0]));
//   }
//   if (arr.length > 1) {
//     result = result.concat(recursiveMap(arr.slice(1), callback));
//   }

//   return result;
// }

function recursiveMap(arr, callback) {
    let result = [];

    if (arr.length > 0) {
        const firstEle = arr[0];

        if (Array.isArray(firstEle)) {
            result = result.concat(recursiveMap(firstEle, callback));
        }
        else result.push(callback(arr[0]));
    }
    if (arr.length > 1) {
        result = result.concat(recursiveMap(arr.slice(1), callback));
    }

    return result;
}

const func = num => {
    return num * 2;
}
const test1 = recursiveMap([1], func)
const test2 = recursiveMap([1, 2, 3, 4], func)

// console.log(test1)     //expect [2]
// console.log(test2)     //expect [2, 4, 6, 8]