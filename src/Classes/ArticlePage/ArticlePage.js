import Article from "../Article/Article";

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