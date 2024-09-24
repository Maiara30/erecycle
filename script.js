// Adicionando um evento de envio de formulário para exemplo
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
