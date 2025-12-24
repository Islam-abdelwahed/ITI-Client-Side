let completeContainer = document.getElementById("compelete");
let pendingContainer = document.getElementById("pending");

addEventListener("load",()=>{
    let todoText = document.getElementById("todoText");
    let addBtn = document.getElementById("button");
    addBtn.addEventListener('click',()=>{
        if(todoText.value==="")
        {
            alert("Please enter a task to add");
            return;
        }

        addTask(todoText.value);
    })



})

function addTask(text){
    console.log(text);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${text}</h3>`
    div.addEventListener('click',function (){
        pendingContainer.removeChild(this)
        completeContainer.appendChild(this);
        div.removeEventListener('click', moveTask);
        div.style.opacity = "0.6";
        this.removeEventListener('click')
    })
    pendingContainer.append(div)
}