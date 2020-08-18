(function () {
    function setTheme(dark) {
        if (dark) {
            // A dark color scheme preference is set so we add the class from our html element
            document.documentElement.classList.add("darkmode");
        } else {
            // No dark color scheme preference is set so we remove the class from our html element
            document.documentElement.classList.remove("darkmode");
        }
    }

    function checkPreference(query) {
        const lsPref = localStorage.getItem("theme");
        var dark = lsPref ? lsPref === "dark" : query.matches;
        setTheme(dark);
    }

    var preference_query = window.matchMedia("(prefers-color-scheme: dark)");
    checkPreference(preference_query);
    preference_query.addListener(checkPreference);
})()

function switchTheme() {
    var dark = document.documentElement.classList.toggle("darkmode");
    localStorage.setItem("theme", dark ? "dark" : "light");
}