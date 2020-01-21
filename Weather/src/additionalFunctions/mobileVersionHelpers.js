export function mobileVersionHelper(callback) {
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
}

export function changeStyleForMobile() {
    document.body.style.background = "#ffffff";
}

export function changeStyleForDesktop() {
    document.body.style.background = "linear-gradient(90deg,#0d014b 0px,#6c6ab5 100%)";
}
