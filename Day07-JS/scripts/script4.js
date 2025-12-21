addEventListener('load', () => {
  const students = [
    { name: "Islam", age: 20, Crs: "CS" },
    { name: "Doaa", age: 22, Crs: "Math" },
    { name: "Aziz", age: 19, Crs: "Physics" },
    { name: "Hossam", age: 21, Crs: "CS" },
    { name: "Hakem", age: 23, Crs: "Engineering" }
  ];

  const info = document.getElementById('info');
  const list = document.getElementById('students');

  function updateInfo() {
    index = list.value;
    student = students[index];
    info.innerHTML = `
        <h1>${student.name}</h1>
        <p>Age: ${student.age}</p>
        <p>Course: ${student.Crs}</p>
    `;
  }

  updateInfo();

  list.addEventListener("change", updateInfo);

})