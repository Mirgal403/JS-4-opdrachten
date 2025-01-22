
let wins = 0;
let losses = 0;
let ties = 0;

function rollDice() {
    let ikRoll = Math.floor(Math.random() * 6) + 1;
    let computerRoll = Math.floor(Math.random() * 6) + 1;

    let resultText = `Jij gooide ${steen(ikRoll)}
    , de computer gooide ${steen(computerRoll)}. `;

    if (ikRoll > computerRoll) {
        wins++;
        resultText += "Je hebt gewonnen!";
    } else if (ikRoll < computerRoll) {
        losses++;
        resultText += "Je hebt verloren!";
    } else {
        ties++;
        resultText += "Het is een gelijkspel!";
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("ties").innerText = ties;
}

function steen(rollen) {
    let sign = "";

    switch (rollen) {
        case 1:
            sign = " 1 ⚀";
            break;
        case 2:
            sign = " 2 ⚁";
            break;
        case 3:
            sign = " 3 ⚂";
            break;
        case 4:
            sign = " 4 ⚃";
            break;
        case 5:
            sign = " 5 ⚄";
            break;
        case 6:
            sign = " 6 ⚅";
            break;
    }

    return sign;
}