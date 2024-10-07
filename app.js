console.log("I Love TypeScript");
function add(n1, n2, showResult) {
    // if (typeof n1 !== "number"  || typeof n2 !== "number") {
    //     throw new Error("Invalid input")result = n1 + n2;
    var result = n1 + n2;
    showResult ? console.log(result) : null;
    // if (showResult){
    // console.log(result)
    // }
    // else {
    // return "invalid";
    // }
}
var number1 = 5;
var number2 = 2.5;
var printResult = true;
console.log(add(number1, number2, printResult));
