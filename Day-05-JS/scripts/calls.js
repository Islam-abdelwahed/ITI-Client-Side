//---------------------------------------------------//
var arr = [3, 1, 2, 4, 3, 5, 1];

console.log(findDistict(arr));
console.log(sortArray(arr));
//
console.log("After Sorting Called",arr);
console.log(filterNumbers(arr));
console.log(builtInfillter(arr));

let { max, min } = maxMin(arr);
// let { max, min } = maxMin2(arr);
// let { max, min } = maxMin3(arr);
// let { max, min } = maxMin4(arr);
console.log(`Max: ${max}, Min: ${min}`);

console.log(sumAll([1, 2, 3, 4, 5]));
console.log(sumAll2(1, 2, 3, 4, 5));


let string = [];
do {
    string = prompt("Enter a string:")
    if (string === null || string === "") {
        alert("Invalid input, please enter a valid string.");
        continue;
    }
} while (string === null || string === "")

string = Captial_every(string);
console.log(string);
let string2 = [];

do {
    string2 = prompt("Enter a string:")
    if (string2 === null || string2 === "") {
        alert("Invalid input, please enter a valid string.");
        continue;
    }
} while (string2 === null || string2 === "")
let str = Longest_Word(string2);
console.log(str);
