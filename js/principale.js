//canvas : initialisation du canvas dans JavaScript
const canvas = document.getElementById("canvas");
//ctx : context du canvas
const ctx = canvas.getContext("2d");
//prise de l'id de la balise <p> du document html
const messageP = document.getElementById("messageP");
//taille du canvas
canvas.height = 405;
canvas.width = 405;

//niveau1 : tableau de graphique du niveau 1 
let niv = [Niveaux.niv1, Niveaux.niv2, Niveaux.niv3, Niveaux.niv4, Niveaux.niv5, Niveaux.niv6, Niveaux.niv7, Niveaux.niv8, Niveaux.niv9]
//niveau actuel
let nivA = 0;
//jeux : instance de la classe Jeux
let jeux = new Jeux(ctx, [...niv][nivA], canvas, messageP)
jeux.main()
document.querySelector(".nivS").innerHTML = nivA + 1


//fonction qui à son activation permet de refaire le jeu
function refaire() {
    document.querySelector(".nivS").innerHTML = nivA + 1
    jeux.efface()
    jeux.fin()
    niv = [Niveaux.niv1, Niveaux.niv2, Niveaux.niv3, Niveaux.niv4, Niveaux.niv5, Niveaux.niv6, Niveaux.niv7, Niveaux.niv8, Niveaux.niv9]
    jeux = new Jeux(ctx, niv[nivA], canvas, messageP)
    jeux.main()
}

function suivant() {
    jeux.efface()
    jeux.fin()
    niv = [Niveaux.niv1, Niveaux.niv2, Niveaux.niv3, Niveaux.niv4, Niveaux.niv5, Niveaux.niv6, Niveaux.niv7, Niveaux.niv8, Niveaux.niv9]
    nivA++
    if (nivA == 9)
        nivA = 0
    document.querySelector(".nivS").innerHTML = nivA + 1
    jeux = new Jeux(ctx, niv[nivA], canvas, messageP)
    jeux.main()
}

//fonction qui démare le jeu
function jeuSokoban() {
    document.querySelector(".gameBg").style.animation = "anime1 1s forwards";
    document.querySelector(".canvas2").style.animation = "anime2 1s forwards";
    document.querySelector(".tableauB").style.animation = "anime2 1s forwards reverse";
}