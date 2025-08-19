// string methods
// 
let str = "hello java welcome to the java world";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(6)); // works in length format not in index format
console.log(str.indexOf("j"));
console.log(str.lastIndexOf("j"));
console.log(str.slice(11));
console.log(str.slice(-10));
console.log(str.substring(11,17));
console.log(str.replace("java", "js"));
console.log(str.replaceAll("java","js"))
console.log(str.trim());
console.log(str.split("").join(""));
console.log(str.concat(" nice to meet you ")); 
console.log(str.startsWith("h"));//check ifs given input is same and prints output in boolean value
console.log(str.endsWith("o")); // check ifs given input is same and prints output in boolean value
console.log(str.includes("wle")); // check ifs given input is same and prints output in boolean value






//chennai city center

let city = "chennai city center"
console.log(city.replaceAll("c", "C"));

// banana

let fruit = "banana";
    console.log(fruit.charAt(1&&3&&5))