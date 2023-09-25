<?php
// Dados do banco de dados
$host = 'containers-us-west-156.railway.app:5819';
$db = 'railway';
$user = 'root';
$pass = 'mA3nzheIcymQZs0Sn34L';

// Conexão com o banco de dados
$conn = new mysqli($host, $user, $pass, $db);

// Verificação da conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}


date_default_timezone_set('America/Sao_Paulo');
$datas = date("d/m/y -- H:i:s");

// UPDATE NO VISIT DO SITE
$query = "UPDATE `visits` SET `number` =`number`+1, `data`='$datas'  WHERE `id` = 1;";
$result = $conn->query($query);

// SELECT
$query = "SELECT * FROM visits where id=1";
$result = $conn->query($query);
$row = mysqli_fetch_array($result);
$visit = $row['number'];

// INSERT 
$query = "INSERT INTO `msg`(`hora`,`status`,`visits`) VALUES ('$datas','pendente','$visit');";
$result = $conn->query($query);




// Conexão com o banco de dados
$conn = new mysqli($host, $user, $pass, $db);

// Verificação da conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}


?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>@yzzin.xz ❤</title>
</head>
<body>
    <div class="snow" aria-hidden="true">
        <div class="snowflakes"></div>
    </div>
    <div class="background">
        <!-- Conteúdo do seu site aqui -->
        <center id="center">
            <h2>Sempre que estiver mal clique aqui.</h2>
            <div class="wrap">
                <button onclick="window.open('./text','_self')" class="button">Clique</button>
            </div>
        </center>
    </div>
<script src="script.js"></script>
<script>// Adicione o código JavaScript abaixo ao seu arquivo script.js

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 5 + 2 + "s";
        document.querySelector(".snow").appendChild(snowflake);
    
        setTimeout(() => {
            snowflake.remove();
        }, 7000); // Tempo de vida de cada floco de neve
    }
    
    function createSnowflakes() {
        setInterval(createSnowflake, 200); // Intervalo para criar novos flocos de neve
    }
    
    createSnowflakes(); // Iniciar a criação de flocos de neve
    </script>
    <h5 style="color: rgb(141, 144, 146);text-align: center;margin-top: 91vh;">By @yzzin.xz</h5>
</body>
</html>
