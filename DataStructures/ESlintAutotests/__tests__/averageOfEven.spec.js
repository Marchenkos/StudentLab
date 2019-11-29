import { averageOfEven } from "../src/functions_array";

const { describe, test, expect } = global;

describe("Average function", () => {
    test("it should return average of even numbers for a non-empty numeric array", () => {
        const input = [2, 3, 8, 5, 7, 4, 9];
        const newArr = input.filter((a) => a % 2 == 0);
        let sum = 0;

        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }
        const expectedOutput = sum / newArr.length;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it should return average of even numbers for a non-empty numeric array, but that includes element null", () => {
        const input = [2, null, 8, 5, null, 9];
        const newArr = input.filter((a) => a % 2 == 0 && a != null);
        let sum = 0;

        for (let i = 0; i < newArr.length; i++) {
            sum += newArr[i];
        }

        const expectedOutput = sum / newArr.length;

        expect(averageOfEven(input)).toEqual(expectedOutput);
    });

    test("it shouldn't return not a number if input is't array", () => {
        const input = 254;

        expect(averageOfEven(input)).toBeNaN();
    });
});
