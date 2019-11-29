import { filter } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Filter function", () => {
    test("it should return a new array from a non-empty numeric array whose elements passed filtration", () => {
        const input = [11, 2, 30, 1, 8];
        const callback = (a) => a < 10;

        expect(filter(input, callback)).toSatisfyAll(callback);
    });

    test("it should return a new array from a non-empty numeric array whose elements passed filtration and may be null", () => {
        const input = [15, null, 5];
        const callback = (a) => a < 10;

        if (input.includes(null)) {
            input[input.indexOf(null)] = 0;
        }

        expect(filter(input, callback)).toSatisfyAll(callback);
    });

    test("it should return an empty array", () => {
        const input = "lalalala";
        const callback = (a) => a < 10;

        expect(filter(input, callback)).toBeEmpty();
    });
});
