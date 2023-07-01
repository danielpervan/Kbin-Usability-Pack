import ArticlesHandler from "./Classes/ArticlesHandler/ArticlesHandler";
import Navigator from "./Classes/Navigator/Navigator";
import ArticlePage from "./Classes/ArticlePage/ArticlePage";
import SettingsPanel from "./Classes/SettingsPanel/SettingsPanel";
import Settings from "./Classes/Settings";
import {isNewKbinVersion} from "./Utils/utils";

/** Do the stuff */
document.body.classList.add("KUP-injected");
document.KUP = {}

/** Detect version */
if (!isNewKbinVersion()) {
    document.body.classList.add("old-version");
}

const articlesHandler = new ArticlesHandler();
const navigator = new Navigator();
const articlePage = new ArticlePage();
const settingsPanel = new SettingsPanel();
const settings = new Settings();
articlesHandler.init();
navigator.init();
articlePage.init();
settingsPanel.init();
settings.apply();