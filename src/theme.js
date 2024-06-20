export function toggleAccessibility() {
    const body = document.body;

    if (!body) {
        return;
    }

    body.classList.toggle("accessibility-mode");

    const modeText = document.getElementById("mode-text");
    if (body.classList.contains("accessibility-mode")) {
        if (modeText) {
            modeText.innerHTML = "Change to Dark Mode";
            modeText.classList.add("right");
            modeText.classList.remove("left");
        }
        localStorage.setItem("theme", "light");
    } else {
        if (modeText) {
            modeText.innerHTML = "Change to Light Mode";
            modeText.classList.add("left");
            modeText.classList.remove("right");
        }
        localStorage.setItem("theme", "dark");
    }
}

export function applyStoredTheme() {
    const body = document.body;
    const isDarkMode = localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null;
    const modeText = document.getElementById("mode-text");

    if (!body) {
        return;
    }

    if (isDarkMode) {
        body.classList.remove("accessibility-mode");
        if (modeText) {
            modeText.innerHTML = "Change to Light Mode";
            modeText.classList.add("left");
            modeText.classList.remove("right");
        }
    } else {
        body.classList.add("accessibility-mode");
        if (modeText) {
            modeText.innerHTML = "Change to Dark Mode";
            modeText.classList.add("right");
            modeText.classList.remove("left");
        }
    }
}
