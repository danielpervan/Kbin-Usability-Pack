class User {
    username;
    avatar;
    reputation;
    constructor(username, avatar = null) {
        this.username = username;
        this.avatar = avatar;
    }

    fetchData() {
        return fetch('/ajax/fetch_user_popup/' + this.username).then(response => response.text()).then(text => {
            const {html} = JSON.parse(text);
            let dom = new DOMParser().parseFromString(html, 'text/html');
            this.avatar = dom.querySelector('img').src;
            this.reputation = html.match(/Reputation points: (\d)/)?.[0] ?? null;
        });
    }
}

export default User;