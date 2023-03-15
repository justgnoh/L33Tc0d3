/**
 * This is a sliding window type question
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
    // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    let inputs = input.split("\n");
    let nk = inputs[0].split(" ").map(Number);
    let n = nk[0];
    let k = nk[1];
    let array = inputs[1].split(" ").map(Number);
    let result = Number.MIN_VALUE;

    let sumQ = 0;
    let sumS = 0;

    // Process Sum From the back first
    for (let b = 0; b < n; b++) {
        if (b >= n-k) {
            sumQ += array[b];
        }
    }

    // Process Sum from front, minus one element from back
    for (let i = 0; i < k; i++) {
        sumS += array[i];
        sumQ -= array[n-k+i];
        result = Math.max(result, sumS+sumQ);
    }

    process.stdout.write(result.toString());
}