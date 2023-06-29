import ArticlesHandler from "./Classes/ArticlesHandler/ArticlesHandler";
import Navigator from "./Classes/Navigator/Navigator";
import ArticlePage from "./Classes/ArticlePage/ArticlePage";
import SettingsPanel from "./Classes/SettingsPanel/SettingsPanel";

/** Do the stuff */
const articlesHandler = new ArticlesHandler();
const navigator = new Navigator();
const articlePage = new ArticlePage();
const settingsPanel = new SettingsPanel();
articlesHandler.init();
navigator.init();
articlePage.init();
settingsPanel.init();