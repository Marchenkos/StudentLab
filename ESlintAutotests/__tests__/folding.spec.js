import { folding } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Folding function", () => {
    test("it should call a callback for each element of the non-empty numeric array and change it", () => {
        const input = [2, 2, 8];
        const callback = (a, b) => a + b;
        let expectedOutput = 0;

        for (let i = 0; i < input.length; i++) {
            expectedOutput = callback(expectedOutput, input[i]);
        }

        expect(folding(input, callback, 0)).toEqual(expectedOutput);
    });

    test("it should call a callback for each element of the empty array and return zero", () => {
        const input = [];
        const callback = (a, b) => a + b;

        expect(folding(input, callback, 0)).toEqual(0);
    });
});
