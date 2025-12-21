addEventListener('load', () => {

    next = document.getElementById('next');
    previous = document.getElementById('previous');
    start = document.getElementById('start');
    stopbtn = document.getElementById('stop');

    slide = document.getElementById('slide');

    let counter = 1

    next.addEventListener('click', () => {
        counter++;
        if (counter == 7)
            counter = 1;
        slide.src = `./assets/${counter}.jpg`
    })

    previous.addEventListener('click', () => {
        counter--;
        if (counter == 0)
            counter = 7;
        slide.src = `./assets/${counter}.jpg`
    })
    let id;
    start.addEventListener('click', () => {
         id = setInterval(() => {
            counter++;
            if (counter == 7)
                counter = 1;
            slide.src = `./assets/${counter}.jpg`
        }, 1000);
    })

    stopbtn.addEventListener('click', () => {
        clearInterval(id);
    })


})