class MyButton extends HTMLDivElement {
    static get observedAttributes() {
        return ["varient"]
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const button = this.shadowRoot.querySelector('button');
        button && button.classList.replace(oldValue, newValue);
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