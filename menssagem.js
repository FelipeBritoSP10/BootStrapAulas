function enviarMensagemWhatsApp() {
    const nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Remover caracteres não numéricos do número de telefone
    telefone = telefone.replace(/\D/g, '');

    // Montar o link para o WhatsApp com os dados preenchidos
    const urlWhatsApp = `https://wa.me/${telefone}?text=Olá ${nome}! ${encodeURIComponent(mensagem)}`;

    // Redirecionar para o WhatsApp
    window.location.href = urlWhatsApp;

    // Impedir o envio do formulário tradicional
    return false;
}