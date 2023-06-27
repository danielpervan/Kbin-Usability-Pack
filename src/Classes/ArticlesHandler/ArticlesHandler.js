import Article from "../Article/Article";

class ArticlesHandler {
    #articles;
    currentArticle;

    constructor() {
        this.#articles = [];
    }

    init() {
        if (!document.querySelector("#content>div article.entry")) {
            return;
        }
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
        const article = Article.fromFeedElement(element);
        article.enrichFeedElement();
        element.addEventListener("click", () => {
            this.selectArticle(article);
        });
        this.#articles.push(article);
    }

    parseArticles() {
        document.querySelectorAll("#content>div>article.entry").forEach((el) => {
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
        console.log("Selecting closest article");
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
        console.log("Keydown", event.key);
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
        }
    }
}

export default ArticlesHandler;