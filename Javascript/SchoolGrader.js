
let scores = [80, 90, 75, 85, 95];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}

let average = sum / scores.length;

console.log("Average score: " + average);
