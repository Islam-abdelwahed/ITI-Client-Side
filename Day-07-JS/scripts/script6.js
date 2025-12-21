let students = [];
let list;

addEventListener("load", () => {

    students = [
        { name: "Ali", age: 20, Crs: "CS" },
        { name: "Sara", age: 22, Crs: "Math" },
        { name: "Omar", age: 19, Crs: "Physics" },
        { name: "Laila", age: 21, Crs: "CS" },
        { name: "Hassan", age: 23, Crs: "Engineering" },
        { name: "Mona", age: 20, Crs: "Biology" },
        { name: "Kareem", age: 24, Crs: "Math" },
        { name: "Noor", age: 18, Crs: "CS" }
    ];

    drawTable(students, []);

    let text = document.querySelector("#myForm input[type='text']");
    let subBtn = document.querySelector("#myForm input[type='button']");
    list = document.querySelector("#sortList");

    list.addEventListener("change", sort);

    subBtn.addEventListener('click', () => {
        let result = findByNme(students, text.value);
        drawTable(students, result); 
    });

});


function sort() {
    const prop = list.value;
    let sorted = sortByProperty(students, prop);
    drawTable(sorted, []);
}


function sortByProperty(arr, prop) {
    let sorted = [...arr];

    sorted.sort((a, b) => {

        if (typeof a[prop] === "number") {
            return a[prop] - b[prop];
        }

        return a[prop].localeCompare(b[prop]);
    });

    return sorted;
}


function drawTable(data, mark = []) {
    let html = "<table border='1'><tr><th>Name</th><th>Age</th><th>Crs</th></tr>";

    data.forEach((rowData) => {

        let highlight = mark.includes(rowData.name)
            ? "background-color:lightgreen;"
            : "";

        html += `<tr style='${highlight}'>`;
        html += `<td>${rowData.name}</td><td>${rowData.age}</td><td>${rowData.Crs}</td>`;
        html += "</tr>";
    });

    html += "</table>";
    document.getElementById("container").innerHTML = html;
}


function findByNme(students, name) {
    let matches = [];

    for (let student of students) {
        if (student.name.toLowerCase() === name.toLowerCase()) {
            matches.push(student.name); 
        }
    }

    return matches;
}
