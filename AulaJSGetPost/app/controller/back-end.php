<?php 
function baseFake($login, $senha){
    // "Banco de dados" fake
    $arrLogin = [];
    $arrLogin[] = array("login" => "teste", "senha" => "teste");
    $arrLogin[] = array("login" => "teste1", "senha" => "teste");
    $arrLogin[] = array("login" => "teste2", "senha" => "teste");

    // Verificar se existe login/senha
    for($i = 0; $i < count($arrLogin); $i++){
        $verify = $arrLogin[$i];
        if($verify["login"] == $login && $verify["senha"] == $senha){
            return true; // Encontrou o usuário
        }
    }
    return false; // Não encontrou
}

$arrRetorno = []; // criando um array vazio chamando $arrRetorno
$login = $_POST['login'] ?? '';
$senha = $_POST['senha'] ?? '';

if(baseFake($login, $senha)){
    $arrRetorno['status'] = 'ok';
    $arrRetorno['login'] = $login;
} else {
    $arrRetorno['status'] = 'erro';
    $arrRetorno['mensagem'] = 'Login ou senha inválidos!';
}

// MODIFICAR O HEADER para que ele entenda que a informação deverá ser codificada no formato application/json
header("Content-Type: application/json;charset=UTF-8");
echo json_encode($arrRetorno);
?>
