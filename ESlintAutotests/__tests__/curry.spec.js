import { curry } from "../src/functional_programming";

const { describe, test, expect } = global;

function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;
    const params = [a1, a2, a3, a4, a5, a6];

    for (const arg of params) {
        sum += arg;
    }

    return sum * 10;
}

describe("Curry function", () => {
    test("it should call a function in argument several times", () => {
        const result = curry(pureFunction);

        expect(result(1)(2)(3)(4)(5)(6)).toEqual(pureFunction(1, 2, 3, 4, 5, 6));
    });
});
