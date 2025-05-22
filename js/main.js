// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

n = 35231

function digitize(n) { 
    // convert to a string
    // split the string into an array

    // reverse it 
let string = n.toString().split("");
let numbers = string.map(str => Number(str)).reverse();
return numbers
}

  console.log(digitize(n))