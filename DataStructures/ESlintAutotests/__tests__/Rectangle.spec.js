import { Rectangle } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating area from a rectangle class", () => {
    test("it should return the area of the rectangle, for which the sides is number", () => {
        const width = 6;
        const height = 8;
        const expectedOutput = height * width;
        const shape = new Rectangle(height, width);

        expect(shape.calculateArea()).toEqual(expectedOutput);
    });

    test("it should return zero", () => {
        const width = null;
        const height = null;
        const shape = new Rectangle(height, width);

        expect(shape.calculateArea()).toEqual(0);
    });

    test("it should return not a number", () => {
        let width;
        let height;
        const shape = new Rectangle(height, width);

        expect(shape.calculateArea()).toBeNaN();
    });
});
