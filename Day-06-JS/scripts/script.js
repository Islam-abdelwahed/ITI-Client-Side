
var winobj=open("","child","width=300,height=300")
let i = 0;

var msg = "Welcome To JS"
winobj.document.open();

var id = winobj.setInterval(()=>{
    if(i<=msg.length)
    {
        winobj.document.writeln(msg[i])
    }else{
        winobj.clearInterval(id);
        winobj.close()
    }
    i++
},1000)