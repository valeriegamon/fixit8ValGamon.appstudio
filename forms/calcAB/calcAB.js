/* 
ABScenario: You will be writing a program that uses a function and a loop. 
*/

//function declaration
function calculate(param1, param2) {
  return param1 * param2
}

/* 
function sum(sum1, sum2) {
  return sum1 + sum2
}
*/

//main program
let myNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
console.log(myNumbers)

let stoppingPoint = Math.floor(myNumbers.length/2)
//console.log(stoppingPoint)


//Let user find their own product of numbers 
let product = calculate((prompt('Insert a number')), (prompt('Insert another number')))
console.log('YOUR product is ' + product)

//Let user find product of array 
let productArray = calculate(myNumbers[0], myNumbers[1])
console.log('The product is ' + productArray)


let newNums = []
let j = 0

//Let user find product of array ONE BY ONE
for (i = 0; i <= stoppingPoint*2-1; i += 2) { 
  newNums[j] = calculate(myNumbers[i], myNumbers[i+1])
  j = j + 1
}

console.log(newNums)

let summed = []
var summation = 0;
for (i = 0; i < newNums.length; i++) {
  summed = summation += newNums[i]
}
 console.log('The sum of the products of the numbers is: ' + summed)
