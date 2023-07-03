import SettingsRow from "./SettingsRow";

class SettingsRowButton extends SettingsRow {
    constructor(name, options = {
        label: "Click me!", onClick: () => {
        }, requireReload: false,
    }) {
        super(name, SettingsRow.TYPES.BUTTON, options);
        const {label, onClick, requireReload} = options || {};
        this.label = label ?? "Click me!";
        this.onClick = onClick;
        this.requireReload = requireReload;
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

        const button = Object.assign(document.createElement("button"), {
            className: "btn btn-primary",
            innerText: this.label,
        });
        button.addEventListener("click", () => {
            if (this.onClick) {
                this.onClick();
            }
            if (this.requireReload) {
                this.showSettingsSavedNotification(this.requireReload);
            }
        });

        valueContainer.appendChild(button);
        element.appendChild(valueContainer);
        return element;
    }
}

export default SettingsRowButton;