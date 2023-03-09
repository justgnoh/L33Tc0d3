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
    let inputString = input.split("")
    let hashmap = new Map();

    for (let i = 0; i < inputString.length; i++) {
        let currentElem = inputString[i];        
        if (hashmap.has(currentElem)) { // check if hashmap already exists value
            hashmap.set(currentElem, hashmap.get(currentElem)+1);
        } else { 
            hashmap.set(currentElem, 1); //Add to hashmap
        }
    }

    // Check for highest occurence
    let highestOccurenceCount = Math.max(...hashmap.values());

    // Get keys with highest occurence
    let highestKeys = [...hashmap.entries()].reduce((acc,e,i) => {
        if (acc[1] == highestOccurenceCount && e[1] == highestOccurenceCount) { // Tie Break by ASCII code
            if (acc[0].charCodeAt(0) > e[0].charCodeAt(0)) {
                acc = e;
                return acc;
            } else {
                return acc;
            }
        } else if (acc[1] == highestOccurenceCount && e[1] != highestOccurenceCount) { // If Acc count > e count
            return acc;
        } else {
            return e; // If acc count && e count not highest, just return the next item;
        }
    })
    
    process.stdout.write(highestKeys[0] + " " + highestKeys[1]);       // Writing output to STDOUT
    
}