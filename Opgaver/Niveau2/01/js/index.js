let btnContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll("button");


btnContainer.addEventListener("click", (event) => {
    if (event.target.localName === "button") {
    buttons.forEach(button => button.removeAttribute("style"));
    event.target.style.backgroundColor = "limeGreen"
    }
});