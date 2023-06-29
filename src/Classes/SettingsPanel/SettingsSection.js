import Settings from "../Settings";

class SettingsSection {
    settingsRows = []
    name;
    expanded = false;

    constructor(name) {
        this.name = name;
        this.settingsRows = [];
    }

    addSettingsRow(settingRow) {
        this.settingsRows.push(settingRow);
    }

    addSettingsRows(settingRows) {
        settingRows.forEach((row) => {
            this.addSettingsRow(row);
        });
    }

    static fromHeaderElement(headerElement) {
        return new SettingsSection(headerElement.innerText);
    }

    expand() {
        this.expanded = true;
        this.element.classList.add("expanded");
    }

    collapse() {
        this.expanded = false;
        this.element.classList.remove("expanded");
    }

    toggle() {
        this.expanded ? this.collapse() : this.expand();
    }

    getElement() {
        if (this.element) {
            return this.element;
        }
        const element = Object.assign(document.createElement("div"), {
            className: "settings-section",
        });
        this.element = element;

        const header = Object.assign(document.createElement("h3"), {
            className: "settings-section-header",
            innerHTML: `<span>${this.name}</span><i class="fas fa-chevron-down icon-chevron"></i>`,
        });
        header.addEventListener("click", (e) => {
            if (e.shiftKey) {
                window.dispatchEvent(new CustomEvent("kup-settings-expand-all-sections", {
                    detail: {
                        expand: !this.expanded,
                    }
                }));
            } else {
                this.toggle();
            }
        });

        element.appendChild(header);
        const settingsRows = Object.assign(document.createElement("div"), {
            className: "settings-rows",
        });
        element.appendChild(settingsRows);
        this.settingsRows.forEach((row) => {
            settingsRows.appendChild(row.getElement());
        });

        const settings = new Settings();
        if (settings.get("alwaysExpandSettingsSections")) {
            this.expand();
        }

        return element;
    }
}
export default SettingsSection;