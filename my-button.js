class MyButton extends HTMLElement {
    constructor() {
        super();

        const button = document.createElement("button");
        button.innerText = "Click me!"

        this.appendChild(button);
    }
}

customElements.define('my-button', MyButton);