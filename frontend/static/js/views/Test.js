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
        <!-- <embed class="pdfsh" src="/static/test.pdf" width="100%" height="700px" data-link> </embed> -->
        <object class="pdfsh" data="/static/test.pdf" type="application/pdf" width="100%" height="700px" data-link>
    </div>
        `;
    }
}