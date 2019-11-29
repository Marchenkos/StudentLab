export class Shape {
    constructor(name) {
        this.name = name;
    }

    static calculateArea() {
    }
}

export class Rectangle extends Shape {
    constructor(height, width) {
        super("Rectangle");
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        return this.height * this.width;
    }
}

export class Square extends Shape {
    constructor(sideLength) {
        super("Square");
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength * this.sideLength;
    }
}

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }


    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
}

export class ShapesStore extends Shape {
    constructor(shapesArray) {
        super();
        this.shapesArray = shapesArray;
    }

    calculateArea() {
        let areaValue = 0;

        for (let i = 0; i < this.shapesArray.length; i++) {
            areaValue += this.shapesArray[i].calculateArea();
        }

        return areaValue;
    }
}
