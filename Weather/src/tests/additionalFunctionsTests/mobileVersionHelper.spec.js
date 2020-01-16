import { act } from "react-dom/test-utils";
import mobileVersionHelper from "../../additionalFunctions/mobileVersionHelper";

const { describe, it, expect } = global;

const resizeWindow = x => {
    window.innerWidth = x;
    window.dispatchEvent(new Event("resize"));
};

describe("Test for functions that add event listener", () => {
    it("Function should add event listener for action 'resize'", () => {
        const callback = jest.fn();
        mobileVersionHelper(callback);

        act(() => resizeWindow(500));

        expect(callback).toHaveBeenCalled();
    });
});
