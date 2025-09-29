// email + senha
// id = "cadastrar"

document.getElementById("cadastrar").addEventListener('click', register);

async function register() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var data = document.getElementById("data").value;

    const fd = new FormData();
    fd.append("user",user);
    fd.append("email", email);
    fd.append("senha", senha);
    fd.append("data", data);

    const retorno = await fetch("php/back.php", {
        method: "POST",
        body: fd
    });

    // a resposta do php (com status, messagem e dados) será armazenada aqui
    const resposta = await retorno.json();

    //repositorio localstorage
    localStorage.setItem("sessao", JSON.stringify(resposta));

    //deu certo!
    window.location.href = "home/home.html";
}