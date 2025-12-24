# Lab 5: JavaScript Array and String Operations

## Lab Objectives
From Day2Lab part 1.pdf:
1. Define array numbers=[3,1,2,4,3,5,1]; remove duplicates, sort ascending, filter >50 (user-defined and built-in), display max/min (user-defined and Math with ES6 bonus).
2. Function to compute sum/product of array integers using eval:  
   a. With array param (e.g., sumAll([3,1,4,5,2])).  
   b. No param, using arguments object.
3. [Not specified in text]
4. Function returning random array (1-10, length 8, no duplicates).

From Lab JS 2 Part 2.pdf:
- Receive/validate string; capitalize first letter of each word (e.g., 'the quick brown fox' → 'The Quick Brown Fox').
- Find longest word (bonus; e.g., 'Web Development Tutorial' → 'Development').

## Project Structure
```
lab-05/
├── index.html       # HTML loader with calls to scripts
├── scripts/         # JS files
│   ├── script.js    # Core functions (array ops, sum/product, random, string funcs)
│   └── calls.js     # Function calls, console logs, user prompts for strings
└── README.md        # This file
```

## Key Highlights
Open index.html in a browser (DevTools console F12) to run. Results in console; prompts for string inputs.

### Array Operations (from script.js and calls.js)
```javascript
// Remove duplicates
function findDistict(arr) {
    unique = arr.filter(function (item, index) {
        return arr.indexOf(item) === index;
    })
    return unique;
}

// Sort ascending (modifies in place)
function sortArray(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr;
}

// Filter >50 (custom)
function filterNumbers(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50)
            res.push(arr[i]);
    }
    return res;
}

// Built-in filter
function builtInfillter(arr) {
    return arr.filter(n => n > 50);
}

// Max/Min (custom)
function maxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { max, min };
}
```

   **Explanation**: Processes array for unique, sorted, filtered values; custom max/min.  
   **Sample Console Output** (for [3,1,2,4,3,5,1]):
   ```
   Distinct: [3, 1, 2, 4, 5]
   Sorted: [1, 1, 2, 3, 3, 4, 5]
   Filter >50 (custom): []
   Filter >50 (built-in): []
   Max: 5, Min: 1
   ```

### Sum/Product with Eval (from script.js)
```javascript
function sumAll(numbersArray) {
    let sum = eval(numbersArray.join('+'));
    let product = eval(numbersArray.join('*'));
    return { sum, product };
}

function sumAll2() {
    let sum = eval(Array.from(arguments).join('+'));
    let product = eval(Array.from(arguments).join('*'));
    return { sum, product };
}
```

   **Explanation**: Uses eval for dynamic sum/product; one with array, one with arguments.  
   **Sample Console Output** (for [3,1,4,5,2]):
   ```
   Sum: 15 Product: 120
   Sum (arguments): 15 Product: 120
   ```

### Random Unique Array (from script.js)
```javascript
function randomArray() {
    let res = [];
    while (res.length < 8) {
        let r = Math.floor(Math.random() * 10) + 1;
        if (!res.includes(r))
            res.push(r);
    }
    return res;
}
```

   **Explanation**: Generates 8 unique randoms (1-10) with loop and includes check.  
   **Sample Console Output**:
   ```
   Random array: [8, 1, 4, 2, 6, 7, 3, 10]
   ```

### String Capitalization and Longest Word (from script.js and calls.js)
```javascript
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
```

   **Explanation**: Splits string, capitalizes each word; finds longest via loop. Prompts with validation/repeat.  
   **Sample Console Output**:
   ```
   Capitalized: The Quick Brown Fox
   Longest word: Development
   ```

## Notes
- Scripts separate logic (script.js) from execution (calls.js); index.html loads both.
- Eval used for dynamic ops (caution: not for production).
- User inputs via prompt/confirm; all output in console.

Advancing JS with arrays, functions, and strings! 🚀