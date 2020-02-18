/*
You will be using anon-standard for loop to cycle through an array, outputing each item one per line, but backwards. That is, the last name in the array will be output first, etc.
  Hint: can you adjust something in the loop?
Each time the loop runs, it must output a name. 
So eventally your program will have output each name, one name per line.
The output must be to the console, with the first line showing the last name in the array, then the second line showing the second to last name in the array, etc. until the last name output will be the one that was first in the array. Use this format:

Nancy
Kim
Elizabeth
Randy
Bob
Tom
Janet
Bob

You may not reorder the array using a function or method.
*/

let names = ['Bob', 'Janet', 'Tom', 'Bob', 'Randy', 'Elizabeth', 'Kim', 'Nancy']
//see array
console.log(names)

//normal array one by one
for (i = 0; i < names.length; i++) { 
  console.log(names[i])
  alert(names[i])
}

//reverse one by one of the normal array 
for (i = names.length - 1; i >= 0; i--) {
	console.log(names[i])
        alert(names[i])
}


