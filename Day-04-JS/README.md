# Lab 4: Introduction to JavaScript

## Lab Objectives
- First JS lab: Embed internal/external scripts, variables, basic operations, console output.
- Handle undefined/null, type coercion, formatting (toFixed).
- User input via prompt/confirm, loops for repetition, basic validation.
- Print results in console; demonstrate script loading order.

Tasks (from provided image):
1. Create HTML file with basic tags.
2. Add external script (External.js) and internal script in <head>.
3. Define variables: num1=10, num2='22', num3=null (internal).
4. Console sum of num1+num2 with 6 digits.
5. Console sum of num1+num3.
6. Declare uninitialized x.
7. Multiply num1 * x.
8. Print all in external script (loaded after internal).
9. Prompt 2 user values; print as string or sum if convertible.
10. Prompt 5 numbers; console each with 5 digits (loop with validation/repeat).

## Project Structure
```
lab-04/
├── index.html       # Main HTML with internal script and user prompts
├── scripts/         # JS files
│   └── script.js    # External script (prints variables/results)
└── README.md        # This file
```

## Key Highlights
Open index.html in a browser (console in DevTools F12) to run. Prompts appear on load; results in console.

### Internal Script: Variables and Operations (from index.html)
```javascript
<script>
    var num1 = 10;
    var num2 = 22;
    var num3 = null;

    console.log((num1 + num2).toFixed(6));
    console.log(num1 + num3);

    var x;

    var res = num1 * x;
</script>
<script src="./scripts/script.js"></script>
```

   **Explanation**: Defines vars, computes sums (coercion: '22' to 22), handles null/undefined. External loads after, accessing globals.  
   **Sample Console Output**:
   ```
   32.000000
   10
   NaN  // From num1 * x (undefined)
   ```

### User Input: 2 Values with Conversion (from index.html)
```javascript
<script>
    let repeat;
    do {
        let val1, val2;
        do {
            val1 = prompt("Enter first value");
            if (val1 === null) break;
            if (val1 === "") alert("You must enter a value!");
        } while (val1 === "");
        if (val1 === null) break;

        do {
            val2 = prompt("Enter second value");
            if (val2 === null) break;
            if (val2 === "") alert("You must enter a value!");
        } while (val2 === "");
        if (val2 === null) break;

        let num1 = Number(val1), num2 = Number(val2);
        if (!isNaN(num1) && !isNaN(num2))
            console.log(num1 + num2);
        else
            console.log(val1 + val2);
        repeat = confirm("Do you want to run the program again?");
    } while (repeat);
</script>
```

   **Explanation**: Prompts with validation (non-empty), attempts numeric sum or string concat. Repeat loop via confirm.  
   **Sample Interaction**: Prompt values → Console: 15 (if numbers) or "ab" (if strings).

### User Input: 5 Numbers with Formatting (from index.html)
```javascript
<script>
    let repeat;
    do {
        for (let i = 0; i < 5; i++) {
            let val;
            do {
                val = prompt("Enter value " + (i + 1));
                if (val === null) break;
                if (val === "") alert("You must enter a value!");
            } while (val === "");
            if (val === null) break;
            if (!isNaN(val))
                console.log(Number(val).toFixed(5));
        }
        repeat = confirm("Do you want to run the program again?");
    } while (repeat);
</script>
```

   **Explanation**: Loop for 5 prompts, formats valid numbers to 5 digits. Repeat option.  
   **Sample Console Output**:
   ```
   1.00000
   2.50000
   // etc.
   ```

## Notes
- Scripts demonstrate loading order: Internal sets vars, external prints.
- Focus on basics: No DOM yet; all console/prompt-based.
- Test in browser console; prompts block until input.

Intro to dynamic JS—preparing for DOM manipulation! 🚀