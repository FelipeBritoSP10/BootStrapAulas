                        //Modal
    document.getElementById('open-modal').addEventListener('click', function() {
    $('#myImageModal').modal('show');
  });
                        //Inscrição
    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const body = `Nome: ${nome}%0D%0AEmail: ${email}%0D%0AMensagem: ${mensagem}`;
    
    window.location.href = `https://api.staticforms.xyz/submit?name=${nome}&email=${email}&message=${mensagem}&accessKey=bbd8a963-df97-4a9a-9652-c55b03f58ab1`;
    
    document.getElementById('mensagemSucesso').style.display = 'block';
});
