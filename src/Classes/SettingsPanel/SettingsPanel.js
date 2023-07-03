import SettingsRow from "./SettingsRow";
import SettingsRowCustom from "./SettingsRowCustom";
import SettingsSection from "./SettingsSection";
import "./SettingsPanel.scss";
import SettingsRowBoolean from "./SettingsRowBoolean";
import SettingsRowEnum from "./SettingsRowEnum";
import Settings from "../Settings";

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
    #initiated = false;
    #notificationElement;
    #sections = [];
    #settingsPanelElement;
    #settingsPanelContainerElement;

    constructor() {
    }

    init() {
        if (this.#initiated) {
            console.error("SettingsPanel already initiated");
            return;
        }
        this.#initiated = true;
        this.#settingsPanelContainerElement = document.getElementById("settings");
        this.#addSettingsNotificationElement();
        document.KUP.settingsPanel = this;
        if (!document.KUP.components) {
            document.KUP.components = {};
        }
        document.KUP.components.SettingsPanelBooleanRow = SettingsRowBoolean;
        document.KUP.components.SettingsPanelEnumRow = SettingsRowEnum;
        document.KUP.components.SettingsPanelSection = SettingsSection;

        this.#enrichSettingsPanel();
        this.#populateKUPSettings();


        window.addEventListener("kup-settings-needs-reload", () => {
            this.showNotification("Settings updated. Some changes require reload to take effect.");
        });

        window.addEventListener("kup-settings-expand-all-sections", (e) => {
            this.#sections.forEach((section) => {
                e.detail.expand ? section.expand() : section.collapse();
            });
        });
    }

    addSection(section) {
        this.#sections.push(section);
        this.#settingsPanelElement.appendChild(section.getElement());
    }

    getSection(name) {
        return this.#sections.find((section) => section.name === name);
    }

    getSections() {
        return this.#sections;
    }

    removeSection(name) {
        const section = this.getSection(name);
        if (section) {
            section.getElement().remove();
            this.#sections = this.#sections.filter((section) => section.name !== name);
        }
    }

    rerender() {
        this.#settingsPanelElement.innerHTML = "";
        this.#sections.forEach((section) => {
            this.#settingsPanelElement.appendChild(section.getElement());
        });
    }

    #enrichSettingsPanel() {
        const settingsListElement = this.#settingsPanelContainerElement.querySelector(".settings-list");
        const settingsList = settingsListElement.querySelectorAll(":scope > *");
        const settingsPanel = document.createElement("div");
        this.#settingsPanelElement = settingsPanel;
        settingsPanel.classList.add("settings-panel");
        this.#settingsPanelContainerElement.appendChild(settingsPanel);
        this.#settingsPanelContainerElement.appendChild(Object.assign(document.createElement("div"), {
            className: "settings-panel-footer",
            innerHTML: '<div><i class="fas fa-info-circle"></i> <span>Shift click to toggle all sections</span></div>'
        }));
        /** Make sure this runs after everything is loaded */
        /** Wait further 100ms to make sure everything is loaded */
        window.addEventListener("load", () => {
            setTimeout(() => {
                const settings = new Settings();
                if (settings.get("settingsCompatibilityMode")) {
                    this.rerender();
                } else {
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
                    sections.forEach((section) => {
                        settingsPanel.appendChild(section.getElement());
                    });
                    settingsListElement.remove();
                    this.#sections = [...sections, ...this.#sections];
                    this.rerender();
                }
            }, 100);
        });
    }

    #addSettingsNotificationElement() {
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
        this.#notificationElement = settingsNotificationContainer;
    }

    showNotification(message) {
        this.#notificationElement.classList.add("visible");
        this.#notificationElement.querySelector(".message").innerText = message;
    }

    hideNotification() {
        this.#notificationElement.classList.remove("visible");
    }

    #populateKUPSettings() {
        const section = new SettingsSection("Kbin Usability Pack");
        section.addSettingsRows([
            new SettingsRowBoolean("Show URL subheader", {
                id: "showUrlSubheader",
                description: "Show the link URL beneath the title",
                value: true,
            }),
            new SettingsRowBoolean("Remove comment anchor", {
                id: "removeCommentAnchor",
                description: "Make the comment links go to the top of the article instead of the comments section.",
                requireReload: true,
                value: true,
            }),
            new SettingsRowBoolean("Show article preview button", {
                id: "showArticlePreview",
                value: true,
            }),
            new SettingsRowBoolean("Infinite comment scroll", {
                id: "infiniteCommentScroll",
                description: "Automatically load more comments when scrolling to the bottom of the page.",
                requireReload: true,
            }),
            new SettingsRowBoolean("Add anchor to comment sorting options", {
                id: "addOptionsAnchor",
                description: "Scroll to the comment section after reloading when clicking the comment sorting buttons.",
            }),
            new SettingsRowBoolean("Always expand settings sections", {
                id: "alwaysExpandSettingsSections",
                description: "Expand the settings sections by default.",
            }),
            new SettingsRowBoolean("Experimental mobile UI", {
                id: "alternativeMobileUI",
                description: "Use the alternative experimental mobile UI.",
                requireReload: true,
            }),
            new SettingsRowBoolean("Open articles in new tab", {
                id: "openArticleInNewTab",
            }),
            new SettingsRowBoolean("Show instance name", {
                id: "showInstanceName",
                description: "Show the instance name for federated posts.",
                requireReload: true
            }),
            new SettingsRowBoolean("Auto article preview", {
                id: "autoArticlePreview",
                description: "Automatically show article preview after a short delay.",
            }),
            new SettingsRowBoolean("Settings compatibility mode", {
                id: "settingsCompatibilityMode",
                description: "Increase compatibility with other scripts that modify the settings panel.",
                requireReload: true
            })
        ]);
        this.addSection(section);
    }
}

export default SettingsPanel;