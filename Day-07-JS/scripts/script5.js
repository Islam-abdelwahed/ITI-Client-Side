addEventListener("load",()=>{

    arr = ["islam","ahmed","tarek","omar"]

    let container = document.getElementById("output")    ;

    arr.forEach((element,index) => {
        let div = document.createElement("div")

        if(index&1){
            div.style.backgroundColor = "Lightblue"
            div.style.color = "black"
        }else{
            div.style.backgroundColor = "lightgreen"
            div.style.color = "black"
        }

        div.textContent= element;
        console.log(div);
        

        container.appendChild(div);
    });
})