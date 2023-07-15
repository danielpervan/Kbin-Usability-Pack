import settingsRow from "./SettingsRow";
import SettingsRow from "./SettingsRow";

class SettingsRowStandard extends settingsRow {
    constructor(name, element, options) {
        super(name, SettingsRow.TYPES.STANDARD, options);
        this.element = element;
        element.querySelectorAll('input').forEach((input) => {
            input.addEventListener('change', () => {
                this.showSettingsSavedNotification(true);
            });
        });

    }

    getElement() {
        return this.element;
    }

    static fromElement(element) {
        return new SettingsRowStandard(element.querySelector('.label').innerText, element, {});
    }
}

export default SettingsRowStandard;