export default function resizeWindow(x) {
    window.innerWidth = x;
    window.dispatchEvent(new Event("resize"));
}
