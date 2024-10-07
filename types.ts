console.log("I Love TypeScript");

function add(n1:number,n2:number,showResult:boolean){
    // if (typeof n1 !== "number"  || typeof n2 !== "number") {
    //     throw new Error("Invalid input")result = n1 + n2;
const result =n1+n2;

showResult ?console.log(result): null;
// if (showResult){
// console.log(result)
// }
// else {
// return "invalid";
// }
}
const number1=5;
const number2=2.5;
const printResult =true;
console.log(add(number1,number2,printResult));