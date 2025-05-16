import readline from 'readline';

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

RL.question("this is test question: ",async(answer)=>{
    console.log(answer);
    RL.close();
})