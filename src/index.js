import ArticlesHandler from "./Classes/ArticlesHandler/ArticlesHandler";
import Navigator from "./Classes/Navigator/Navigator";
import ArticlePage from "./Classes/ArticlePage/ArticlePage";

/** Do the stuff */
const articlesHandler = new ArticlesHandler();
const navigator = new Navigator();
const articlePage = new ArticlePage();
articlesHandler.init();
navigator.init();
articlePage.init();