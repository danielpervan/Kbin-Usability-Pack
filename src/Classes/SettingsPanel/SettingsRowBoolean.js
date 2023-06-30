import SettingsRow from "./SettingsRow";
import Settings from "../Settings";

class SettingsRowBoolean extends SettingsRow {
    trueAction;
    falseAction;
    requireReload;
    onChangeAction;

    constructor(name, options = {}) {
        super(name, SettingsRow.TYPES.BOOLEAN, options);

        const {requireReload, onChange} = options || {};

        if (requireReload) {
            this.requireReload = requireReload;
        }

        if (onChange) {
            this.onChangeAction = onChange;
        }

        const action = (newValue) => {
            if (this.id) {
                const settings = new Settings();
                settings.save(this.id, newValue, !this.requireReload);
            }
            if (this.onChangeAction) {
                this.onChangeAction(newValue);
            }
            if (this.requireReload) {
                window.dispatchEvent(new CustomEvent("kup-settings-needs-reload"));
            }
        }

        this.bindTrueAction(() => {
            action(true);
        });

        this.bindFalseAction(() => {
            action(false);
        });
    }

    setValue(value) {
        this.value = !!value;
        if (this.value) {
            this.trueAction();
        } else {
            this.falseAction();
        }
    }

    bindTrueAction(action) {
        this.trueAction = action;
    }

    bindFalseAction(action) {
        this.falseAction = action;
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

        const label = Object.assign(document.createElement("label"), {
            className: "switch",
        });
        const input = Object.assign(document.createElement("input"), {
            type: "checkbox",
            checked: this.value,
        });
        const slider = Object.assign(document.createElement("span"), {
            className: "slider",
        });
        input.addEventListener("change", () => {
            this.setValue(!this.value);
        });

        label.appendChild(input);
        label.appendChild(slider);
        valueContainer.appendChild(label);
        element.appendChild(valueContainer);
        return element;
    }

    static fromElement(element) {
        let name = element.querySelector(":scope > span")?.innerText.trim();
        name = name.endsWith(":") ? name.slice(0, -1) : name;
        const settingsRow = new SettingsRowBoolean(name, {
            value: element.querySelector(":scope > div a.active").innerText.trim() === "Yes"
        });
        const valueElements = element.querySelectorAll(":scope > div a");
        valueElements.forEach((valueElement) => {
            if (valueElement.innerText.trim() === "Yes") {
                settingsRow.bindTrueAction(() => {
                    return settingsRow.legacyAction(valueElement);
                });
            } else {
                settingsRow.bindFalseAction(() => {
                    return settingsRow.legacyAction(valueElement);
                });
            }
        });
        return settingsRow;
    }
}

export default SettingsRowBoolean;