import SettingsRow from "./SettingsRow";
import SettingsRowCustom from "./SettingsRowCustom";
import SettingsSection from "./SettingsSection";
import "./SettingsPanel.scss";
import SettingsRowBoolean from "./SettingsRowBoolean";
import SettingsRowEnum from "./SettingsRowEnum";

function settingsRowFromElement(element) {
    let settingsRow;
    switch (SettingsRow.detectType(element)) {
        case SettingsRow.TYPES.BOOLEAN:
            settingsRow = SettingsRowBoolean.fromElement(element);
            break;
        case SettingsRow.TYPES.ENUM:
            settingsRow = SettingsRowEnum.fromElement(element);
            break;
        default:
            settingsRow = SettingsRowCustom.fromElement(element)
            break;
    }
    return settingsRow;
}

class SettingsPanel {
    sections = [];

    constructor() {
    }

    init() {
        this.settingsPanelContainerElement = document.getElementById("settings");
        this.addSettingsNotificationElement();


        this.enrichSettingsPanel().then(() => {
            this.populateKUPSettings();
        });

        window.addEventListener("kup-settings-needs-reload", (e) => {
            this.showNotification("Settings updated. Some changes require a reload to take effect.");
        });

        window.addEventListener("kup-settings-expand-all-sections", (e) => {
            this.sections.forEach((section) => {
                e.detail.expand ? section.expand() : section.collapse();
            });
        });
    }

    addSection(section) {
        this.sections.push(section);
        this.settingsPanelElement.appendChild(section.getElement());
    }

    enrichSettingsPanel() {
        const settingsListElement = this.settingsPanelContainerElement.querySelector(".settings-list");
        const settingsList = settingsListElement.querySelectorAll(":scope > *");

        /** Make sure this runs last */
        /** 500ms ought to be enough for anyone */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let currentSection = null;
                let sections = [];
                settingsList.forEach((el) => {
                    /* Found section */
                    if (el.tagName === "STRONG") {
                        if (currentSection) {
                            sections.push(currentSection);
                            currentSection = null;
                        }
                        currentSection = SettingsSection.fromHeaderElement(el);
                    } else {
                        if (!currentSection) {
                            console.error("Found setting without section: ", el);
                            currentSection = new SettingsSection("Other");
                        }
                        const settingsRow = settingsRowFromElement(el)
                        currentSection.addSettingsRow(settingsRow);
                    }
                });
                if (currentSection) {
                    sections.push(currentSection);
                }

                const settingsPanel = document.createElement("div");
                settingsPanel.classList.add("settings-panel");
                sections.forEach((section) => {
                    settingsPanel.appendChild(section.getElement());
                });
                this.settingsPanelElement = settingsPanel;
                this.settingsPanelContainerElement.appendChild(settingsPanel);
                settingsListElement.remove();
                this.sections = sections;
                this.settingsPanelContainerElement.appendChild(Object.assign(document.createElement("div"), {
                    className: "settings-panel-footer",
                    innerHTML: '<div><i class="fas fa-info-circle"></i> <span>Shift click to toggle all sections</span></div>'
                }));
                resolve();
            }, 500);
        })
    }

    addSettingsNotificationElement() {
        const settingsNotificationContainer = Object.assign(document.createElement("div"), {
            id: "settings-notification-container",
        });
        const settingsNotificationElement = document.createElement("div");
        settingsNotificationElement.classList.add("notification");
        settingsNotificationElement.innerHTML = `
            <span class="message-icon"><i class="fas fa-circle-info"></i></span>
            <span class="message"></span>
            <button class="btn btn-primary">Reload</button>
        `;
        settingsNotificationElement.querySelector("button").addEventListener("click", () => {
            window.location.reload();
        });
        settingsNotificationContainer.appendChild(settingsNotificationElement);
        document.body.appendChild(settingsNotificationContainer);
        this.notificationElement = settingsNotificationContainer;
    }

    showNotification(message) {
        this.notificationElement.classList.add("visible");
        this.notificationElement.querySelector(".message").innerText = message;
    }

    hideNotification() {
        this.notificationElement.classList.remove("visible");
    }

    populateKUPSettings() {
        const section = new SettingsSection("Kbin Usability Pack");

        section.addSettingsRows([
            new SettingsRowBoolean("Show URL subheader", true, {
                id: "showUrlSubheader",
                description: "Show the link URL beneath the title",
            }),
            new SettingsRowBoolean("Remove comment anchor", true, {
                id: "removeCommentAnchor",
                description: "Make the comment links go to the top of the article instead of the comments section.",
                requireReload: true,
            }),
            new SettingsRowBoolean("Show article preview button", true, {
                id: "showArticlePreview"
            })
        ]);
        this.addSection(section);
    }
}

export default SettingsPanel;