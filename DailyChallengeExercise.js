const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    //  
    // ********************************************************************** 
    //  --- not yet completed ---
    // 
    // ********************************************************************** 
    // 
    let fruits = [];
    let shouldLoop = true;
    while(shouldLoop){
        let userInput = await askQuestion("Please enter a fruit: ");
        for(let i = 0; i < fruits.length; i++){
            if(userInput == fruits[i]){
                shouldLoop = false;
            }
        }
        if (shouldLoop) {
            fruits.push(userInput);
        }
    }

    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
Program().then(() => {
    process.exit(0);
});