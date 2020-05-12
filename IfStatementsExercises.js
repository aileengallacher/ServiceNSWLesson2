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
    //  ************************
    //  If Statements exercise 1
    //  ************************
    // 
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt(userInput2);
    if (number1 > number2) {
        console.log(number1);
     } else {
            console.log(number2);
        }
    }
    //  *****************************************************
    //  If Statements exercise 2 - output largest to smallest
    //  *****************************************************
    // 
    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number: ");
    // let number2 = parseInt(userInput2);
    // if (number1 > number2) {
    //     console.log(number1, number2);
    //  } else {
    //         console.log(number2, number1);
    //     }
    // }
     //  *****************************************************
    //  If Statements exercise 3 - output smallest to largest 
    //  ******************************************************
    // 
    //     let userInput1 = await askQuestion("Enter the first number: ");
    //     let number1 = parseInt(userInput1);
    //     let userInput2 = await askQuestion("Enter the second number: ");
    //     let number2 = parseInt(userInput2);
    //     if (number1 < number2) {
    //         console.log(number1, number2);
    //      } else {
    //             console.log(number2, number1);
    //         }
    //     }
Program().then(() => {
    process.exit(0);
});