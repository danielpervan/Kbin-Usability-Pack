class Settings {
    constructor() {}

    get(key) {
        const settings = this.getAll();
        if (settings[key] === undefined) {
            return null;
        }
        return settings[key];
    }

    getAll() {
        const data = localStorage.getItem("kup-settings");
        let settings = {}
        if (data) {
            settings = JSON.parse(data);
        }

        if (settings.showUrlSubheader === undefined) {
            settings.showUrlSubheader = true;
        }

        if (settings.removeCommentAnchor === undefined) {
            settings.removeCommentAnchor = true;
        }

        if (settings.showArticlePreview === undefined) {
            settings.showArticlePreview = true;
        }
        return settings;
    }
    replace(settings) {
        localStorage.setItem("kup-settings", JSON.stringify(settings));
        window.dispatchEvent(new CustomEvent("kup-settings-changed"));
    }

    save(key, value) {
        const settings = this.getAll();
        settings[key] = value;
        this.replace(settings);
    }

    reset() {
        localStorage.removeItem("kup-settings");
    }
}

export default Settings;