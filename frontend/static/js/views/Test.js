import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Settings");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <p>Welcome to Xlent Academy!</p>
        <iframe class="pdfsh" src="/static/test.pdf" width="100%" height="700px" data-link> </iframe>
    </div>
        `;
    }
}