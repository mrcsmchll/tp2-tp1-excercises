//TODO: consigna 2
import * as readline from 'node:readline'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  })

  