import { changeStyleForMobile } from "../../additionalFunctions/changeStyleForMobile";

describe("Test for the function that changes body style", () => {
    it("Function should change background color to white", () => {
        const expectedColor = "rgb(255, 255, 255)";
        changeStyleForMobile();

        expect(document.body.style.background).toBe(expectedColor);
    });
});
