import Article from "../Article/Article";
import Settings from "../Settings";

class ArticlesHandler {
    #articles;
    currentArticle;
    showArticlePreview = false;

    constructor() {
        this.#articles = [];
    }

    init() {
        if (!document.querySelector("#content article.entry")) {
            return;
        }
        this.applySettings();
        window.addEventListener("kup-settings-changed", () => {
            this.applySettings();
        });
        this.parseArticles();
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.classList.contains("entry")) {
                            this.parseArticle(node);
                        }
                    });
                }
            });
        });
        observer.observe(document.querySelector("#content>div"), {
            childList: true,
        });
        document.addEventListener("keydown", (e) => {
            this.handleKeydown(e);
        });
    }

    parseArticle(element) {
        const settings = new Settings();
        const article = Article.fromFeedElement(element);
        article.enrichFeedElement();
        element.addEventListener("click", () => {
            this.selectArticle(article);
        });

        /** Show preview when element is in view */
        const showMediaPreview = element.classList.contains("show-preview");
        if (showMediaPreview || this.showArticlePreview) {
            const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        const timeout = element.autoPreviewTimeout;
                        if (timeout && !entry.isIntersecting) {
                            clearTimeout(timeout);
                            element.autoPreviewTimeout = null;
                        } else if (!timeout && entry.isIntersecting) {
                            element.autoPreviewTimeout = setTimeout(() => {
                                if (entry.isIntersecting) {
                                    if (showMediaPreview) {
                                        article.showMediaPreview();
                                    }
                                    if (this.showArticlePreview) {
                                        article.showArticlePreview();
                                    }
                                }
                            }, 1000);
                        }
                    });
                });
            observer.observe(element);
        }
        this.#articles.push(article);
    }

    parseArticles() {
        document.querySelectorAll("#middle:not(.page-entry-single) #content article.entry").forEach((el) => {
            this.parseArticle(el)
        });
    }

    selectArticle(article) {
        if (this.currentArticle) {
            this.currentArticle.unselect();
        }
        this.currentArticle = article;
        article.select();
    }

    unselectCurrentArticle() {
        if (this.currentArticle) {
            this.currentArticle.unselect();
            this.currentArticle = null;
        }
    }

    selectClosestArticle() {
        if (!this.currentArticle) {
            this.#articles.some((article) => {
                if (article.feedElement?.getBoundingClientRect().top > 0 && article.feedElement?.getBoundingClientRect().top < window.innerHeight) {
                    this.selectArticle(article);
                    return true;
                }
            });
        }
    }

    handleKeydown(event) {
        if (event.target.tagName !== "BODY") {
            return;
        }
        if (event.key === "Escape") {
            this.unselectCurrentArticle();
        } else if (event.key === "ArrowUp") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            const index = this.#articles.indexOf(this.currentArticle);
            if (index > 0) {
                this.selectArticle(this.#articles[index - 1]);
            }
            if (this.currentArticle.feedElement?.getBoundingClientRect().top < 0) {
                this.currentArticle.feedElement.scrollIntoView();
            }
        } else if (event.key === "ArrowDown") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            const index = this.#articles.indexOf(this.currentArticle);
            if (index < this.#articles.length - 1) {
                this.selectArticle(this.#articles[index + 1]);
            }
            if (this.currentArticle.feedElement?.getBoundingClientRect().top > window.innerHeight) {
                this.currentArticle.feedElement.scrollIntoView(false);
            }
        } else if (event.key === "Enter") {
            if (!this.currentArticle) {
                this.selectClosestArticle();
            } else {
                event.preventDefault();
                this.currentArticle.togglePreviews();
            }

        } else if (event.key === "a") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            this.currentArticle.upvote();
        } else if (event.key === "z") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            this.currentArticle.downvote();
        } else if (event.key === "b") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            this.currentArticle.boost();
        } else if (event.key === "o") {
            if (!this.currentArticle) {
                return;
            }
            event.preventDefault();
            window.location.href = this.currentArticle.articleUrl;
        }
    }

    applySettings() {
        const settings = new Settings();
        if (settings.get("showArticlePreview")) {
            document.body.classList.add("kup-show-article-preview");
        } else {
            document.body.classList.remove("kup-show-article-preview");
            this.#articles.forEach((article) => {
                article.hideArticlePreview();
            });
        }

        this.showArticlePreview = settings.get("autoArticlePreview");

    }
}

export default ArticlesHandler;