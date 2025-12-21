function Student(_name, _age, _crs) {
    this.name = _name;
    this.age = _age;
    this.crs = _crs
}


function displayAll(students) {
    document.writeln(`<table border='2' style='border: 2px solid black'><tr><th>Name</th><th>Age</th><th>Crs</th></tr>`)
    for (student of students) {
        document.writeln(`<tr><td>${student.name}</td><td>${student.age}</td><td>${student.crs}</td></tr>`)
    }
    document.writeln(`</table>`)
}

function findByNme(students, name) {
    stud=[]
    for (student of students) {
        if (student.name === name) {
            stud.push(student);
        }
    }
    return stud;
}

function countAll(students) {
    return students.lenght
}

function countByCourse(students, course) {
    let c = 0;
    for (student of students) {
        if (student.Crs === course)
            c++
    }
    return c;
}

function findYoungest(students) {
    let min = 0;
    for (student of students) {
        if (student.age < min)
            min = student.age
    }
    return students.find((stu) => {
        if (stu.age === min)
            return stu;
    })
}

function sortByProperty(students, prop) {
    const arr = [...students];
    arr.sort((a, b) => {
        return a[prop] - b[prop]
    });

    return arr;
}

function getNames(students) {
    names = []
    for (student of students) {
        names.push(student.name);
    }
    return names
}

function isAllAdults(students) {
    for (student of students) {
        if (student.age < 18) {
            return false
        }
    }
    return true
}

function groupByCourse(students, crs) {
    var same = []
    for (student of students) {
        if (student.crs === crs)
            same.push(student);
    }
    return same;
}

function ageAvg(students) {
    sum = 0
    for (student of students)
        sum += student.age;

    return (sum / (students.lenght))
}

function getOldest(students, offset) {
    arr = sortByProperty(students, 'age');
    return arr.slice(0, offset);
}

function getSameName(students) {
    let seen = new Set();
    let hasDuplicate = false;

    for (let s of students) {
        if (seen.has(s.name)) {
            hasDuplicate = true;
            break;
        }
        seen.add(s.name);
    }
    return hasDuplicate;
}

function reverseArray(students) {
    let result = [];
    for (let i = students.length - 1; i >= 0; i--) {
        result.push(students[i]);
    }
    return result;
}

function addEmails(students){
    newArr = [...students]
    students.newArr.forEach(element => {
        element.email= element.name.toLowerCase()+"@iti.com" 
    });
    return newArr;
}   

function printData(data) {
    if (!Array.isArray(data)) {
        data = [data];
    }
    document.writeln(`<table border='2' style='border: 2px solid black'>`)
    if (!data) {
        document.writeln(`<tr><td><h1>No Data Found</h1></td></tr>`)
    } else {
        document.writeln(`<tr><th>Name</th><th>Age</th><th>Crs</th></tr>`)
        for (row of data) {
            document.writeln(`<tr><td>${row.name}</td><td>${row.age}</td><td>${row.crs}</td></tr>`)
        }
    }
    document.writeln(`</table>`)
}



