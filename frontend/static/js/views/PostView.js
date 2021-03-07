import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        if (this.postId == 1) {
            return `
        <div class="maintext">
            <h1>Posts</h1>
            <p>Welcome to Xlent Academy!</p>
            <iframe class="posts" src="https://xlentacademy.tk" width="100%" height="400px" data-link></iframe>
            <br /><br /><br />
            <a class="back" href="/posts" data-link>Go Back</a>
        </div>
            `;
        } else if (this.postId == 2) {
            return `
        <div class="maintext">
            <h1>Posts</h1>
            <p>Welcome to Xlent Academy!</p>
            <iframe class="posts" src="https://xlentacademy.blogspot.com" width="100%" height="400px" data-link></iframe>
            <br /><br /><br />
            <a class="back" href="/posts" data-link>Go Back</a>
        </div>
            `;
        } else {
            return `
        <div class="maintext">
            <h1>Posts</h1>
            <p>Welcome to Xlent Academy!</p>
            <p>This post does not exits!.</p>
            <a class="back" href="/posts" data-link>Go Back</a>
        </div>
            `;
        }
    }
}