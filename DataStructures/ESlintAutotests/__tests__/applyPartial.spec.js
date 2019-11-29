import { applyPartial } from "../src/functional_programming";

const { describe, test, expect } = global;

function pureFunction(a1, a2, a3, a4, a5, a6) {
    let sum = 0;
    const params = [a1, a2, a3, a4, a5, a6];

    for (const arg of params) {
        sum += arg;
    }

    return sum * 10;
}

describe("Partial application", () => {
    test("it should apply a function several times", () => {
        const firstArg = [3, 3, 5, 2];
        const secondArg = [7, 12];

        expect(applyPartial(pureFunction, ...firstArg)(...secondArg)).toEqual(pureFunction(...firstArg, ...secondArg));
    });
});
