function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
    if (username == '' || password == '') {
        alert ('Please enter the details');
        return;
    }
    else if (username !== '' && password !== '') {
        alert ('Login successfully')
        window.location.href = "index.html"
    }
}