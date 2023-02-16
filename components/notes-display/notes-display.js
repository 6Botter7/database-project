class NotesDisplay extends HTMLElement {
    get html() { return import.meta.url.replace('.js', '.html'); }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = await (await fetch(this.html)).text();
        console.log('NotesDisplay connectedCallback');

    }

    async disconnectedCallback() {

    }
}

customElements.define("notes-display", NotesDisplay);