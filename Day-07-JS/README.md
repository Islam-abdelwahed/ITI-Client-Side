# Lab 7: JavaScript DOM Manipulation, Events, and Dynamic Tables

## Lab Objectives
1. Use various document object methods to select elements:
   - Find all images using both default collections and modern methods.
   - Retrieve options from a dropdown list using multiple selectors.
   - Select all rows from the second table on the page.
   - Find all elements with a specific class name.
2. Perform DOM modifications:
   - Update an anchor's href and text content.
   - Apply styling (border and background color) to specific elements.
   - Create a function to alert values of checked checkboxes.
3. Build an image slideshow with manual and automatic controls (Next, Previous, Start, Stop).
4. Display student information dynamically based on a dropdown selection.
5. Dynamically create and append styled div elements from an array.
6. Implement a searchable and sortable student table:
   - Display a list of students in a table.
   - Allow searching by name (case-insensitive).
   - Provide sorting by name or age via a dropdown.

## Project Structure
```
lab-07/
├── Task1.html       # DOM selection practice
├── Task2.html       # DOM modifications (anchors, images, checkboxes, styling)
├── Task3.html       # Image slideshow with controls
├── Task4.html       # Student info display via dropdown
├── Task5.html       # Dynamic div creation from array
├── Task6.html       # Searchable and sortable student table
├── scripts/
│   ├── script1.js   # DOM selection methods
│   ├── script2.js   # DOM modifications and checkbox function
│   ├── script3.js   # Slideshow logic
│   ├── script4.js   # Student dropdown info
│   ├── script5.js   # Array to colored divs
│   └── script6.js   # Full student table with search and sort
├── assets/
│   └── 1.jpg to 7.jpg  # Slideshow images
└── README.md        # This file
```

## Key Highlights
Open each TaskX.html in a browser to see the functionality. Most effects are visible directly; check the console (F12) for logged selections in Task 1.

### DOM Selection Methods (from script1.js)
```javascript
imgs = document.images;
images = document.getElementsByTagName('img');

let dropList1 = document.getElementById('city').options;
let dropList2 = document.querySelector('#city').options;
let dropList3 = document.getElementsByTagName("select")[0].options;
let dropList4 = document.querySelectorAll("#city option");

let rows = document.getElementsByTagName("table")[1].querySelectorAll('tr');
let elems = document.querySelectorAll('#fontBlue');
```

   **Explanation**: Demonstrates multiple ways to select images, dropdown options, table rows, and class-based elements. Results logged to console.

### DOM Modifications (from script2.js)
```javascript
anchor = document.querySelectorAll('table')[1].querySelector('a');
anchor.href = "training.com";
anchor.text = "training";

function findChecked() {
    const checked = document.querySelectorAll("#userData input[type='checkbox']:checked");
    checked.forEach(box => alert(box.value));
}

document.getElementById('example').style.backgroundColor = 'pink';
document.querySelector("img:last-child").style.border = "2px solid pink";
```

   **Explanation**: Updates link properties, alerts checked checkbox values, applies pink background and border.

### Image Slideshow (from script3.js and Task3.html)
```javascript
next.addEventListener('click', () => { /* increment counter, update src */ });
previous.addEventListener('click', () => { /* decrement */ });

start.addEventListener('click', () => {
    id = setInterval(() => { /* auto-advance */ }, 1000);
});
stopbtn.addEventListener('click', () => clearInterval(id));
```

   **Explanation**: Manual navigation and auto-play with 1-second interval. Cycles through 1.jpg to 7.jpg.

### Student Info on Dropdown Change (from script4.js)
```javascript
list.addEventListener("change", updateInfo);
function updateInfo() {
    index = list.value;
    student = students[index];
    info.innerHTML = `<h1>${student.name}</h1><p>Age: ${student.age}</p><p>Course: ${student.Crs}</p>`;
}
```

   **Explanation**: Updates a div with selected student's details on change.

### Dynamic Div Creation (from script5.js)
```javascript
arr.forEach((element, index) => {
    let div = document.createElement("div");
    div.style.backgroundColor = (index & 1) ? "Lightblue" : "lightgreen";
    div.textContent = element;
    container.appendChild(div);
});
```

   **Explanation**: Creates alternating colored divs for each name in the array.

### Searchable & Sortable Student Table (from script6.js)
```javascript
function drawTable(data, mark = []) {
    // Builds table HTML, highlights search matches
}

function sort() {
    const prop = list.value;
    let sorted = sortByProperty(students, prop);
    drawTable(sorted, []);
}

subBtn.addEventListener('click', () => {
    let result = findByNme(students, text.value);
    drawTable(students, result); 
});
```

   **Explanation**: Renders full table on load. Search highlights matching names (case-insensitive). Sort dropdown reorders by name (alphabetical) or age (numeric).

## Notes
- All tasks use vanilla JavaScript — no external libraries.
- DOM manipulation via innerHTML, style properties, and element creation.
- Event listeners for interactivity (click, change).
- Responsive updates without page reloads.
- Console logging for debugging selections.

Mastering core DOM skills in JavaScript! 🚀