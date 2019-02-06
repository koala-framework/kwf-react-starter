import { render } from "./app";

const loadHtml = () => {
    const baseEl = document.querySelector<HTMLElement>("kwf-react-starter");
    if (!baseEl) return false;

    render(baseEl, {
        exampleSetting: "foobar",
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    loadHtml();
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
