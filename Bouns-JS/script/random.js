function makeRandomArray() {
    inputs = document.querySelectorAll("input");
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value);
    array = [];
    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    for (i = 0; i < 5; i++) {
        num = Math.floor(Math.random() * (max - min + 1));
        array.push(num);
        arrayDiv = document.querySelector(".arrayDiv");
        arrayDiv.innerText = array;
    }
}