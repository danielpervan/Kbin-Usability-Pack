import ArticlesHandler from "./Classes/ArticlesHandler/ArticlesHandler";
import Navigator from "./Classes/Navigator/Navigator";
import ArticlePage from "./Classes/ArticlePage/ArticlePage";
import SettingsPanel from "./Classes/SettingsPanel/SettingsPanel";
import Settings from "./Classes/Settings";
import {isNewKbinVersion} from "./Utils/utils";
import LocalNotification from "./Classes/Notification/LocalNotification";

/** Do the stuff */
if (!document.body.classList.contains("KUP-injected")) {
    console.warn("Kbin Usability Pack is already injected");
    document.body.classList.add("KUP-injected");
    document.KUP = {}

    document.KUP.LocalNotification = LocalNotification;

    /** Detect version */
    if (!isNewKbinVersion()) {
        document.body.classList.add("old-version");
    }

    const articlesHandler = new ArticlesHandler();
    const navigator = new Navigator();
    const articlePage = new ArticlePage();
    const settingsPanel = new SettingsPanel();
    const settings = new Settings();

    if (!settings.get("installedVersion")) {
        const notification = new LocalNotification("Kbin Usability Pack installed", {
            type: LocalNotification.TYPES.SUCCESS,
            action: LocalNotification.ACTION_TYPES.NONE,
        });
        notification.show();
        settings.save("installedVersion", GM_info.script.version);
    } else if (settings.get("installedVersion") !== GM_info.script.version) {
        const notification = new LocalNotification("Kbin Usability Pack updated to version " + GM_info.script.version, {
            type: LocalNotification.TYPES.SUCCESS,
            action: LocalNotification.ACTION_TYPES.NONE,
        });
        notification.show();
        settings.save("installedVersion", GM_info.script.version);
    }
    articlesHandler.init();
    navigator.init();
    articlePage.init();
    settingsPanel.init();
    settings.apply();
}