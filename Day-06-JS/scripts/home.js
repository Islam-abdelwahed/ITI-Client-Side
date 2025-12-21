addEventListener('load', () => {
    url = window.location.href

    params = ((url.split('?'))[1]).split('&')

    email = (params[0].split('='))[1]
    pass = (params[1].split('='))[1]

    if (email !== "Ali" || pass !== "123") {
        window.document.writeln(`<h1 align="center" color="red">Invalid Username or password</h1>`)
    }
    else {
        window.document.writeln(`<h1 align="center" color="red">Welcom ${email}</h1>`)
    }
})