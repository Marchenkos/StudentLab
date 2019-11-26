import { average } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Average function", () => {
    test("it should return average for a non-empty numeric array", () => {
        const input = [1, 2, 3];
        let sum = 0;

        for (let i = 0; i < input.length; i++) {
            sum += input[i];
        }
        const expectedOutput = sum / input.length;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it should return not a number for an empty numeric array", () => {
        const input = [];

        expect(average(input)).toBeNaN();
    });

    test("it should return average for a non-empty numeric array, but includes element null", () => {
        const input = [1, null, 5];
        let sum = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] == null) {
                input[i] = 0;
            }

            sum += input[i];
        }
        const expectedOutput = sum / input.length;

        expect(average(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return not a number if input is't array", () => {
        const input = "lalalala";

        expect(average(input)).toBeNaN();
    });
});
