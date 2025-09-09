// Adicionando um listener ao botão "entrar"
// Ao escutar o evento "click" - ele executará a função login();

document.getElementById("entrar").addEventListener(
    'click', function(){
                //login();
    }
);

// Criar uma função assincrona de comunicação Front/Back
// Para isso eu começo criando a minha função utilizando o ASYNC.
async function login() { // criando a função
    const fd = new FormData(); // criando objeto "fd" da classe FormData
    // o comando append adiciona ao objeto fd um novo atributo
    // a sintaxe é objeto.append('atributo', valor)
    fd.append('login',document.getElementById('login').value);

    const retorno = await fetch('back-end.php', // informando a url
        { // abre a inicialização do FETCH -- cabeçalho
            method: 'POST', // o envio de informação sera por POST
            body: fd // será o objeto 'fd' da classe FormData
        } // fecha iniciizalização do FETCH -- cabeçalho
    );
    const resposta = await retorno.json();
    console.log(resposta);
}

