class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const varient = this.getAttribute('varient');
        console.log(varient)

        const button = document.createElement("button");
        button.innerText = "Click me!"
        button.classList.add(varient)

        const styles = document.createElement('style');
        styles.textContent = `
            button {
                border-radius: 10px;
            }

            .primary {
                background-color: skyblue;
            }
        
            .secondary {
                background-color: wheat;
            }
        `

        this.shadowRoot.appendChild(button);
        this.shadowRoot.appendChild(styles);
    }
}

customElements.define('my-button', MyButton);