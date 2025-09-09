<?php 

    $arrRetorno = []; //criando um array vazio chamando $arrRetorno
    $arrRetorno['login'] = $_POST['login'];

    // MODIFICAR O HEADER para que ele entenda que a informação deverá ur codificada no formato application/json
    header("Content-Type: application/json;charset=UTF-8");
    echo json_encode($arrRetorno);

?>