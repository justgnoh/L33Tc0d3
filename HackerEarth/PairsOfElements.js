process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});


// Count num of (i,j) pairs where: (array[i] - array[j]) == (i^2 + j^2)
function main(input) {
    let inputs = input.split("\n");
    let lengthOfArray = inputs[0];
    let array = inputs[1].split(" ").map(Number);

    // Build Two Data structures
    let arrayJ = [];
    let hashmapI = new Map();
    
    array.forEach((v,i) => {
        // I
        hashmapI.set(i+1, v+Math.pow(i+1,2));

        // J
        arrayJ.push(v-Math.pow(i+1,2));
    })

    let result = 0;

    for (let z = 1; z <= lengthOfArray; z++) {
        let iIndex = z;
        let getValueInI = hashmapI.get(iIndex);
        for (let j = 1; j <= arrayJ.length; j++) {
            if ((arrayJ[j-1] == getValueInI)) {
                result += 1;
            }
        }   
    }

    process.stdout.write(result.toString());       // Writing output to STDOUT
}