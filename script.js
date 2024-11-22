document.getElementById('ask-name').addEventListener('click', function () {
    // Pergunta o nome do usuário
    const userName = prompt("Qual é o seu nome?");
    
    // Exibe uma saudação personalizada
    if (userName) {
        document.getElementById('welcome-message').textContent = `Bem-vindo(a), ${userName}!`;
    } else {
        document.getElementById('welcome-message').textContent = "Olá! Não se esqueça de nos contar seu nome!";
    }
});
