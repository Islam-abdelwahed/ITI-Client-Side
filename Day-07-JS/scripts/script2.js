
anchor = document.querySelectorAll('table')[1].querySelector('a');
anchor.href="training.com"
anchor.text="training"

function findChecked(){
    const checked = document.querySelectorAll("#userData input[type='checkbox']:checked");
    checked.forEach(box => alert(box.value));
}

document.getElementById('example').style='background-color: pink';

document.querySelector("img:last-child").style.border = "2px solid pink";
