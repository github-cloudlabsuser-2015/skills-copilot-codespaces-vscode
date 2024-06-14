
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('Simple Calculator');
  console.log('Operations:\n1: Addition (+)\n2: Subtraction (-)\n3: Multiplication (*)\n4: Division (/)');
  
  readline.question('Choose an operation (1-4): ', (operation) => {
    readline.question('Enter the first number: ', (firstNumber) => {
      readline.question('Enter the second number: ', (secondNumber) => {
        let result;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
  
        switch (operation) {
          case '1':
            result = firstNumber + secondNumber;
            console.log(`Result: ${firstNumber} + ${secondNumber} = ${result}`);
            break;
          case '2':
            result = firstNumber - secondNumber;
            console.log(`Result: ${firstNumber} - ${secondNumber} = ${result}`);
            break;
          case '3':
            result = firstNumber * secondNumber;
            console.log(`Result: ${firstNumber} * ${secondNumber} = ${result}`);
            break;
          case '4':
            if (secondNumber === 0) {
              console.log('Error: Division by zero is not allowed.');
            } else {
              result = firstNumber / secondNumber;
              console.log(`Result: ${firstNumber} / ${secondNumber} = ${result}`);
            }
            break;
          default:
            console.log('Invalid operation selected.');
        }
        readline.close();
      });


    });
  });
// test.js
const { spawn } = require('child_process');

describe('Simple Calculator', () => {
  function runCalculator(inputs) {
    return new Promise((resolve) => {
      const proc = spawn('node', ['./calculator.js'], { stdio: ['pipe', 'pipe', process.stderr] });
      let output = '';
      proc.stdout.on('data', (data) => {
        output += data.toString();
      });
      proc.stdout.on('end', () => {
        resolve(output);
      });
      inputs.forEach(input => {
        proc.stdin.write(`${input}\n`);
      });
      proc.stdin.end();
    });
  }

  test('Addition', async () => {
    const output = await runCalculator(['1', '5', '3']);
    expect(output).toContain('Result: 5 + 3 = 8');
  });

  test('Subtraction', async () => {
    const output = await runCalculator(['2', '10', '4']);
    expect(output).toContain('Result: 10 - 4 = 6');
  });

  test('Multiplication', async () => {
    const output = await runCalculator(['3', '6', '7']);
    expect(output).toContain('Result: 6 * 7 = 42');
  });

  test('Division', async () => {
    const output = await runCalculator(['4', '8', '2']);
    expect(output).toContain('Result: 8 / 2 = 4');
  });

  test('Division by zero', async () => {
    const output = await runCalculator(['4', '8', '0']);
    expect(output).toContain('Error: Division by zero is not allowed.');
  });

  test('Invalid Operation', async () => {
    const output = await runCalculator(['5', '8', '2']);
    expect(output).toContain('Invalid operation selected.');
  });
});

