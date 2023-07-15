import SettingsRow from "./SettingsRow";

class SettingsRowCustom extends SettingsRow {
    valueElement;

    constructor(name, options) {
        super(name, SettingsRow.TYPES.CUSTOM, options);
        const { valueElement } = options || {};
        if (valueElement) {
            this.valueElement = valueElement;
        }
    }

    getElement() {
        if (this.element) {
            return this.element;
        }
        const element = Object.assign(document.createElement("div"), {
            className: "settings-row",
        });
        this.element = element;
        const name = Object.assign(document.createElement("span"), {
            className: "label",
            innerText: this.name,
        });
        element.appendChild(name);
        if (this.description) {
            element.classList.add("has-description");
            const description = Object.assign(document.createElement("span"), {
                className: "help",
                innerText: this.description,
            });
            element.appendChild(description);
        }

        const valueContainer = Object.assign(document.createElement("div"), {
            className: "value-container",
        });
        valueContainer.appendChild(this.valueElement);
        element.appendChild(valueContainer);
        return element;
    }

    static fromElement(element) {
        let name = element.querySelector(":scope > span")?.innerText.trim();
        name = name.endsWith(":") ? name.slice(0, -1) : name;

        const settingsRow = new SettingsRowCustom(name);
        settingsRow.description = element.querySelector(".description")?.innerText;
        settingsRow.valueElement = element.querySelector(":scope > div");
        return settingsRow;
    }
}
export default SettingsRowCustom;