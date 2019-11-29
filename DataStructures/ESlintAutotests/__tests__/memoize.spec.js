import { memoize } from "../src/functional_programming";

const { describe, test, expect } = global;

describe("Memoized function", () => {
    test("it should return the same result as a action in agrument", () => {
        const inputValue = [1, 2, 3, 4];

        function input(data) {
            const newArray = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i] > 3) {
                    newArray.push(data[i]);
                }
            }

            return newArray;
        }

        const expectedOutput = inputValue.filter((a) => a > 3);

        expect(memoize(input)(inputValue)).toEqual(expectedOutput);
    });
});
