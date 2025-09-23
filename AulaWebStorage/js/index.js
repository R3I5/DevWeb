// email + senha
// id = "entrar"

document.getElementById("entrar").addEventListener('click',login);

async function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    const fd = new FormData();  
    fd.append("email", email);
    fd.append("senha", senha);

    const retorno = await fetch("php/login.php",{ 
        method: "POST",
        body: fd
    });
    const resposta = await retorno.json();
    
    //repositorio localstorage
    localStorage.setItem("sessao",JSON.stringify(resposta));

    //deu certo!
    window.location.href = "home/index.html";   
}