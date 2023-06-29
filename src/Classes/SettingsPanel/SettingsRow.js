import Settings from "../Settings";

class SettingsRow {
    element;
    name;
    description;
    value;
    type;
    id;
    static TYPES = {
        BOOLEAN: "boolean",
        STRING: "string",
        NUMBER: "number",
        ENUM: "enum",
        CUSTOM: "custom",
    }
    constructor(name, type, options={}) {
        this.name = name;
        this.type = type;

        const { description, value, id } = options || {};
        this.value = value;
        this.description = description;

        if (id) {
            this.setId(id);
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
        return element;
    }

    static fromElement(element) {
        return new SettingsRow(element.innerText, SettingsRow.detectType(element), "", {});
    }

    setId(id) {
        this.id = id;
        const settings = new Settings();
        const value = settings.get(id);
        if (value !== undefined) {
            this.value = value;
        }
    }

    legacyAction(valueElement) {
        if (valueElement.href?.trim().toLowerCase().startsWith("javascript:") || valueElement.href?.trim().startsWith("#")) {
            valueElement.click();
            return Promise.resolve();
        } else {
            return fetch(valueElement.href).then(() => {
                window.dispatchEvent(new CustomEvent("kup-settings-needs-reload"));
            });
        }
    }

    static detectType(element) {
        const valueElement = element.querySelector(":scope > div");

        const booleanRegex = /Yes\s*\|\s*No/;
        const enumRegex = /(\w+)\s*\|\s*(\w+)/;
        if (valueElement.innerText.trim().match(booleanRegex)) {
            return SettingsRow.TYPES.BOOLEAN;
        } else if (valueElement.innerText.trim().match(enumRegex)) {
            return SettingsRow.TYPES.ENUM;
        } else {
            return SettingsRow.TYPES.CUSTOM;
        }
    }
}

export default SettingsRow;