const func = (n) => {
    console.log(n);
}
  
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    
let input = [];
    
rl.on('line', function (line) {
    input.push(line)
})
.on('close', function () {
    const n = Number(input[0]);
    func(n);
});
    