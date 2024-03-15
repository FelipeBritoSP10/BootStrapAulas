document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email.trim() === "" || password.trim() === "") {

        alert("Por favor, insira seu e-mail e senha.");
    } else {
        window.location.href = './index.html';
    }
});