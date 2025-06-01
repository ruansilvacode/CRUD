<?php
include('conexao.php');

$sql = "SELECT * FROM clientes";
$resultado = mysqli_query($conexao, $sql);

$clientes = array();

while ($linha = mysqli_fetch_assoc($resultado)) {
    $clientes[] = $linha;
}

echo json_encode($clientes);

mysqli_close($conexao);
?>

