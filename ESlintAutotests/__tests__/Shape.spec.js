import { Shape } from "../src/classes";

const { describe, test, expect } = global;

describe("Class Shape", () => {
    test("it should create new object", () => {
        const name = "Shape";
        const shape = new Shape(name);

        expect(shape).toContainValue(name);
    });
});
