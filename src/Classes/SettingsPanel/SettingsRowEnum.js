import SettingsRow from "./SettingsRow";
import Settings from "../Settings";

class SettingsRowEnum extends SettingsRow {
    selectedId;
    constructor(name, defaultValue, options={}) {
        super(name, SettingsRow.TYPES.ENUM, "", options);
        const { id, values } = options || {};
        if (id) {
            this.id = id;
            const settings = new Settings();
            const value = settings.get(id);
            if (value !== undefined) {
                this.value = value;
            }
        } else {
            this.selectedId = defaultValue;
        }
        if (values) {
            this.values = values;
        } else {
            throw new Error("SettingsRowEnum requires values");
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

        const valueContainer = Object.assign(document.createElement("div"), {
            className: "value-container enum",
        });

        this.values.forEach((value) => {
            const valueElement = Object.assign(document.createElement("a"), {
                className: "value",
                innerText: value.value,
                href: value.id,
            });
            console.log(this.selectedId, value.id);
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
        const valueElements = element.querySelectorAll(":scope > div a");
        let values = [];
        let selectedId = null;
        valueElements.forEach((valueElement) => {
            let value = {}
            value.value = valueElement.innerText.trim();
            value.id = valueElement.href;
            value.action = () => {
                return fetch(valueElement.href).then(() => {
                    window.dispatchEvent(new CustomEvent("kup-settings-needs-reload"));
                });
            };
            if (valueElement.classList.contains("active")) {
                selectedId = value.id;
            }
            values.push(value);
        });

        return new SettingsRowEnum(name, selectedId, {
            values: values,
        });
    }

}
export default SettingsRowEnum;