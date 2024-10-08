function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        result = result.toString();
    }
    return result;
}
//     }
// const combinedAges =combine(30,36,"as-number");
// console.log(combinedAges);
// const combinedString = combine('hello','world',"as-text");
// console.log(combinedString)
var combinedStringAges = combine("30", "36", "as-number");
console.log(combinedStringAges);
