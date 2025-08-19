// Array and its methods

// push()
let a = [10, 20,30, 40, 50]
a.push(80)
console.log(a)

// pop() // removes last value no matter what input u give
let b = [10, 20,30, 40, 50]
b.pop()
console.log(b)

// shift() // removes first values 
let c = [10, 20,30, 40, 50]
c.shift()
console.log(c)

// unshift()
let d = [10, 20,30, 40, 50] // adds the given data in first value
d.unshift(80)
console.log(d)

// splice()
// variable name.splice(index, splice num, value){}
let days = ["snnday", "monday", "tuesday", "thursday", "friday", "saturday"]
days.splice(3,0,"wednesday") // if i give 1 in splice num if will remove the data in mentioned index and the value which we are providing
console.log(days);

// sort() arranges the data in only asc
let ab = ["banana", "apple"]
console.log(ab.sort());

// reverse()
let name = "saran"
console.log(name.split("").reverse().join("")); // reverse requires split method in it, cuz first we have to split the data then reverse it and then join it

let num = "9080476052"
console.log(num.split("").reverse().join(""));

