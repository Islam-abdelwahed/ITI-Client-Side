var students = [
    new Student("Ali", 20, "CS"),
    new Student("Sara", 22, "Math"),
    new Student("Omar", 19, "Physics"),
    new Student("Laila", 21, "CS"),
    new Student("Hassan", 23, "Engineering"),
    new Student("Mona", 20, "Biology"),
    new Student("Sara", 24, "Math"),
    new Student("Noor", 18, "CS")
];

displayAll(students);

stu = findByNme(students, "Sara")
console.log(stu)
printData(stu)
// stu=countAll(students);

// stu=countByCourse(students, "CS");

stu = sortByAge(students)
printData(stu)

stu = getNames(students)
printData(stu)

isAllAdults(students)

