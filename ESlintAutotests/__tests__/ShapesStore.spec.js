import { ShapesStore, Rectangle, Square } from "../src/classes";

const { describe, test, expect } = global;

describe("Method for calculating a common area of shapes", () => {
    test("it should return a common area of the squares", () => {
        const input = [new Square(8), new Square(6), new Square(5), new Rectangle(2, 8), new Rectangle(5, 10)];
        const shapesStore = new ShapesStore(input);
        let expectedOutput = 0;
        for (let i = 0; i < input.length; i++) {
            expectedOutput += input[i].calculateArea();
        }

        expect(shapesStore.calculateArea()).toEqual(expectedOutput);
    });
    test("it should return zero", () => {
        const shapesStore = new ShapesStore([]);

        expect(shapesStore.calculateArea()).toEqual(0);
    });
});
