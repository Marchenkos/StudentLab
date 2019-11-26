import { map } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Mapping function", () => {
    test("it should return a new array from a non-empty numeric array whose elements transformed", () => {
        const input = [11, 2, 30, 1, 8];
        const callback = (a) => a + 10;
        const expectedOutput = [];

        for (let i = 0; i < input.length; i++) {
            expectedOutput.push(callback(input[i]));
        }

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it should return a new array from a non-empty string", () => {
        const input = "hello";
        const callback = (a) => a + 1;
        const expectedOutput = [];

        for (let i = 0; i < input.length; i++) {
            expectedOutput.push(callback(input[i]));
        }

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it should return a new array from a non-empty numeric array with null elements", () => {
        const input = [15, null, 5];
        const callback = (a) => a + 10;
        const expectedOutput = [];

        for (let i = 0; i < input.length; i++) {
            if (input[i] == null) {
                input[i] = 0;
            }

            expectedOutput.push(callback(input[i]));
        }

        expect(map(input, callback)).toEqual(expectedOutput);
    });

    test("it shouldn return an empty array", () => {
        const input = [];
        const callback = (a) => a + 10;

        expect(map(input, callback)).toBeEmpty();
    });
});
