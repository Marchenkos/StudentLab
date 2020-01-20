import { act } from "react-dom/test-utils";
import resizeWindow from "../../additionalFunctions/resizeWindowHelper";
import * as mobileHelper from "../../additionalFunctions/mobileVersionHelpers";

describe("Test for function that add event listener", () => {
    it("Function should add event listener for action 'resize'", () => {
        const callback = jest.fn();
        mobileHelper.mobileVersionHelper(callback);

        act(() => resizeWindow(500));

        expect(callback).toHaveBeenCalled();
    });
});

describe("Test for the function that changes body style", () => {
    it("Function should change background color to white", () => {
        const expectedColor = "rgb(255, 255, 255)";
        mobileHelper.changeStyleForMobile();

        expect(document.body.style.background).toBe(expectedColor);
    });
});
