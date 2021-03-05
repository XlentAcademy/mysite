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
            <p>You are viewing post 1.</p>
            <a href="/posts" data-link>Go Back</a>
            <a href="/posts/2" data-link>Next Post</a>
        </div>
            `;
        } else if (this.postId == 2) {
            return `
        <div class="maintext">
            <h1>Posts</h1>
            <p>Welcome to Xlent Academy!</p>
            <p>You are viewing post 2.</p>
            <a href="/posts/1" data-link>Go Back</a>
        </div>
            `;
        } else {
            return `
        <div class="maintext">
            <h1>Posts</h1>
            <p>Welcome to Xlent Academy!</p>
            <p>This post does not exits!.</p>
            <a data-link>Go Back</a>
        </div>
            `;
        }
    }
}