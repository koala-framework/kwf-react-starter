import { getConfig } from "./config";

const loadHtml = () => {
    const baseEl: HTMLElement = document.querySelector("kwf-react-starter");
    if (!baseEl) return false;

    require("./app").render(baseEl, {
        domain: getConfig("domain"),
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    setTimeout(loadHtml, 1);
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
