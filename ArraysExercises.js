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
    // Console app that takes strings from the user and adds them to an array
    // ********************************************************************** 
    // 
   let coloursArray = ["blue", "green", "red"];
   console.log(coloursArray);
   let userInput1 = await askQuestion("What colour is a banana? ");

   coloursArray.push(userInput1);
   console.log(coloursArray);
   
    // let userInput1 = await askQuestion("Enter a colour: ");
    // let colour1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter another colour: ");
    // let colour2 = parseInt(userInput2);
    // let answersToQuestion = (colour1, colour2)
    // console.log(answersToQuestion);
}

Program().then(() => {
    process.exit(0);
});