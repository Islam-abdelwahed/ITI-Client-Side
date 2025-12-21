//-----------------------get distinct numbers------------------------//
function findDistict(arr) {
    unique = arr.filter(function (item, index) {
        return arr.indexOf(item) === index;
    })
    return unique;
}
//----------------------sort------------------------//
function sortArray(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr;
}
//----------------------filter numbers greater than 50 -----------------------//
function filterNumbers(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50)
            newArr.push(arr[i]);
    }
    return newArr;
}
//----------------------built-in fillter----------------//
function builtInfillter(arr) {
    filterdArr = arr.filter(function (a) { return a > 50; })
    return filterdArr;
}
//----------------------max and min-----------------------//
function maxMin(arr) {
    let max = 0; min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { max, min }
}
//---------------------//
function maxMin2(arr) {
    let i = 0;
    arr.forEach(function (a, index) {
        if (a > i) i = a;
    })

    let y = arr[0];
    arr.forEach(function (a, index) {
        if (a < i) i = a;
    })
    return { max: i, min: y };
}

function maxMin3(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return { max: arr[arr.length - 1], min: arr[0] };
}
function maxMin4(arr) {
    //----------------------built-in max and min-----------------------//
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}

//-------------------------------------------------//
function sumAll(numbersArray) {
    return eval(numbersArray.join("+"))
}
function sumAll2() {
    let newarr = [];
    for (let i = 0; i < arguments.length; i++) {
        newarr.push(arguments[i]);
    }
    return eval(newarr.join("+"));
}


//-----------------------Captial every first letter-------------------------//

function Captial_every(string) {

    let words = string.split(" ");
    let result = [];

    words.forEach(function (word) {
        let c = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(c);
    });

    string = result.join(" ");
    return string;
}
//-----------------------Longest Word--------------------------//


function Longest_Word(string2) {

    let words2 = string2.split(" ");
    let maxLengthIndex = 0;
    words2.forEach(function (word, index) {
        if (word.length > words2[maxLengthIndex].length) {
            maxLengthIndex = index;
        }
    })
    return words2[maxLengthIndex];
}