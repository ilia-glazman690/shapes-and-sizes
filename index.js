const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter up to three characters: ', (text) => {
  rl.question('Enter text color (color keyword or hexadecimal number): ', (textColor) => {
    console.log('Choose a shape:');
    console.log('1. Circle');
    console.log('2. Triangle');
    console.log('3. Square');

    rl.question('Enter your choice (1-3): ', (shapeChoice) => {
      rl.question('Enter shape color (color keyword or hexadecimal number): ', (shapeColor) => {
        rl.close();
        generateSVG('logo.svg', text, textColor, shapeChoice, shapeColor);
        console.log('Generated logo.svg');
      });
    });
  });
});

function generateSVG(filename, text, textColor, shapeChoice, shapeColor) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${getShapeSvg(shapeChoice, shapeColor)}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`;

  fs.writeFileSync(filename, svgContent);
}

function getShapeSvg(shapeChoice, shapeColor) {
  switch (Number(shapeChoice)) {
    case 1: // Circle
      return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    case 2: // Triangle
      return `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
    case 3: // Square
      return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    default:
      return '';
  }
}
