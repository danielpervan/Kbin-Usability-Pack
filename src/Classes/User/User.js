class User {
    username;
    avatar;
    constructor(username, avatar = null) {
        this.username = username;
        this.avatar = avatar;
    }
}

export default User;