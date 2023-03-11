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