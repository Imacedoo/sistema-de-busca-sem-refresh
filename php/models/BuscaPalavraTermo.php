<?php

class BuscaPalavraTermo
{
    public function __construct()
    {
        $this -> resultado = [];
    }

    public function busca($referencia)
    {
        if($referencia) {
            $resultadoBusca = mysqli_query(
                $this->conecta(),
                "SELECT NOME_DA_PALAVRA FROM palavras WHERE NOME_DA_PALAVRA LIKE '$referencia%'"
            );

            while ($palavrasEncontradas = mysqli_fetch_assoc($resultadoBusca)) {

                array_push($this->resultado, $palavrasEncontradas['NOME_DA_PALAVRA']);
            }
        } else {

            $this ->resultado = [];
        }
    }

    public function getResultado(): array
    {
        return $this->resultado;
    }

    private function conecta()
    {
        return mysqli_connect(
            'localhost:3306',
            'root',
            'IgrlckpU09**',
            'glossario_de_libras'
        );
    }
}