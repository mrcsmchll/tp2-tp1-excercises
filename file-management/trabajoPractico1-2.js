//TODO: consigna 2

//This is to test the usage of cl inputs and outputs
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  })

  