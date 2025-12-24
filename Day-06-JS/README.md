# Lab 6: JavaScript Windows, Timers, Forms, and Array Operations

## Lab Objectives
1. Open a small window and write a string letter by letter; close the window when finished.
2. Display incrementing numbers in a bordered table every second, updating the page title.
3. Create a login form that submits credentials via GET.
4. Validate login credentials from URL parameters; display a welcome message in red if valid, or an error if invalid.
5. Define an array of student objects and implement functions to:
   - Display all students in a table.
   - Find students by name and print details.
   - Count total students.
   - Count students by course (e.g., "CS").
   - Find the youngest student.
   - Sort students by age or other properties.
   - Create a new array with only student names.
   - Check if all students are above age 18.
   - Group students by course.
   - Calculate the average age.
   - Find top N oldest students.
   - Check for students with duplicate names.
   - Reverse the array manually without .reverse().
   - Add email properties in the format name.toLowerCase()+"@iti.com".

## Project Structure
```
lab/
├── Task1.html       # Popup window with animated text
├── Task2.html       # Infinite number counter with table
├── Task3.html       # Login form
├── Task4.html       # Student array operations
├── home.html        # Login validation page
├── scripts/
│   ├── home.js      # Login validation logic
│   ├── script.js    # Animated text in popup
│   ├── script2.js   # Number counter
│   ├── script4.js   # Student functions
│   └── script5.js   # Student array and function calls
└── README.md        # This file
```

## Key Highlights
Open each TaskX.html in a browser to run. Results appear on the page, in popups, or via navigation. Use DevTools (F12) for console logs.

### Animated Text in Popup Window (from script.js)
```javascript
var winobj=open("","child","width=300,height=300")
let i = 0;

var msg = "Welcome To JS"
winobj.document.open();

var id = winobj.setInterval(()=>{
    if(i<=msg.length)
    {
        winobj.document.writeln(msg[i])
    }else{
        winobj.clearInterval(id);
        winobj.close()
    }
    i++
},1000)
```

   **Explanation**: Opens a popup, writes "Welcome To JS" letter by letter using a timer; closes when complete.  
   **Sample Behavior**: Popup types the message over seconds, then auto-closes.

### Infinite Number Counter with Table (from script2.js)
```javascript
let i = 1
setInterval(()=>{

    document.writeln(`<Table style="border:2px solid red"><tr><td style="border:2px solid red">${i}</td></tr><br/></Table>`)
    window.document.title=i
    i++

},1000)
```

   **Explanation**: Appends numbered red-bordered table rows every second; updates title. Runs infinitely.  
   **Sample Behavior**: Page shows growing list of numbers in tables; title increments.

### Login Form and Validation (from Task3.html and home.js)
```html
<!-- Login Form -->
<Form method="get" action="home.html">
    <input type="text" placeholder="Enter Your Email"  name="email" />
    <br/>
    <br/>
    <input type="text" placeholder="Enter Your Password" name="pass" />
    <br/>
    <br/>
    <input type="submit" placeholder=""/>
</Form>
```

```javascript
// Validation
addEventListener('load', () => {
    url = window.location.href

    params = ((url.split('?'))[1]).split('&')

    email = (params[0].split('='))[1]
    pass = (params[1].split('='))[1]

    if (email !== "Ali" || pass !== "123") {
        window.document.writeln(`<h1 align="center" color="red">Invalid Username or password</h1>`)
    }
    else {
        window.document.writeln(`<h1 align="center" color="red">Welcom ${email}</h1>`)
    }
})
```

   **Explanation**: Form submits GET parameters; home.js parses URL, validates "Ali"/"123", displays red message.  
   **Sample Output** (valid): Welcome message in red.  
   **Sample Output** (invalid): Error message in red.

### Student Array Operations (from script4.js and script5.js)
```javascript
// Student Constructor
function Student(_name, _age, _crs) {
    this.name = _name;
    this.age = _age;
    this.crs = _crs
}

// Display All
function displayAll(students) {
    document.writeln(`<table border='2' style='border: 2px solid black'><tr><th>Name</th><th>Age</th><th>Crs</th></tr>`)
    for (student of students) {
        document.writeln(`<tr><td>${student.name}</td><td>${student.age}</td><td>${student.crs}</td></tr>`)
    }
    document.writeln(`</table>`)
}

// Find by Name
function findByNme(students, name) {
    stud=[]
    for (student of students) {
        if (student.name === name) {
            stud.push(student);
        }
    }
    return stud;
}

// ... (other functions: countAll, countByCourse, findYoungest, sortByProperty, getNames, isAllAdults, groupByCourse, ageAvg, getOldest, getSameName, reverseArray, addEmails)
```

   **Explanation**: Constructor for students; functions handle display, search, counts, filters, sorts, checks, groups, averages, top oldest, duplicates, manual reverse, email addition. Outputs to document tables.  
   **Sample Output** (displayAll): Table of all students.  
   **Sample Console/Log** (e.g., findByNme): Details for matching students.

## Notes
- Scripts separate logic from execution; HTML loads them.
- Uses basic DOM writing (writeln); may overwrite pages—refresh to reset.
- No external dependencies; all client-side.
- Typos in code (e.g., "lenght" → "length", "Crs" → "crs") for learning fixes.

Hands-on with JavaScript client-side features! 🚀