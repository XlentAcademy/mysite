import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Settings");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <h1>Settings</h1>
        <p>Welcome to Xlent Academy!</p>
        <p>You are viewing settings.</p>
    </div>
        `;
    }
}