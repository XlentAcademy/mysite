import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Settings");
    }

    async getHtml() {
        return `
        <header>
        <a href="/" class="logo" data-link>Xlent</a>
        <div class="menu-toggle"></div>
        <nav>
            <ul>
                <li><a href="/" data-link>Home</a></li>
                <li><a href="/posts" data-link>Posts</a></li>
                <li><a href="/settings" class="active" data-link>Settings</a></li>
            </ul>
        </nav>
        <div class="clearfix"></div>
    </header>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="maintext">
        <h1>Settings</h1>
        <p>Welcome to Xlent Academy!</p>
        <p>You are viewing settings.</p>
    </div>
        `;
    }
}