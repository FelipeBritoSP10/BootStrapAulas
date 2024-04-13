              //Modal
  document.getElementById('open-modal').addEventListener('click', function() {
  $('#myImageModal').modal('show');
  });

          //Inscrição
  const token = 'bbd8a963-df97-4a9a-9652-c55b03f58ab1';

  const formData = new FormData();
  formData.append('name', 'Nome do usuário');
  formData.append('email', 'exemplo@email.com');
  formData.append('message', 'Enviado');
  formData.append('accessKey', token);
  
  fetch('https://api.staticforms.xyz/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      document.write('Formulário enviado com sucesso!');
    } else {
      console.error('Erro ao enviar formulário:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  }); 


 document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.sr', {
      delay: 200,    
      duration: 2000, 
      origin: 'bottom', 
      distance: '20px',
      easing: 'ease-in-out',
      interval: 100 
    });
  });
