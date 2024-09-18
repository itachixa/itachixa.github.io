// Récupère l'élément "container" où le jeu aura lieu
let container = document.querySelector(".container");
// Récupère le bouton de démarrage du jeu
let btn = document.querySelector('.start_btn');
// Récupère les conteneurs pour afficher le score et le temps restant
let scoreContainer = document.querySelector('.score');  // Correction du nom de la classe
let timeContainer = document.querySelector('.time');

// Action lorsque l'utilisateur clique sur le bouton de démarrage
btn.onclick = function() {
    let score = 0; // Correction de la variable 'scrore' en 'score'
    let time = 10; // Temps initial du jeu en secondes
    container.innerHTML = ""; // Vide le contenu du container pour démarrer un nouveau jeu
    
    // Démarre un intervalle qui se répète toutes les secondes (1000 ms)
    let interval = setInterval(function showTarget() {
        // Crée une nouvelle image (la cible) à chaque itération
        let target = document.createElement('img');
        target.id = "target";
        target.src = "silly.png"; // Image source de la cible
        container.appendChild(target); // Ajoute la cible dans le container
        
        // Positionne la cible aléatoirement à l'intérieur du container
        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

        // La cible disparaît après 2 secondes si elle n'a pas été cliquée
        setTimeout(function() {
            target.remove();
        }, 2000);

        // Quand la cible est cliquée
        target.onclick = function() {
            score += 1; // Incrémente le score de 1
            target.style.display = 'none'; // Cache la cible
        };

        // Décrémente le temps restant
        time -= 1;
        // Affiche le score et le temps restant dans les conteneurs respectifs
        scoreContainer.innerHTML = `Score: ${score}`; // Correction des guillemets pour l'interpolation
        timeContainer.innerHTML = `Temps: ${time}`;

        // Quand le temps atteint 0, arrête le jeu
        if (time == 0) {
            clearInterval(interval); // Arrête l'intervalle
            container.innerHTML = "Le jeu est terminé"; // Affiche un message de fin de jeu
        }
    }, 1000); // Intervalle de 1 seconde
};
