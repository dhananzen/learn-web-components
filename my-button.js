class MyButton extends HTMLDivElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const btnTemplate = document.querySelector("#my-button-template");
        const children = btnTemplate.content.cloneNode(true);

        const button = children.querySelector('button');

        const varient = this.getAttribute('varient');
        button.classList.add(varient)

        this.shadowRoot.appendChild(children);
    }
}

customElements.define('my-button', MyButton, { extends: "div" });