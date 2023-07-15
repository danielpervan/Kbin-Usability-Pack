import SettingsRow from "./SettingsRow";

class SettingsRowEnum extends SettingsRow {
    selectedId;
    values = [];

    constructor(name, options = {}) {
        super(name, SettingsRow.TYPES.ENUM, options);
        const {values, selectedId} = options || {};
        if (selectedId) {
            this.selectedId = selectedId;
        }
        if (values) {
            this.values = values;
        }
    }

    setSelected(id) {
        this.selectedId = id;
        this.element.querySelectorAll(".value").forEach((valueElement) => {
            valueElement.classList.remove("selected");
        });
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
            className: "value-container enum",
        });

        this.values.forEach((value) => {
            const valueElement = Object.assign(document.createElement("a"), {
                className: "value",
                innerText: value.value,
                href: value.id,
            });
            if (this.selectedId === value.id) {
                valueElement.classList.add("selected");
            }
            valueElement.addEventListener("click", (e) => {
                e.preventDefault();
                value.action();
                element.querySelectorAll(".value").forEach((valueElement) => {
                    valueElement.classList.remove("selected");
                });
                valueElement.classList.add("selected");
            });
            valueContainer.appendChild(valueElement);
        });


        element.appendChild(valueContainer);
        return element;
    }

    static fromElement(element) {
        let name = element.querySelector(":scope > span")?.innerText.trim();
        name = name.endsWith(":") ? name.slice(0, -1) : name;
        const settingsRow = new SettingsRowEnum(name);
        const valueElements = element.querySelectorAll(":scope > div a");
        let values = [];
        let selectedId = null;
        valueElements.forEach((valueElement) => {
            let value = {}
            value.value = valueElement.innerText.trim();
            value.id = valueElement.href;
            value.action = () => {
                settingsRow.legacyAction(valueElement);
            };
            if (valueElement.classList.contains("active")) {
                selectedId = value.id;
            }
            values.push(value);
        });
        settingsRow.values = values;
        settingsRow.selectedId = selectedId;

        return settingsRow;
    }

}

export default SettingsRowEnum;