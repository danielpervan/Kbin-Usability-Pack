import './BookmarkHandler.scss';
import Bookmark from "./Bookmark";
import Settings from "../Settings";

class BookmarkHandler {
    static instance;
    bookmarks = [];
    static initialised = false;
    #menuButtonContainer;

    constructor() {
        this.loadBookmarks();
        if (!BookmarkHandler.instance) {
            BookmarkHandler.instance = this;
        }
    }

    static getInstance() {
        if (!BookmarkHandler.instance) {
            BookmarkHandler.instance = new BookmarkHandler();
            BookmarkHandler.instance.init();
        }
        return BookmarkHandler.instance;
    }

    init() {
        if (BookmarkHandler.initialised) {
            console.warn("BookmarkHandler already initialised")
            return;
        }
        BookmarkHandler.initialised = true;

        const settings = new Settings();
        if (!settings.get("enableBookmarks")) {
            return;
        }
        this.#menuButtonContainer = Object.assign(document.createElement('li'), {
            className: 'toolbar-bookmarks dropdown',
        });
        const menuButton = Object.assign(document.createElement('a'), {
            className: 'bookmark-menu-button',
            href: '#',
            innerHTML: '<i class="fa fa-bookmark"></i>',
        });

        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });

        this.#menuButtonContainer.appendChild(menuButton);
        const menu = document.querySelector('.kbin-container > menu');
        menu.insertBefore(this.#menuButtonContainer, menu.firstChild);

        /** Add mobile menu button **/
        const mobileMenu = document.querySelector('.options--top.mobile-close');
        const mobileMenuButton = Object.assign(document.createElement('button'), {
            className: 'mobile-bookmarks-button btn btn__secondary',
            innerHTML: '<i class="fa fa-bookmark"></i>',
        });
        mobileMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });
        mobileMenu.insertBefore(mobileMenuButton, mobileMenu.lastChild.previousSibling);

        const bookmarksMenu = Object.assign(document.createElement('ul'), {
            className: 'bookmarks-menu dropdown__menu',
        });
        this.#menuButtonContainer.appendChild(bookmarksMenu);

        /** Add menu modal */
        const modalBackground = Object.assign(document.createElement('div'), {
            className: 'modal-background',
        });
        modalBackground.addEventListener('click', (e) => {
            if (e.target === modalBackground) {
                e.preventDefault();
                this.closeMenu();
            }
        });
        const menuModal = Object.assign(document.createElement('div'), {
            className: 'modal modal-bookmarks',
            innerHTML: `
                <div class="modal-header">
                    <h2>Bookmarks</h2>
                    <a class="modal-close"><i class="fa fa-times"></i></a>
                </div>
                <div class="modal-content">
                    <ul class="bookmarks-menu"></ul>
                </div>
            `
        });
        const modalCloseButton = menuModal.querySelector('.modal-close');
        modalCloseButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeMenu();

        });

        document.body.appendChild(modalBackground);
        modalBackground.appendChild(menuModal);
        this.populateBookmarksMenu();

        window.addEventListener('hide-all-modals', () => {
            this.closeMenu();
        });
    }

    populateBookmarksMenu() {
        const bookmarksContent = document.querySelector('.modal-bookmarks .modal-content ul');
        const bookmarks = this.getBookmarks();
        bookmarksContent.innerHTML = '';
        if (bookmarks.length > 0) {
            bookmarks.forEach(bookmark => {
                const bookmarkElement = bookmark.getElement();
                const removeButton = bookmarkElement.querySelector('.bookmark-remove');
                removeButton.addEventListener('click', (e) => {
                    e.preventDefault();

                    bookmarkElement.classList.add('hide');
                    bookmarkElement.addEventListener('animationend', () => {
                        this.removeBookmark(bookmark);
                    });
                });
                bookmarksContent.appendChild(bookmarkElement);
            });
        } else {
            const bookmarkElement = Object.assign(document.createElement('li'), {
                className: 'bookmarks-menu-item placeholder',
                innerHTML: '<h3>No bookmarks</h3>'
            });
            bookmarksContent.appendChild(bookmarkElement);
        }
    }

    getBookmarks() {
        return this.bookmarks;
    }

    addBookmark(bookmark) {
        this.bookmarks.push(bookmark);
        localStorage.setItem('kup-bookmarks', JSON.stringify(this.bookmarks));
        this.populateBookmarksMenu();
        window.dispatchEvent(new CustomEvent('KUP-bookmark-changed', {
            detail: {
                bookmarked: true,
                articleUrl: bookmark.url,
                articleId: bookmark.articleId
            }
        }));
    }

    loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem('kup-bookmarks')) || [];

        bookmarks.forEach(bookmark => {
            this.bookmarks.push(new Bookmark(bookmark.title, bookmark.url, bookmark.articleId, bookmark.magazine, bookmark.instanceName));
        });
    }

    reloadBookmarks() {
        this.bookmarks = [];
        this.loadBookmarks();
        this.populateBookmarksMenu();
    }

    toggleMenu() {
        const modalBackground = document.querySelector('.modal-background');
        if (modalBackground.classList.contains('show')) {
            this.closeMenu();
        } else {
            this.showMenu();
        }
    }

    /**
     * Toggles the bookmark status of an article
     * @param {Article} article
     */
    toggleBookmark(article) {
        const bookmark = this.bookmarks.find(bookmark => bookmark.articleId === article.id);
        if (bookmark) {
            this.removeBookmark(bookmark);
            return false;
        } else {
            this.addBookmark(new Bookmark(article.subject, article.articleUrl, article.id, article.magazine, article.instanceName));
            return true;
        }
    }

    removeBookmark(bookmark) {
        this.bookmarks = this.bookmarks.filter(b => b.articleId !== bookmark.articleId);
        localStorage.setItem('kup-bookmarks', JSON.stringify(this.bookmarks));
        this.populateBookmarksMenu();
        window.dispatchEvent(new CustomEvent('KUP-bookmark-changed', {
            detail: {
                bookmarked: false,
                articleUrl: bookmark.url,
                articleId: bookmark.articleId
            }
        }));
    }

    isBookmarked(article) {
        return this.bookmarks.find(bookmark => bookmark.articleId === article.id);
    }

    closeMenu() {
        const modalBackground = document.querySelector('.modal-background');
        modalBackground.classList.remove('show');
    }

    showMenu() {
        window.dispatchEvent(new Event("hide-all-modals"));
        const modalBackground = document.querySelector('.modal-background');
        modalBackground.classList.add('show');
    }
}

export default BookmarkHandler;