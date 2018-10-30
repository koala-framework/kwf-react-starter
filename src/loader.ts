import "app/globals";

const loadHtml = async () => {
    const baseEl: HTMLElement = document.querySelector("kwf-react-starter");
    if (!baseEl) return false;

    const app = await import("./app");
    app.render(baseEl, {
        exampleSetting: "foobar",
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    loadHtml();
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
