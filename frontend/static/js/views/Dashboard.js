import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Home");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <h1>Welcome to world of Knowledge</h1>
        <p>The purpose of this website is to share knowledege with anyone, anytime, anybody. As the websites are availabe 24 hours we have no limit of time to
        solve doubts of students, also students are also like to have solve their doubts at that instance. So then this website is made for those who want to solve their doubt in a couple of minutes which saves the time.</p>
    </div><br /><br /><br />

    <div class="mt">
    <h1 class="maintitle"><span>Xlent</span> <u>Academy</u></h1>
    </div>
    <br />
    <div><hr /></div>
    <br />
    <div class="vid">
        <!-- <embed src="https://www.youtube.com/embed/ng_b-8OGOTg"></embed> -->
        <embed></embed>
    </div>
    <br />
    <div><hr /></div>
    <br />
        `;
    }
}