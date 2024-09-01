const { Shape, Circle, Square, Triangle } = require("./shapes");

describe("Shape", function() {
    it("returns default text as 'SVG'", function() {
        const shape = new Shape();
        expect(shape.text).toBe("SVG");
    });
    it("does not return default text as a number", function() {
        const shape = new Shape();
        expect(shape.text).not.toBe(123);
    });
    it("returns default shape color as 'black'", function() {
        const shape = new Shape();
        expect(shape.shapeFill).toBe("black");
        expect(shape.shapeFill).not.toBe("white");
    });
    it("returns default text color as 'white'", function() {
        const shape = new Shape();
        expect(shape.fontColor).toBe("white");
    });
    it("sets custom shape color", function() {
        const shape1 = new Shape(null, null, "blue");
        expect(shape1.shapeFill).toBe("blue");
        expect(shape1.shapeFill).not.toBe("black");
        // testing fontColor and text to still retain default
        expect(shape1.fontColor).toBe("white");
        expect(shape1.text).toBe("SVG");
    });

    it("sets custom text", function() {
        const shape1 = new Shape("tru");
        expect(shape1.text).toBe("tru");
        expect(shape1.text).not.toBe("SVG");
        // testing shapeFill and fontcolor to still retain default
        expect(shape1.shapeFill).toBe("black");
        expect(shape1.fontColor).toBe("white");
    });

    it("sets custom font color", function() {
        const shape1 = new Shape(null, "red");
        expect(shape1.fontColor).toBe("red");
        expect(shape1.fontColor).not.toBe("Red");
        expect(shape1.fontColor).not.toBe("RED");
        expect(shape1.fontColor).not.toBe("black");
        expect(shape1.text).toBe("SVG");
        expect(shape1.shapeFill).toBe("black");
    });

    it("returns starting svg tag", function() {
        const shape = new Shape();
        expect(shape.svgStartTag()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
        expect(shape.svgStartTag()).not.toBe(`<svg>`);
        expect(shape.svgStartTag()).not.toBe(`<svg></svg>`);
        expect(shape.svgStartTag()).not.toBe(`</svg>`);
    });

    it("returns ending svg tag", function() {
        const shape = new Shape();
        expect(shape.svgEndTag()).toBe(`</svg>`);
        expect(shape.svgEndTag()).not.toBe(`<svg>`);
        expect(shape.svgEndTag()).not.toBe(`<svg></svg>`);
        expect(shape.svgEndTag()).not.toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`);
    });

    it("returns default text element", function() {
        const shape = new Shape();
        expect(shape.textElement()).toBe(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`);
    });

    it("returns default null in shape()", function() {
        const shape = new Shape();
        expect(shape.shape()).toBeNull();
        expect(shape.shape()).not.toBe(`<circle/>`);
        expect(shape.shape()).not.toBe(`<rect/>`);
        expect(shape.shape()).not.toBe(`<polygon/>`);
    });
});

describe("Triangle", function() {
    it("renders default triangle", function() {
        const triangle = new Triangle();
        const data = triangle.render();
        // console.log("the triangle is: ", data);
        expect(data).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 250,190 50,190" fill="black" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>`);
    });

    it("renders blue triangle with red text 'Tru'", function() {
        const triangle = new Triangle("Tru", "red", "blue");
        const data = triangle.render();
        // console.log("the triangle is: ", data);
        expect(data).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,10 250,190 50,190" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Tru</text>
            </svg>`);
    });
});

describe("Circle", function() {
    it("renders default circle", function() {
        const circle = new Circle();
        const data = circle.render();
        // console.log("the circle is: ", data);
        expect(data).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="black" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>`);
    });

    it("renders blue circle with red text 'Tru'", function() {
        const circle = new Circle("Tru", "red", "blue");
        const data = circle.render();
        // console.log("the triangle is: ", data);
        expect(data).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Tru</text>
            </svg>`);
    });
});