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
    replace(settings, sendEvent = true, apply = true) {
        localStorage.setItem("kup-settings", JSON.stringify(settings));
        if (apply) {
            this.apply();
        }
        if (sendEvent) {
            window.dispatchEvent(new CustomEvent("kup-settings-changed"));
        }
    }

    save(key, value, apply = true) {
        const settings = this.getAll();
        const oldValue = settings[key];
        settings[key] = value;
        localStorage.setItem("kup-settings", JSON.stringify(settings));
        if (apply) {
            this.apply();
        }
        window.dispatchEvent(new CustomEvent("kup-settings-changed", {
            detail: {
                key: key,
                newValue: value,
                oldValue: oldValue
            }
        }));
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