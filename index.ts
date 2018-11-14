import * as app from "./src/app";

declare let __webpack_public_path__: string;

const loadHtml = () => {
    let domain = null;
    const scripts = document.getElementsByTagName("script");
    [].every.call(scripts, (script: HTMLScriptElement) => {
        const m = script.src.match(/^(.*)?\/assets\/build\/kwf-react-starter\/kwf-react-starter/);
        if (m) {
            domain = m[1];
            return false;
        }
        return true;
    });
    if (domain === null) return false;
    __webpack_public_path__ = domain + __webpack_public_path__;

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
