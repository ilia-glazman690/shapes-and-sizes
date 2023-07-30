// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const logoFilePath = './examples/logo.svg';

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => /^[A-Za-z0-9]{1,3}$/.test(input),
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color name or hexadecimal value):',
        validate: (input) => /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input),
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color name or hexadecimal value):',
        validate: (input) => /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(input),
      },
    ]);

    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        console.error('Invalid shape selection.');
        return;
    }

    shape.setColor(userInput.shapeColor);

    const svgLogo = shape.render(userInput.text, userInput.textColor);

    fs.writeFileSync(logoFilePath, svgLogo);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateLogo();
