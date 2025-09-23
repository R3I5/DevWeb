document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("sessao")){
        var sessao = document.getElementById("retorno").innerHTML = JSON.parse(localStorage.getItem("sessao"));
        document.getElementById("retorno").innerHTML = sessao.email;
    }
    else {
        window.location.href = "../index.html";
    }
});