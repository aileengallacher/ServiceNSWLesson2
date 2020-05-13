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
    // ********************************************************
    // Count the number of times something appears in an array
    // ********************************************************
    // 
   let coloursArray = ["blue", "green", "red", "blue", "blue", "pink"];
   console.log(coloursArray);
   let numberOfBlue = 0 ;
   for (let i = 0; i < coloursArray.length; i++){
       if(coloursArray[i] == "blue"){
           numberOfBlue++;
       }
   }
   console.log(`There are ${numberOfBlues} blues in my array.`);
}

Program().then(() => {
    process.exit(0);
});