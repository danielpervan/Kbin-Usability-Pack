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

        if (settings.infiniteCommentScroll === undefined) {
            settings.infiniteCommentScroll = true;
        }

        if (settings.addOptionsAnchor === undefined) {
            settings.addOptionsAnchor = true;
        }
        return settings;
    }
    replace(settings) {
        localStorage.setItem("kup-settings", JSON.stringify(settings));
        window.dispatchEvent(new CustomEvent("kup-settings-changed"));
        this.apply();
    }

    save(key, value) {
        const settings = this.getAll();
        settings[key] = value;
        this.replace(settings);
    }

    apply() {
        const settings = this.getAll();
        for (const [key, value] of Object.entries(settings)) {
            if (value === true || value === false) {
                document.body.classList.toggle("KUP-setting-" + key, value);
            }
        }
    }

    reset() {
        localStorage.removeItem("kup-settings");
    }
}

export default Settings;