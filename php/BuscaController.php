<?php
include 'models/BuscaPalavraTermo.php';

//Recebo os dados
$referenciaParaBusca = $_POST['dados'];

//Busco as palavras
$buscaPalavraTermo = new BuscaPalavraTermo();
$buscaPalavraTermo -> busca($referenciaParaBusca);

//Obtenho o resultado
$resultado = $buscaPalavraTermo -> getResultado();

echo json_encode($resultado);

