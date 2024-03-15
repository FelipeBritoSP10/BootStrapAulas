document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
    
      window.location.href = './index.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
