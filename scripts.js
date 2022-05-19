console.log("hello world")

let a = 10
const MAX = 100
var b= 5
let c = "haha"

console.log(a)

typeof NaN //returns number
typeof Infinity //returns number

console.log(typeof NaN)

toString(1)

// == means equal != means not equal
// === strict equality, does not convert type

//google chrome console

//STRING comparison
console.log("ABC" > "ABD")

console.log("2" > 1) //true, string "2" is converted to number 2

Boolean(1)

if (a < 90) {
    console.log("less than"); //has semicolon
} else if (1) {
    //statements
} else {
    //statements
}

switch(a) {
    case 10:
        console.log("do this")
        break;
    case 20:
        //do that
        break;
    default:
        //do
}

//8 basic data types

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1) //non primitive since can contain multiple valies

typeof null // "null"

let z = 'world'; //single quote is same as double quote
console.log(`hello ${z}`); //must use BACKTICK characters instead of quotes to embed to string aka concatenate

//String methods and properties
let text ="abcdef"
console.log(text.length);
text.slice(-1,1) //-1 is counted
text.substring(-1,1) //-1 is counted as zero
text.substr(1,3) //1 is start, 3 is length

//3 logical operators
//  || (OR), && (AND), ! (NOT)
// OR finds the first truthy value 1 || null || 0
// AND fins the first falsy value 1 && null && 0


//ternary operator
let m = a > 90 ? "this true" : "this false"





