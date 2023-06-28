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

        /** Add infinite scroll */
        const paginationElement = document.querySelector("nav.pagination.section");

        let currentPage = this.url.searchParams.get("p");
        if (currentPage) {
            this.currentPage = parseInt(currentPage);
        } else {
            this.currentPage = 1;
        }

        let numberOfPages = paginationElement.querySelectorAll(".pagination__item:not(.pagination__item--next-page):not(.pagination__item--previous-page)");
        if (numberOfPages) {
            this.numberOfPages = parseInt(numberOfPages[numberOfPages.length - 1].textContent);
        } else {
            this.numberOfPages = this.currentPage;
        }

        paginationElement.innerHTML = '';

        if (paginationElement) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.handleInfiniteScroll();
                    }
                });
            });
            observer.observe(paginationElement);
        }
    }

    handleInfiniteScroll() {
        console.log("Infinite scroll", this.currentPage, this.numberOfPages);
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

    loadPage(page) {
        let url = this.url.pathname + '?p=' + page;
        return fetch(url).then((response) => {
            return response.text();
        });
    }
}

export default ArticlePage;