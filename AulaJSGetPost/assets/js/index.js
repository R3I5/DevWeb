// Adicionando um listener ao botão "entrar"
document.getElementById("entrar").addEventListener('click', function (e) {
    e.preventDefault(); // evita recarregar a página caso esteja dentro de um form
    login();
});

// Criar uma função assíncrona de comunicação Front/Back
async function login() {
    const fd = new FormData();
    fd.append('login', document.getElementById('login').value);
    fd.append('senha', document.getElementById('senha').value); // <-- senha também

    try {
        const retorno = await fetch('back-end.php', {
            method: 'POST',
            body: fd
        });

        const resposta = await retorno.json();
        console.log(resposta);

        if (resposta.status === "ok") {
            // Salvar o login no localStorage para usar em info.html
            localStorage.setItem("usuarioLogado", resposta.login);
            // Redireciona para a página de informações
            window.location.href = "info.html";
        } else {
            alert(resposta.mensagem || "Login inválido!");
        }
    } catch (error) {
        console.error("Erro na comunicação:", error);
        alert("Erro no servidor. Tente novamente mais tarde.");
    }
}
    