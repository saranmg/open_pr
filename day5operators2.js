/*LOgical opertaors
AND - &&
OR - ||
NOT - !
*/

let gap = 10
let fap = 20
console.log(gap!=fap);

// AND / OR operator will be covered in ternary operators

/* Strict operators
2 types
== --> loose equality/ double operator - check only values and not the data types or something 
=== --> strict equality/ triple equal - check both the value and data types
*/

let int = 10
let str = "10"
console.log(int == str);

console.log(int===str);

/* ternary opertors -- we give conditions to work on it.
*/

// using AND operator
let age = 150
let criteria = (age >=18 && age<=80)? "he/ she is eligible": "not eligible"
console.log(criteria);

// using OR operator

let arun = 15
let result = (arun <=18 || arun >=80)? "he/ she is eligible" : "not eligible"
console.log(result);
 