import NotificationHandler from "./NotificationHandler";

class LocalNotification {
    static TYPES = NotificationHandler.TYPES;

    static ACTION_TYPES = NotificationHandler.ACTION_TYPES;

    #element = null;
    #notificationHandler;

    /**
     * Create a new notification
     * @param message {string}
     * @param options {{[type=LocalNotification.TYPES.INFO]: LocalNotification.TYPES, [action=LocalNotification.ACTION_TYPES.NONE]: LocalNotification.ACTION_TYPES | function, [id]: string}}
     */
    constructor(message, options = {
        type: LocalNotification.TYPES.INFO,
        action: LocalNotification.ACTION_TYPES.NONE,
        id: null
    }) {
        const {type, action, id} = options || {};
        this.type = type;
        this.action = action;
        this.id = id || Math.round(Math.random() * 100000000000000000);
        this.message = message;
        this.#notificationHandler = NotificationHandler.getInstance();
    }

    /**
     * Show the notification
     */
    show() {
        this.#element = this.#notificationHandler.createNotification(this.message, this.type, this.id, this.action);
    }

    /**
     * Show a new notification
     * @param message
     * @param options {{[type=LocalNotification.TYPES.INFO]: LocalNotification.TYPES, [action=LocalNotification.ACTION_TYPES.NONE]: LocalNotification.ACTION_TYPES | function, [id]: string}}
     */
    static show(message, options = {
        type: LocalNotification.TYPES.INFO,
        action: LocalNotification.ACTION_TYPES.NONE,
        id: null
    }) {
        const notification = new LocalNotification(message, options);
        notification.show();
    }
}

export default LocalNotification;