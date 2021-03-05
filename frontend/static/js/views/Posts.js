import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Posts");
    }

    async getHtml() {
        return `
        <header>
        <a href="/" class="logo" data-link>Xlent</a>
        <div class="menu-toggle"></div>
        <nav>
            <ul>
                <li><a href="/" data-link>Home</a></li>
                <li><a href="/posts" class="active" data-link>Posts</a></li>
                <li><a href="/settings" data-link>Settings</a></li>
            </ul>
        </nav>
        <div class="clearfix"></div>
    </header>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="maintext">
        <h1>Posts</h1>
        <p>Welcome to Xlent Academy!</p>
        <p>You are viewing posts.</p>
        <a href="/posts/1" data-link>Post 1</a><br />
        <a href="/posts/2" data-link>Post 2</a>
    </div>
        `;
    }
}