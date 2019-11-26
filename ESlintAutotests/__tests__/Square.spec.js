import { Square } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating area from a square class", () => {
    test("it should return the area of the square, for which the side is number", () => {
        const side = 6;
        const expectedOutput = side * side;
        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return zero", () => {
        const side = null;
        const shape = new Square(side);

        expect(shape.calculateArea()).toEqual(0);
    });

    test("it should return  not a number", () => {
        let side;
        const shape = new Square(side);

        expect(shape.calculateArea()).toBeNaN();
    });
});
