let state = 0
let h = 0, m = 0, s = 0;
let start = document.getElementById('startBtn');
let stop = document.getElementById('stopBtn');
let timer = document.querySelector("#timer h1")
let id=0;

addEventListener('load', () => {
    start.addEventListener('click', () => {
        if (state == 0) {
            start.value = "pause"
            start.style.backgroundColor = "orange"
            state++;
            id = timeClick()
        }
        else if (state == 1) {
            clearInterval(id);
            start.value = "continue"
            start.style.backgroundColor = "lightgreen"
            state--;
        }
    })

    stop.addEventListener('click', () => {
        clearInterval(id);
        start.value = "Start"
        start.style.backgroundColor = "lightgreen"
        state=0;
        h=m=s=0;
        printTime(h,m,s);
    })
})

function timeClick() {
    let id = setInterval(() => {
        s++;
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            h++;
        }
        printTime(h,m,s);
    }, 1000)
    return id;
}

function printTime(h,m,s){
    document.querySelector("#timer h1").textContent = `${format(h)}:${format(m)}:${format(s)}`
}

function format(num) {
    return num < 10 ? "0" + num : num;
}