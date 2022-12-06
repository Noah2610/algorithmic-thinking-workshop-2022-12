/*

w
a
s

> w a s

w
a
s
d

> d

GAME OVER

// const userInput = prompt("Hey, enter something! ");
// console.log(userInput);

// if (userInput === "hi") {
//     console.log("Hello to you too!");
// }

*/

const promptSync = require("prompt-sync");
const prompt = promptSync();

// 1. Start game menu
prompt("Press [ENTER] to start playing!");

// 2. Get a random letter
//   from array with "wasd"
// Show letter
// ^^^ Repeat 3 times

const keyLog = [];

for (let i = 0; i < 3; i++) {
    const keys = ["w", "a", "s", "d"];
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];

    keyLog.push(randomKey);

    console.log(randomKey);
}

// 3. User input
const userInput = prompt("Please repeat: ");
// "w a s d" -> ["w", "a", "s", "d"]
const inputLetters = userInput.split(" ");

// 4. Check user input
//   4.a. Iterate input letters

// compare i of keyLog with i of userInput
for (let i = 0; i < keyLog.length; i++) {
    if (keyLog[i] !== inputLetters[i]) {
        console.log("Game Over!");
        break;
    // } else { // TODO: Not quite...
    //     console.log("You Win!");
    }
}

//   4.b. compare to pattern letters


//   when valid:   repeat from 2. but with extra letter
//   when invalid: game over