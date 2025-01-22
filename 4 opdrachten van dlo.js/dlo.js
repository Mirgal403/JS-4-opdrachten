let word = prompt("Voer een woord in:");
let hetWord = "_".repeat(word.length);
let lives = 10;

document.getElementById("display").innerText = hetWord;

function raadLetter() {
let raden = document.getElementById("raden").value.toLowerCase();
let newDisplayWord = "";

if (word.includes(raden)) {
    for (let i = 0; i < word.length; i++) {
    if (word[i] === raden) {
        newDisplayWord += raden;
    } else {
        newDisplayWord += hetWord[i];
    }
    }
    hetWord = newDisplayWord;
    document.getElementById("display").innerText = hetWord;

    if (!hetWord.includes("_")) {
    alert("congratulations you guessed good word!");
    document.getElementById("raden").disabled = true;
    document.querySelector("button").disabled = true;
    }
} else {
    lives--;
    document.getElementById("lives").innerText = "nog kansen " + lives;
    if (lives === 0) {
    alert("  you lost. The word was: " + word);
    document.getElementById("raden").disabled = true;
    document.querySelector("button").disabled = true;
    }
}
document.getElementById("raden").value = "";
}