const loadHtml = () => {
    let domain = null;
    const scripts = document.getElementsByTagName("script");
    [].every.call(scripts, (script: HTMLScriptElement) => {
        const m = script.src.match(/^(.*)?\/assets\/build\/kwf-react-starter/);
        if (m) {
            domain = m[1];
            return false;
        }
        return true;
    });
    if (domain === null) return false;
    __webpack_public_path__ = domain + __webpack_public_path__;

    const baseEl = document.querySelector<HTMLElement>("kwf-react-starter");
    if (!baseEl) return false;

    import("./src/app").then(({ render }) => {
        render(baseEl, {
            exampleSetting: "foobar",
        });
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    loadHtml();
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
