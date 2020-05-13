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
while(shouldLoop) {
   let userInput = await askQuestion("What colour is a banana? ");
   for(let i = 0; i < fruits.length; i++){
       if(fruits[i] == userInput) {
       shouldLoop = false;
        break;
   }
}
if (shouldLoop) {
    fruits.push(userInput);
    else {
        break;
    }
}
console.log(fruits);
}
  // fruits.push(userInput1);


Program().then(() => {
    process.exit(0);
});