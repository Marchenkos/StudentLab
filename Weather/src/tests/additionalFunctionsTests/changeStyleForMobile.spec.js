import { changeStyleForMobile, changeStyleForDesktop } from "../../additionalFunctions/changeStyleForMobile";

const { describe, it, expect } = global;

describe("Test for functions that change body style", () => {
    it("Function should change background color to white", () => {
        const expectedColor = "rgb(255, 255, 255)";
        changeStyleForMobile();

        expect(document.body.style.background).toBe(expectedColor);
    });

    // it("Function should change background color to linear gradient ", () => {
    //     const expectedColor = "linear-gradient(90deg,#0d014b 0px,#6c6ab5 100%)";
    //     changeStyleForDesktop();

    //     expect(document.body.style.background).toBe(expectedColor);
    // });
});
