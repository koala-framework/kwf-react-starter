var loadHtml = function() {
    var domain = null;
    for (var i = 0; i < document.scripts.length; i++) {
        var m = document.scripts[i].src.match(/^(.*)?\/assets\/build\/app/);
        if (m) domain = m[1];
    }
    if (domain === null) return false;

    var baseEl = document.querySelector("kwf-react-starter");
    if (!baseEl) return false;

    require("./app").render(baseEl, {
        domain: domain,
    });
};

if (["interactive", "complete"].indexOf(document.readyState) !== -1) {
    setTimeout(loadHtml, 1);
} else {
    document.addEventListener("DOMContentLoaded", loadHtml, false);
}
