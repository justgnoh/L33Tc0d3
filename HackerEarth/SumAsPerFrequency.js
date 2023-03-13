/**
 * This question requires you to have a solution that runs in O(N) time at max.
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
    let inputs = input.split("\n")
    let len = inputs[0];
    let array = inputs[1].split(" ").map(Number);
    let numQueries = inputs[2];

    let processed = new Map();
    let countArray = [null];
    let sumArray = [null];
    let runningSum = [null, 0];

    // Count number of times they appear.
    for (let i = 0; i < len; i++) {
        if (countArray[array[i]] == null) {
            countArray[array[i]] = 1;
        } else {
            countArray[array[i]] += 1;
        }
    }

    // Process Sum Array
    for (let s = 0; s < countArray.length; s++) {
        if (countArray[s] != null) {
            let getCount = countArray[s];
            
            if (sumArray[getCount] == null) {
                sumArray[getCount] = getCount*s;
            } else {
                sumArray[getCount] += getCount*s;
            }
        }
    }

    // Process Running Array
    for (let r = 1; r <=sumArray.length; r++) {
        if (r == 1) {
            runningSum[r] = 0;
        } else {
            runningSum[r] = sumArray[r-1] + runningSum[r-1];
        }
    }

    // Process Queries
    for (let q = 3; q < inputs.length; q++) {
        let query = inputs[q].split(" ").map(Number);
        let first = query[0];
        let second = query[1];
        let result = 0;
        
        if (first > (runningSum.length-1)) {
            result = 0;
        } else if (second >= runningSum.length) {
            result = runningSum[runningSum.length-1] - runningSum[first];
        } else if (first == 1 && second == 1) {
            result = runningSum[runningSum.length-1]
        } else {
            result = runningSum[second] - runningSum[first];
        }
        
        process.stdout.write(result.toString() + "\n");
    }
}