import Settings from "../Settings";
import "./Notification.scss";

class NotificationHandler {
    static #instance;
    #containerElement;
    #activeNotifications;

    static TYPES = {
        INFO: "info",
        ERROR: "error",
        SUCCESS: "success",
        WARNING: "warning",
    }

    static ACTION_TYPES = {
        RELOAD: "reload",
        HIDE: "hide",
        NEVER_SHOW: "never-show",
        NONE: "none"
    }

    constructor() {
        this.#activeNotifications = [];
    }

    static getInstance() {
        if (!NotificationHandler.#instance) {
            NotificationHandler.#instance = new NotificationHandler();
            NotificationHandler.#instance.init();
        }
        return NotificationHandler.#instance;
    }

    createNotification(message, type = NotificationHandler.TYPES.INFO, id = null, action = NotificationHandler.ACTION_TYPES.NONE, options = {delay: 5000}) {
        const { delay } = options || {};
        if (!this.#containerElement) {
            console.error("NotificationHandler not initialised");
            return;
        }
        this.#containerElement.classList.add("visible");

        let notificationElement;
        if (id && this.#activeNotifications[id]) {
            notificationElement = this.#activeNotifications[id];
        } else {
            notificationElement = document.createElement("div");
            notificationElement.classList.add("notification", "visible");
            this.#activeNotifications[id] = notificationElement;
            this.#containerElement.insertBefore(notificationElement, this.#containerElement.firstChild);
        }

        let messageElement = Object.assign(document.createElement("span"), {
            className: "message",
            innerText: message,
        });

        let icon;
        let color;
        switch (type) {
            case NotificationHandler.TYPES.INFO:
                icon = "fas fa-circle-info";
                color = "var(--kbin-button-primary-bg)";
                break;
            case NotificationHandler.TYPES.ERROR:
                icon = "fas fa-circle-xmark";
                color = "var(--kbin-danger-color)";
                break;
            case NotificationHandler.TYPES.SUCCESS:
                icon = "fas fa-check";
                color = "var(--kbin-success-color)";
                break;
            case NotificationHandler.TYPES.WARNING:
                icon = "fas fa-triangle-exclamation";
                color = "#f0ad4e";
                break;
            default:
                icon = "fas fa-circle-info";
                color = "var(--kbin-button-primary-bg)";
                break;
        }

        let button;
        if (typeof action === "object") {
            const hideOnClick = action.hideOnClick === undefined ? true : action.hideOnClick;
            button = Object.assign(document.createElement("button"), {
                classList: ["btn btn-primary"],
                innerText: action.text,
            });
            button.addEventListener("click", () => {
                if (hideOnClick) {
                    this.hideNotification(id)
                }
                action.callback();
            });
        } else {
            switch (action) {
                case NotificationHandler.ACTION_TYPES.RELOAD:
                    button = Object.assign(document.createElement("button"), {
                        classList: ["btn btn-primary"],
                        innerText: "Reload",
                    });
                    button.addEventListener("click", () => {
                        messageElement.innerText = "Reloading...";
                        window.location.reload();
                    });
                    break;
                case NotificationHandler.ACTION_TYPES.HIDE:
                    button = Object.assign(document.createElement("button"), {
                        classList: ["btn btn-primary"],
                        innerText: "Close",
                    });
                    button.addEventListener("click", () => {
                        this.hideNotification(id)
                    });
                    break;
                case NotificationHandler.ACTION_TYPES.NEVER_SHOW:
                    button = Object.assign(document.createElement("button"), {
                        classList: ["btn btn-primary"],
                        innerText: "Never show again",
                    });
                    button.addEventListener("click", () => {
                        this.hideNotification(id)
                        const settings = new Settings();
                        settings.save("hide-notification-" + id, true);
                    });
                    break;
                default:
                    button = null;
                    setTimeout(() => {
                        this.hideNotification(id)
                    }, delay);
                    break;
            }
        }


        notificationElement.innerHTML = `
            <span class="message-icon" style="color:${color}"><i class="${icon}"></i></span>
        `;
        notificationElement.appendChild(messageElement);
        if (button) {
            notificationElement.appendChild(button);
        }
        return notificationElement;
    }

    hideNotification(id) {
        if (this.#activeNotifications[id]) {
            this.#activeNotifications[id].classList.add("hidden");
            const element = this.#activeNotifications[id]
            this.#activeNotifications[id].addEventListener("animationend", () => {
                element.remove();
            });
            this.#activeNotifications[id] = null;
        }
        if (Object.keys(this.#activeNotifications).length === 0) {
            this.#containerElement.classList.remove("visible");
        }
    }

    init() {
        const notificationContainer = Object.assign(document.createElement("div"), {
            id: "kup-notification-container",
        });
        document.body.appendChild(notificationContainer);
        this.#containerElement = notificationContainer;
    }
}

export default NotificationHandler;