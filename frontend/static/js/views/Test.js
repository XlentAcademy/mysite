import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Test");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <p>Welcome to Xlent Academy!</p>
        <!-- <embed class="pdfsh" src="/static/test.pdf" width="100%" height="700px" data-link> </embed> -->
        <object class="pdfsh" data="https://docs.google.com/gview?embedded=true&url=https://xlentacademy.tk/12th_jee_1.pdf" type="application/pdf" width="100%" height="700px" data-link>
        <p>Your web browser doesn't have a PDF plugin.
        Instead you can <a href="https://xlentacademy.tk/12th_jee_1.pdf" download="xlent_test.pdf">click here to
        download the PDF file.</a></p>
        </object>
    </div>
        `;
    }
}