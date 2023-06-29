import Article from "../Article/Article";
import "./ArticlePage.scss";
import Settings from "../Settings";
class ArticlePage {
    currentPage = 1;
    numberOfPages = 1;

    constructor() {
    }

    init() {
        const currentURL = new URL(window.location.href);
        /** Abort if not an article page */
        /** m/[magazine]/t/[article] */
        if (!currentURL.pathname.match(/\/m\/.+?\/t\/.+?/)) {
            return;
        }

        this.url = currentURL;

        this.articleElement = document.querySelector("article.entry");
        this.article = Article.fromArticlePage(this.articleElement);
        this.article.enrichArticlePage();

        /** Add infinite scroll */
        const paginationElement = document.querySelector("nav.pagination.section");

        let currentPage = this.url.searchParams.get("p");
        if (currentPage) {
            this.currentPage = parseInt(currentPage);
        } else {
            this.currentPage = 1;
        }

        let numberOfPages = paginationElement?.querySelectorAll(".pagination__item:not(.pagination__item--next-page):not(.pagination__item--previous-page)");
        if (numberOfPages && numberOfPages[numberOfPages.length - 1]) {
            this.numberOfPages = parseInt(numberOfPages[numberOfPages.length - 1].textContent);
        } else {
            this.numberOfPages = this.currentPage;
        }
        if (paginationElement) {
            paginationElement.innerHTML = '';
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.handleInfiniteScroll();
                    }
                });
            });
            observer.observe(paginationElement);
        }

        /** Add keydown listener */
        document.addEventListener("keydown", (e) => {
            this.handleKeydown(e);
        });

        /** Add URL subheader */
        if (this.article.linkUrl) {
            const subheader = document.createElement("h3");
            subheader.classList.add("url-subheader");
            let url = new URL(this.article.linkUrl);
            let subheaderText = '<i class="fa fa-link"></i> <span class="url-subheader__host">' + url.hostname + '</span><span class="url-subheader__path">' + url.pathname + url.search + '</span>';
            subheader.innerHTML = `<a href="${this.article.linkUrl}" target="_blank">${subheaderText}</a>`;
            this.articleElement.querySelector("header").appendChild(subheader);
        }

        this.applySettings();

        /** Add settings listener */
        window.addEventListener("kup-settings-changed", () => {
            this.applySettings();
        });
    }
    handleInfiniteScroll() {
        if (this.numberOfPages > this.currentPage) {
            this.currentPage++;
            this.loadPage(this.currentPage).then((html) => {
                const dom = new DOMParser().parseFromString(html, 'text/html');
                const comments = dom.querySelectorAll("#comments section.comments > .comment");
                const paginationElement = document.querySelector("nav.pagination.section");
                comments.forEach((comment) => {
                    document.querySelector("#comments section.comments").insertBefore(comment, paginationElement);
                });
            });
        }
    }

    applySettings() {
        const settings = new Settings();
        if (settings.get("showUrlSubheader") === true) {
            document.body.classList.add("kup-show-url-subheader");
        } else {
            document.body.classList.remove("kup-show-url-subheader");
        }
    }

    handleKeydown(event) {
        /** If user is typing in a text field, don't handle keydown */
        if (event.target.tagName !== "BODY") {
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            this.article.togglePreviews();
        } else if (event.key === "a") {
            event.preventDefault();
            this.article.upvote();
        } else if (event.key === "z") {
            event.preventDefault();
            this.article.downvote();
        } else if (event.key === "b") {
            event.preventDefault();
            this.article.boost();
        } else if (event.key === "o") {
            if (this.article.linkUrl) {
                event.preventDefault();
                window.open(this.article.linkUrl, '_blank');
            }
        }
    }

    loadPage(page) {
        let url = this.url.pathname + '?p=' + page;
        return fetch(url).then((response) => {
            return response.text();
        });
    }
}

export default ArticlePage;