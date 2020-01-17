import { act } from "react-dom/test-utils";
import { RESIZE_WINDOW } from "../../constants";
import mobileVersionHelper from "../../additionalFunctions/mobileVersionHelper";

describe("Test for function that add event listener", () => {
    it("Function should add event listener for action 'resize'", () => {
        const callback = jest.fn();
        mobileVersionHelper(callback);

        act(() => RESIZE_WINDOW(500));

        expect(callback).toHaveBeenCalled();
    });
});
