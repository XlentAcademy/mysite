import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Notes");
    }

    async getHtml() {
        return `
        <center><div id="loader"></div></center>
        <div style="display:none;" id="myDiv" class="animate-bottom">
        <div class="maintext">
            <img onload="timeout()" width="100%" height="100%" src="/static/components/study/chart.svg" />
        </div>
        </div>
        `;
    }
}