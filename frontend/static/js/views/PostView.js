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
            <p>You are viewing post 1.</p>
            <a href="/posts" data-link>Go Back</a>
            <a href="/posts/2" data-link>Next Post</a>
        </div>
            `;
        } else if (this.postId == 2) {
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
            <p>You are viewing post 2.</p>
            <a href="/posts/1" data-link>Go Back</a>
        </div>
            `;
        } else {
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
            <p>The post is not Here!.</p>
            <a data-link>Go Back</a>
        </div>
            `;
        }
    }
}