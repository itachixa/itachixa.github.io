fetch("liste.txt")
.then(response => response.text())
.then(data => {
    var Wordlist = data.split("\n");
    var randomIndex = Math.floor(Math.random() * Wordlist.length);
    const WordToGuess = Wordlist[randomIndex].trim();

    // alert(WordToGuess);
    
    var wordLength = WordToGuess.length;
    var hiddenWord = "";
    for (var i = 0; i < wordLength; i++) {
        hiddenWord += "_";
    }
    document.getElementById("word").innerHTML = hiddenWord;
    
    var guessInput = document.getElementById("guess");
    var submitButton = document.getElementById("submit");
    var result = document.getElementById("result");
    var link = document.getElementById("link");

    submitButton.onclick = function() {
        var guess = guessInput.value;
        if (guess.length > 1 || guess.length === 0) {
            result.innerHTML = "Entrez une seule lettre.";
        } else if (WordToGuess.indexOf(guess) === -1) {
            result.innerHTML = "Mauvaise lettre.";
        } else {
            for (var i = 0; i < wordLength; i++) {
                if (WordToGuess[i] === guess) {
                    hiddenWord = hiddenWord.substr(0, i) + guess + hiddenWord.substr(i + 1);
                }
            }
            document.getElementById("word").innerHTML = hiddenWord;

            if (hiddenWord === WordToGuess) {
                result.innerHTML = "Bravo, tu viens de trouver le mot !";
                guessInput.style.display = "none";
                submitButton.style.display = "none";
                link.style.display = "block";
            }
        }
    }
});
