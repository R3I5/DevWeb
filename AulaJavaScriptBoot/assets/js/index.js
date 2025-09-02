function retornabotao(){
    var nome;
    var senha;
    nome = document.getElementById("nome").value;
    senha = document.getElementById("senha").value;

    var retorno = baseFake(nome, senha);
    var erros = [
        "login efetudo com sucesso!",
        "login certo, porém senha errada!",
        "Login não encontrado"
    ]
    alert(erros[retorno])
    }


function baseFake(login, senha){
    const baseFake = [];
    baseFake.push({login: "foo", senha: "bla"})
    baseFake.push({login: "teste", senha: "teste"})
    baseFake.push({login: "joão", senha: "1234"})
    baseFake.push({login: "fake", senha: "fake"})
    baseFake.push({login: "fake_test", senha: "1234"})

    for(var i=0; i<baseFake.length;i++){
        var verify = baseFake[i];
        if(login == verify.login){
            if(senha == verify.senha){
                return 0; //login e senha corretos
            } else{
                return 1; //login existe, senha errada
            }
        }
    }
    return 2; // só retorna 2 depois de verificar todos 
}

