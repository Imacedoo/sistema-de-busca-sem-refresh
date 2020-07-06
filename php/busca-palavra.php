<?php

include_once "conecta-banco.php";

$palavraAPesquisar = $_POST['palavra'];
$query = "SELECT NOME_DA_PALAVRA FROM palavras WHERE NOME_DA_PALAVRA LIKE '$palavraAPesquisar%'";

$resultadoPesquisa = buscaPalavra($conexao, $query);

while ($palavraEncontrada = mysqli_fetch_assoc($resultadoPesquisa)) {
    echo $palavraEncontrada['NOME_DA_PALAVRA']. " ";
}

function buscaPalavra($conexao, $query)
{
    $resultadoBusca = mysqli_query($conexao, $query);

    return $resultadoBusca;
}

