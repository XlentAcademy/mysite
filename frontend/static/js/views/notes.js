import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Notes");
    }

    async getHtml() {
        return `
        <div class="maintext">
            <img width="100%" height="100%" src="/static/components/study/chart.svg" />
        </div>
        `;
    }
}