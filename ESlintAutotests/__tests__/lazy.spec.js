import { lazy } from "../src/functional_programming";

const { describe, test, expect } = global;

describe("Lazy function", () => {
    test("it should return the same result as a action in agrument", () => {
        function forLazy(data) {
            const newArray = [];

            for (let i = 0; i < data.length; i++) {
                if (data[i] > 3) {
                    newArray.push(data[i]);
                }
            }

            return newArray;
        }

        const array = [2, 5, 8];

        expect(lazy(forLazy, array)()).toEqual(forLazy(array));
    });
});
