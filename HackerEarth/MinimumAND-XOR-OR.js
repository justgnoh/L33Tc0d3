/**
 * Notes:
 * - (A & B) ^ (A || B) is the same as (A) ^ (B)
 * - (A && B) ^ (A || B)= A ^(A||B) && B^(A||B) = A^B && B^A = A^B
 * 
 * Sort function here converts everything to UTF-16 string and compares the first character of the string. Hence the callback
 * must be used explicitly catered for numbers.
 * 
 * More info here: https://matcha.fyi/sort-not-working-javascript/#:~:text=The%20array%20returned%20is%20hardly,there%20is%20no%20callback%20specified.
 */

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let inputs = input.split("\n");
    let numTC = inputs[0];

    for (let t = 1; t <= numTC*2; t+=2) {
        let len = inputs[t];
        let array = inputs[t+1].split(" ").map(Number);
        
        // This sort is necessary!
        array.sort((a,b) => a - b);

        let min = Number.MAX_VALUE;
        let temp = 0;

        for (let i = 0; i < len-1; i++) {
            temp = (array[i]&&array[i+1])^(array[i]||array[i+1])
            min = Math.min(min, temp);
        }
        process.stdout.write(min.toString() + "\n");
        
    }
}