import SettingsRow from "./SettingsRow";

class SettingsRowCustom extends SettingsRow {
    name;
    description;
    value;
    valueElement;

    constructor(name, value) {
        super(name, SettingsRow.TYPES.CUSTOM, value);
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
            className: "name",
            innerText: this.name,
        });
        element.appendChild(name);
        if (this.description) {
            element.classList.add("has-description");
            const description = Object.assign(document.createElement("span"), {
                className: "description",
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
        const settingsRow = new SettingsRowCustom();
        settingsRow.name = element.querySelector(":scope > span")?.innerText.trim();
        settingsRow.name = settingsRow.name.endsWith(":") ? settingsRow.name.slice(0, -1) : settingsRow.name;
        settingsRow.description = element.querySelector(".description")?.innerText;
        settingsRow.value = element.querySelector("input")?.value;
        settingsRow.valueElement = element.querySelector(":scope > div");
        return settingsRow;
    }
}
export default SettingsRowCustom;