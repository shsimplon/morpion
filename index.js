var button = document.querySelectorAll('button')
var jeu = document.getElementById("game_status");
console.log(jeu)

var turn = true;
//si true c'set x qui joue si false c'est o

button.forEach(element => {
    element.addEventListener("click", function() {
        if (element.textContent == '') {
            if (turn) {
                // turn = true donc c'est x qui commence le jeu

                element.textContent = 'x';
                jeu.textContent = "Joueur X c'est votre tour";
                // puis la turn = false pour dire la c'est le tour de o et ainsi de suite 
                // turn=false : on peut ecrie comme ca au lieu de turn = !turn;
                // turn = !turn;: si turn egale true donc je vai renvoyer false 
                turn = !turn;

            } else {

                element.textContent = 'o';
                jeu.textContent = "Joueur O c'est votre tour";

                turn = !turn;
                // turn = true;

            }
        }

    });

});