const readline = require('readline');

function getName() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question((`\nВЕЛКОМЕ! 🖐\n\nПиши имя, студент:\n\n`), (name) => {
      rl.close();
      resolve(name);
    });
  });
}

module.exports = getName;
