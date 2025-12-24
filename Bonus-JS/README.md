# Bonus: JavaScript Interactive Mini-Apps

## Lab Objectives
This lab focuses on building small, interactive client-side applications using vanilla JavaScript, demonstrating core concepts such as DOM manipulation, event handling, timers, and dynamic content generation.

The tasks implemented are:

1. **To-Do List App**  
   - Add tasks via input field with validation (no empty tasks).  
   - Display pending tasks.  
   - Click a task to mark it as complete (moves to a separate "Completed" section with visual styling).

2. **Random Array Generator**  
   - User enters two numbers in input fields.  
   - On button click, generates a 5-element array of random integers between the two numbers (inclusive).  
   - Displays the resulting array on the page.

3. **Stopwatch Timer**  
   - Displays time in `HH:MM:SS` format.  
   - "Start" button begins/pauses the timer (toggles to "Pause" / "Continue").  
   - "Stop" button resets the timer to `00:00:00`.

## Project Structure
```
lab-09/
├── random.html          # Random array generator page
├── stopWatch.html       # Stopwatch timer page
├── todo.html            # To-Do list application
├── script/
│   ├── random.js        # Random array logic
│   ├── stopWatch.js     # Stopwatch timer implementation
│   └── todo.js          # To-Do list add/mark complete logic
├── style/
│   ├── stopWatch.css    # Styling for stopwatch
│   └── todo.css         # Styling for to-do app (pending/completed sections)
└── README.md            # This file
```

## Key Highlights
All apps are fully client-side with clean, responsive styling and intuitive user interaction.

### To-Do List App (todo.html + todo.js + todo.css)
```javascript
// Adds task with validation
if (todoText.value === "") {
    alert("Please enter a task to add");
    return;
}

// Creates task div and appends to pending
let div = document.createElement('div');
div.innerHTML = `<h3>${text}</h3>`;

// Click moves task to completed section
div.addEventListener('click', function() {
    pendingContainer.removeChild(this);
    completeContainer.appendChild(this);
    this.style.opacity = "0.6";
    this.removeEventListener('click', arguments.callee); // Prevent further clicks
});
```

   **Features**:
   - Clean separation of pending (white) and completed (green tinted) tasks.
   - Visual feedback: completed tasks are semi-transparent.
   - Input validation prevents empty tasks.

### Stopwatch (stopWatch.html + stopWatch.js + stopWatch.css)
```javascript
// State machine: 0 = stopped, 1 = running
start.addEventListener('click', () => {
    if (state == 0) { // Start
        start.value = "Pause";
        id = setInterval(updateTime, 1000);
        state = 1;
    } else { // Pause
        clearInterval(id);
        start.value = "Continue";
        state = 0;
    }
});

stop.addEventListener('click', () => {
    clearInterval(id);
    h = m = s = 0;
    printTime(0,0,0);
    start.value = "Start";
    state = 0;
});
```

   **Features**:
   - Accurate second-by-second timing.
   - Proper zero-padding (e.g., `00:05:09`).
   - Start button toggles between Start/Pause/Continue with color feedback.
   - Stop fully resets the timer.

### Random Number Array Generator (random.html + random.js)
```javascript
function makeRandomArray() {
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let array = [];

    for (let i = 0; i < 5; i++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(num);
    }

    document.querySelector(".arrayDiv").innerText = array.join(", ");
}
```

   **Features**:
   - Handles any order of input numbers (smaller first or larger).
   - Generates 5 random integers in the inclusive range.
   - Displays array as comma-separated string.

## Notes
- Pure vanilla JavaScript — no external libraries or frameworks.
- All functionality works immediately upon page load.
- Responsive and styled interfaces for better user experience.
- Event-driven architecture with proper cleanup (e.g., removing event listeners on completed tasks).
- Simple, educational implementations ideal for understanding core JS concepts.

Practical JavaScript mini-apps in action! ⏱️✅