function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let fine = fare + (fare * 20 / 100) + 30;
    return fine;
}

function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let noSpaces = str.replace(/\s+/g, "");
    let upperCase = noSpaces.toUpperCase();
    return upperCase;
}

function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object" ||
        Array.isArray(player1) || Array.isArray(player2) ||
        player1 === null || player2 === null) {
        return "Invalid";
    }
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }
    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }
    let avg = Math.round(total / marks.length);
    return { finalScore: avg, pass: passCount, fail: failCount };
}