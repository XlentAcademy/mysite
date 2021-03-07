import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Test");
    }

    async getHtml() {
        return `
    <center><div id="loader"></div></center>
    <div style="display:none;" id="myDiv" class="animate-bottom">
    <div class="maintext">
        <p>Welcome to Xlent Academy!</p>
        <iframe onload="timeout()" class="pdfsh" data="https://xlentacademy.tk/12th_jee_1.pdf" type="application/pdf" width="100%" height="700px" data-link>
        <p>Your web browser doesn't have a PDF plugin.
        Instead you can <a href="https://xlentacademy.tk/12th_jee_1.pdf" download="xlent_test.pdf">click here to
        download the PDF file.</a></p>
        </iframe>
    </div>
    </div>
        `;
    }
}