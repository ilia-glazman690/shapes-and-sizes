// lib/shapes.js

class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </svg>`;
      return svg;
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 275,180 25,180" fill="${this.color}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </svg>`;
      return svg;
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" fill="${textColor}" font-size="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </svg>`;
      return svg;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  