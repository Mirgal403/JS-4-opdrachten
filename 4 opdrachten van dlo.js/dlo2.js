let usernamecurrect = "dlo2";
let passwordcurrect = "miro2";

function dlologin(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let messageContainer = document.getElementById("message");




    if (username === usernamecurrect && password === passwordcurrect)
    {
        messageContainer.style.color = "black";
        messageContainer.textContent = "you are logged dlo";
    }
    else {
        messageContainer.style.color = "red";
        messageContainer.textContent = "login failed fuck you2"
    }
}