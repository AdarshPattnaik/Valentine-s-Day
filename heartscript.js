// This JS document is for the logical scripting of the webpage

// Body(Default values):
document.body.style = "background-color: var(--dark);transition: 0.5s;"

// Light Theme Icon:
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// Dark Theme Icon:
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

// Required Variables:
var theme = "dark";
const root = document.querySelector(":root");

// Theme Button:
const Button = document.getElementById("btn");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");

// Changing the Theme:
Button.addEventListener("click", setTheme);

// Function definition for changing the theme:
function setTheme() {
    switch (theme) {
        case "dark":
            setLight();
            theme = "light";
            break;
        case "light":
            setDark();
            theme = "dark";
            break;
    }
}

// Function deffinition for light theme:
function setLight() {
    root.style.setProperty("--dark","rgba(237, 227, 255)");
    container.classList.toggle("shadow-dark");
    setTimeout(() => {
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}

// Function definition for dark theme:
function setDark() {
    root.style.setProperty("--dark", "rgba(12, 16, 34)");
    container.classList.toggle("shadow-light");
    setTimeout(() => {
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}