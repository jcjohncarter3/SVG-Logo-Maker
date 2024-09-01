/* Basic bluepring shape class*/
class Shape {
    //Variable properties intialized to defaults
    shapeFill = "black";
    fontColor = "white";
    text = "SVG";

    constructor(text, fontColor, shapeFill) {
        this.shapeFill = shapeFill || this.shapeFill;
        this.fontColor = fontColor || this.fontColor;
        this.text = text || this.text; 
    }

    svgStartTag() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
    svgEndTag () {
        return `</svg>`;
    }
    textElement() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.text}</text>`
    }
    render () {
        return `${this.svgStartTag()}
        ${this.shape()}
        ${this.textElement()}
        ${this.svgEndTag()}`;
    }
    shape() {
        return null;
    }

}

class Circle extends Shape {
    constructor(text, fontColor, shapeFill) {
        super(text, fontColor, shapeFill);

    } 
    shape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeFill}" />`
    }
}

class Square extends Shape {
    constructor(text, fontColor, shapeFill) {
        super(text, fontColor, shapeFill);

    } 
    shape() {
        return `<rect width="150" height="150" x="80" y="35" fill="${this.shapeFill}" />`
    }
}

class Triangle extends Shape {
    constructor(text, fontColor, shapeFill) {
        super(text, fontColor, shapeFill);
    }
    shape() {
        return `<polygon points="150,10 250,190 50,190" fill="${this.shapeFill}" />`;
    }
}



module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
};