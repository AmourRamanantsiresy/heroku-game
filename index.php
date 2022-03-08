<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style2.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Games</title>
</head>

<body>
    <h1 class="gameBg">GAMES.JS</h1>
    <div class="tableauB">
        <h1>GAMES.JS</h1>

        <h2 onclick="jeuSokoban()">Sokoban</h2>
    </div>

    <div class="canvas2">
        <canvas id="canvas"></canvas>
        <div class="message">
            <p id="messageP">Entrain de jouer... : niveau <span class="nivS"></span></p>
            <div>
                <div></div>
                <button onclick="refaire()">Refaire</button>
                <div></div>
                <button onclick="suivant()">Suivant</button>
                <div></div>
            </div>
        </div>
    </div>

    <script src="js/Niveaux.js"></script>
    <script src="js/Jeux.js"></script>
    <script src="js/principale.js"></script>
</body>

</html>
