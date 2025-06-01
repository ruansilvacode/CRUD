<?php
include('conexao.php');

$id = $_POST['id'];

$sql = "DELETE FROM clientes WHERE id = $id";

mysqli_query($conexao, $sql);

mysqli_close($conexao);
?>
