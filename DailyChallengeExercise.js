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
    // Your Code Goes Here...
    // let coloursArray = ["blue", "green", "red"];
    //console.log(coloursArray);
    // let userInput1 = await askQuestion("What colour is a banana? ");
    // let colour1 = userInput1();

    // int array[] = 


    coloursArray.push(userInput1);
    console.log(coloursArray);
}
    //
//     let userInput1 = await askQuestion("What colour is the sky? ");
//     let colour1 = parseInt(userInput1);
//     let userInput2 = await askQuestion("What colour is an orange? ");
//     let colour2 = parseInt(userInput2);
//     let userInput3 = await askQuestion("What colour is a banana? ");
//     let colour3 = parseInt(userInput3);

//     let colourAnswers = [colour1, colour2,colour3]
//    // console.log("colour1", "colour2", "colour3");
//    console.log(colourAnswers);
// }

Program().then(() => {
    process.exit(0);
});