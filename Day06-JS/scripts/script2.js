let i = 1
setInterval(()=>{

    document.writeln(`<Table style="border:2px solid red"><tr><td style="border:2px solid red">${i}</td></tr><br/></Table>`)
    window.document.title=i
    i++

},1000)