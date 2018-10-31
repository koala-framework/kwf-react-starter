import * as app from "./src/app";

const loadHtml = () => {
    const baseEl: HTMLElement = document.querySelector("kwf-react-starter");
    if (!baseEl) return false;

    app.render(baseEl, {
        exampleSetting: "foobar",
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    loadHtml();
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
