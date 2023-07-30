import User from "../User/User";
import Settings from "../Settings";
import {isNewKbinVersion} from "../../Utils/utils";
import LocalNotification from "../Notification/LocalNotification";
import BookmarkHandler from "../Bookmark/BookmarkHandler";

const settings = new Settings();
import("./Article.scss");
if (settings.get("alternativeMobileUI")) {
    import("./Article_alt_ui.scss");
} else {
    import("./Article_standard_ui.scss");
}


class Article {
    feedElement = null;
    subject = null;
    author = null;
    date = null;
    articleUrl = null;
    mediaUrl = null;
    magazine = null;
    linkUrl = null;
    instanceName = null;
    id = null;

    hasMedia = false;
    articlePreviewOpen = false;
    mediaPreviewOpen = false;

    TYPES = {
        ARTICLE: "article",
        LINK: "link",
        IMAGE: "image"
    }
    #content;
    #articleLoaded;
    articlePageElement;
    enableArticlePreview = true;

    constructor() {
        window.addEventListener("kup-settings-changed", () => {
            this.applySettings();
        });
    }

    static fromFeedElement(element) {
        let article = new Article();
        article.feedElement = element;
        article.subject = element.querySelector("header h2 a").innerText;
        article.author = new User(element.querySelector(".meta .user-inline").innerText, element.querySelector(".meta .user-inline img")?.src);
        article.date = new Date(element.querySelector(".meta.entry__meta time")?.innerText);
        article.articleUrl = element.querySelector("header h2 a")?.href;
        article.thumbUrl = element.querySelector("figure a img")?.src;
        article.mediaUrl = element.querySelector("button.show-preview")?.dataset?.previewUrlParam;
        const magMatch = article.articleUrl.match(/\/m\/(.*?)[\/]?(@(.*?))?\//);
        article.magazine = magMatch?.[1];
        article.instanceName = magMatch?.[3];
        article.shortDescription = element.querySelector(".content.short-desc")?.innerText?.trim();
        article.id = element.id;
        const upvoteElement = element.querySelector("aside.vote .vote__up");
        const downvoteElement = element.querySelector("aside.vote .vote__down");
        article.upvotes = parseInt(upvoteElement?.querySelector("span")?.innerText) || 0;
        article.downvotes = parseInt(downvoteElement?.querySelector("span")?.innerText) || 0;

        if (article.feedElement.querySelector("li.meta-link")) {
            article.type = article.TYPES.ARTICLE;
        } else if (article.feedElement.querySelector("li>button.show-preview")) {
            article.type = article.TYPES.IMAGE;
        } else {
            article.type = article.TYPES.LINK;
        }
        return article;
    }

    upvote() {
        const element = this.feedElement ?? this.articlePageElement;
        if (!element) {
            return;
        }
        const voteElement = element.querySelector("aside.vote .vote__up button");
        if (voteElement) {
            voteElement.click();
            this.upvotes++;
        }
    }

    downvote() {
        const element = this.feedElement ?? this.articlePageElement;
        if (!element) {
            return;
        }
        const voteElement = element.querySelector("aside.vote .vote__down button");
        if (voteElement) {
            voteElement.click();
            this.upvotes--;
        }
    }

    boost() {
        const element = this.feedElement ?? this.articlePageElement;
        if (!element) {
            return;
        }
        const boostElement = element.querySelector("footer menu li form button");
        if (boostElement && boostElement.dataset.action === "subject#favourite") {
            boostElement.click();
        }
    }

    loadArticle() {
        if (this.#articleLoaded) {
            return Promise.resolve(this);
        }
        const fetchOptions = {
            method: "GET",
            headers: {
                "Accept": "text/html"
            }
        }
        return fetch(this.articleUrl, fetchOptions).then(response => {
            return response.text();
        }).then(text => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(text, "text/html");
            const contentElement = htmlDocument.querySelector("article .entry__body .content");
            this.#content = contentElement?.innerHTML ?? null
            const linkElement = htmlDocument.querySelector("article header h1 a");
            if (linkElement) {
                this.linkUrl = linkElement.href;
            } else {
                this.linkUrl = null;
            }
            this.#articleLoaded = true;
            return this;
        });
    }

    static fromArticlePage(articleElement) {
        let article = new Article();
        article.subject = articleElement.querySelector("header h1 a")?.firstChild?.textContent?.trim() || articleElement.querySelector("header h1")?.firstChild?.textContent?.trim();
        article.author = new User(articleElement.querySelector(".meta .user-inline").innerText, articleElement.querySelector(".meta .user-inline img")?.src);
        article.date = new Date(articleElement.querySelector(".meta.entry__meta time")?.innerText);
        article.linkUrl = articleElement.querySelector("header h1>a")?.href;
        article.thumbUrl = articleElement.querySelector("figure a img")?.src;
        article.mediaUrl = articleElement.querySelector("footer button.show-preview")?.dataset?.previewUrlParam ?? articleElement.querySelector("button.show-preview")?.dataset?.previewUrlParam
        article.articleUrl = window.location.pathname;
        const magMatch = article.articleUrl.match(/\/m\/(.*?)[\/]?(@(.*?))?\//);
        article.magazine = magMatch?.[1];
        article.instanceName = magMatch?.[3];
        article.#content = articleElement.querySelector(".entry__body .content")?.innerHTML ?? null;
        const upvoteElement = articleElement.querySelector("aside.vote .vote__up");
        const downvoteElement = articleElement.querySelector("aside.vote .vote__down");
        article.upvotes = parseInt(upvoteElement?.querySelector("span")?.innerText) || 0;
        article.downvotes = parseInt(downvoteElement?.querySelector("span")?.innerText) || 0;
        article.id = articleElement.id;
        article.enableArticlePreview = false;

        article.#articleLoaded = true;
        article.articlePageElement = articleElement;

        if (articleElement.querySelector("li.meta-link")) {
            article.type = article.TYPES.ARTICLE;
        } else if (articleElement.querySelector("li>button.show-preview")) {
            article.type = article.TYPES.IMAGE;
        } else {
            article.type = article.TYPES.LINK;
        }
        return article;
    }

    getContent() {
        if (!this.shortDescription) {
            this.#content = null;
            return Promise.resolve(this.#content);
        }
        return this.loadArticle().then(() => {
            return this.#content;
        });
    }

    hasContent() {
        return !!this.shortDescription || !!this.#content;
    }

    enrichFeedElement() {
        if (!this.feedElement) {
            return;
        }
        const settings = new Settings();
        const footer = this.feedElement.querySelector("footer");
        const footerMenu = footer.querySelector("menu");

        const previewOuter = Object.assign(document.createElement("div"), {
            className: "preview-outer"
        });
        this.feedElement.append(previewOuter);

        /** Replace media preview */
        this.replaceMediaPreview(this.feedElement);
        /** Add article preview button */
        if (this.hasContent()) {
            if (this.type === this.TYPES.ARTICLE) {
                /** Remove article icon */
                footer.querySelector("li.meta-link i")?.remove();
            }
            const previewButton = document.createElement("button");
            previewButton.classList.add("show-article-preview", "preview-button");
            previewButton.innerHTML = '<i class="fas fa-newspaper"></i>';
            previewButton.addEventListener("click", (event) => {
                event.preventDefault();
                this.toggleArticlePreview();
            });
            let metaLinkElement = footer.querySelector("li.meta-link");
            if (!metaLinkElement) {
                metaLinkElement = document.createElement("li");
                metaLinkElement.classList.add("meta-link");
                footerMenu.insertBefore(metaLinkElement, footerMenu.firstChild);
            }
            metaLinkElement.append(previewButton);

            /** Add preview elements */
            let previewElement = this.feedElement.querySelector(".article-preview");
            let previewContentElement;
            if (!previewElement) {
                previewElement = document.createElement("div");
                previewElement.classList.add("article-preview", "preview-inner");
                previewContentElement = document.createElement("div");
                previewContentElement.classList.add("article-preview-content", "content");
                previewElement.append(previewContentElement);
                previewOuter.append(previewElement);
            }
        }

        /** Remove comment anchor */
        const commentLinkElement = footer.querySelector("menu li [data-subject-target='commentsCounter']")?.parentElement;

        /** Open article in new tab */
        const articleLinkElement = this.feedElement.querySelector("header h2 a");
        if (articleLinkElement) {
            if (settings.get("openArticleInNewTab")) {
                articleLinkElement.target = "_blank";
            } else {
                articleLinkElement.removeAttribute("target");
            }
        }
        if (commentLinkElement) {
            if (settings.get("openArticleInNewTab")) {
                commentLinkElement.target = "_blank";
            } else {
                commentLinkElement.removeAttribute("target");
            }
        }
    }

    removeBookmark() {
        this.bookmarkButton.classList.remove("bookmarked");
    }

    addBookmark() {
        this.bookmarkButton.classList.add("bookmarked");
    }

    toggleBookmark() {
        if (this.bookmarkButton.classList.contains("bookmarked")) {
            this.removeBookmark();
        } else {
            this.addBookmark();
        }
    }

    replaceMediaPreview(parent) {
        const footer = parent.querySelector("footer");
        const mediaPreviewButton = footer.querySelector("button.show-preview");
        const previewOuter = parent.querySelector(".preview-outer");
        const footerMenu = footer.querySelector("menu");
        if (mediaPreviewButton && mediaPreviewButton.dataset.action === "preview#show") {
            this.hasMedia = true
            mediaPreviewButton.parentElement.remove();
            const newMediaPreviewButton = document.createElement("button");
            newMediaPreviewButton.classList.add("show-media-preview", "preview-button");
            newMediaPreviewButton.innerHTML = '<i class="fas fa-photo-film"></i>';
            newMediaPreviewButton.addEventListener("click", (event) => {
                event.preventDefault();
                this.toggleMediaPreview();
            });
            const li = document.createElement("li");
            li.className = "media-preview-li";
            li.append(newMediaPreviewButton);
            footer.querySelector("menu").insertBefore(li, footerMenu.firstChild);
            /** Add preview elements */
            let previewElement = parent.querySelector(".media-preview");
            if (!previewElement) {
                previewElement = document.createElement("div");
                previewElement.classList.add("media-preview", "preview-inner");
                const previewContentElement = document.createElement("div");
                previewContentElement.classList.add("media-preview-content");
                previewElement.append(previewContentElement);
                previewOuter.append(previewElement);
            }
        }
        this.enrichElement();
    }

    enrichArticlePage() {
        if (!this.articlePageElement) {
            return;
        }
        const previewOuter = Object.assign(document.createElement("div"), {
            className: "preview-outer"
        });
        this.articlePageElement.append(previewOuter);
        this.replaceMediaPreview(this.articlePageElement);

        const settings = new Settings();
        if (settings.get("alternativeMobileUI")) {
            this.showMediaPreview();
        }
    }


    showArticlePreview() {
        if (!this.feedElement || !this.type === this.TYPES.ARTICLE || !this.hasContent()) {
            return;
        }
        this.articlePreviewOpen = true;
        let previewElement = this.feedElement.querySelector(".article-preview");
        let previewContentElement = previewElement.querySelector(".article-preview-content");
        previewElement.classList.add("show");
        previewContentElement.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
        previewContentElement.classList.remove("loaded");
        this.getContent().then(content => {
            if (content) {
                previewContentElement.innerHTML = content ?? "";
            } else {
                previewContentElement.innerHTML = '<div class="no-content"><i class="fas fa-exclamation-triangle"></i> No content</div>';
            }
            previewContentElement.classList.add("loaded");
        }).catch(() => {
            previewContentElement.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading content</div>';
            previewContentElement.classList.add("loaded");
        });
    }

    hideArticlePreview() {
        if (!this.feedElement || !this.type === this.TYPES.ARTICLE) {
            return;
        }
        this.articlePreviewOpen = false;
        let previewElement = this.feedElement.querySelector(".article-preview");
        if (previewElement) {
            previewElement.classList.remove("show");
        }
    }

    toggleArticlePreview() {
        if (this.articlePreviewOpen) {
            this.hideArticlePreview();
        } else {
            this.showArticlePreview();
        }
    }

    showMediaPreview() {
        let element = this.feedElement ?? this.articlePageElement;
        if (!element || !this.hasMedia || this.mediaPreviewOpen) {
            return;
        }
        this.mediaPreviewOpen = true;
        let previewElement = element.querySelector(".media-preview");
        let previewContentElement = previewElement.querySelector(".media-preview-content");

        previewElement.classList.add("show");
        previewContentElement.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
        previewContentElement.classList.remove("loaded");
        const mediaURLObject = new URL(this.mediaUrl);
        /** if media is an image */

        if (this.mediaUrl.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null) {
            const imageElement = document.createElement("img");
            imageElement.addEventListener("load", () => {
                previewContentElement.innerHTML = "";
                previewContentElement.append(imageElement);
                previewContentElement.classList.add("loaded");
            });
            imageElement.src = this.mediaUrl;
            imageElement.addEventListener("error", () => {
                previewContentElement.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading image</div>';
                previewContentElement.classList.add("loaded");
            });
            imageElement.addEventListener("dragstart", (event) => {
                event.preventDefault();
            });

            imageElement.addEventListener("mousedown", (event) => {
                this.handleMediaPreviewResizeDrag(event, imageElement, "start");
            });
            document.body.addEventListener("mouseup", (event) => {
                this.handleMediaPreviewResizeDrag(event, imageElement, "end");
            });

            element.addEventListener("mousemove", (event) => {
                this.handleMediaPreviewResizeDrag(event, imageElement, "move");
            });
        } else if (mediaURLObject.hostname === "www.youtube.com" || mediaURLObject.hostname === "youtube.com" || mediaURLObject.hostname === "youtu.be") {
            /** if media is YouTube */
            const videoElement = document.createElement("iframe");
            let videoSrc = "https://www.youtube.com/embed/";
            if (mediaURLObject.hostname === "youtu.be") {
                videoSrc += mediaURLObject.pathname.substring(1);
            } else {
                videoSrc += mediaURLObject.searchParams.get("v");
            }
            videoElement.src = videoSrc;
            videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            videoElement.allowFullscreen = true;
            previewContentElement.innerHTML = "";
            previewContentElement.append(videoElement);
            previewContentElement.classList.add("youtube-embed");
            previewContentElement.classList.add("loaded");
        } else {
            /** load with default embed loader */
            let url = "/ajax/fetch_embed?url=" + encodeURIComponent(this.mediaUrl);
            fetch(url).then(response => response.json().then(data => {
                previewContentElement.innerHTML = "";
                previewContentElement.insertAdjacentHTML("beforeend", data.html)
                const scripts = previewContentElement.querySelectorAll("script");
                scripts.forEach(script => {
                    const newScript = document.createElement("script");
                    newScript.src = script.src;
                    newScript.innerHTML = script.innerHTML;
                    script.replaceWith(newScript);
                });
                previewContentElement.classList.add("loaded");
            })).catch(() => {
                previewContentElement.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading media</div>';
                previewContentElement.classList.add("loaded");
            });
        }
    }

    enrichElement() {
        const settings = new Settings();
        const articleElement = this.feedElement || this.articlePageElement;
        const commentsLinkElement = articleElement.querySelector("footer menu li > a.stretched-link");

        /** Remove comment anchor */
        if (settings.get("removeCommentAnchor") && this.feedElement) {
            if (commentsLinkElement?.href.endsWith("#comments")) {
                const url = new URL(commentsLinkElement?.href);
                commentsLinkElement.href = url.pathname;
            }
        }

        if (settings.get("alternativeMobileUI")) {
            /** Replace comments link */
            const commentsCount = parseInt(commentsLinkElement.querySelector("[data-subject-target='commentsCounter']").innerText);
            const commentsLi = commentsLinkElement?.parentElement;
            const commentsURL = commentsLinkElement?.href;
            commentsLinkElement.remove();
            const newCommentsLinkElement = document.createElement("a");
            newCommentsLinkElement.className = "comments-link footer-button";
            newCommentsLinkElement.href = commentsURL;
            if (settings.get("openArticleInNewTab")) {
                newCommentsLinkElement.target = "_blank";
            }

            newCommentsLinkElement.innerHTML = `<i class="fas fa-comments"></i> ${commentsCount}`;
            commentsLi.append(newCommentsLinkElement);

            /** Replace boost link */
            const boostLinkElement = articleElement.querySelector("footer menu li button[data-action='subject#favourite']");
            const boostLi = boostLinkElement?.parentElement.parentElement;
            const newBoostLinkElement = document.createElement("a");
            const boostCounter = parseInt(boostLinkElement.querySelector("[data-subject-target='upvoteCounter']")?.innerText.match(/\d+/)[0]);
            const boostForm = boostLinkElement.parentElement;
            newBoostLinkElement.className = "boost-link footer-button";
            newBoostLinkElement.href = "#"
            newBoostLinkElement.addEventListener("click", (event) => {
                event.preventDefault();
                boostForm.querySelector("button[type='submit']").click();
            });
            if (boostForm.querySelector("button[type='submit']").classList.contains("active")) {
                newBoostLinkElement.classList.add("active");
            }

            /** Observe boost counter */
            const boostCounterObserver = new MutationObserver((mutations) => {
                mutations.forEach(() => {
                    const boostCounterElement = newBoostLinkElement.querySelector(".boost-counter");
                    if (boostCounterElement) {
                        boostCounterElement.innerText = boostForm.querySelector("[data-subject-target='upvoteCounter']")?.innerHTML?.trim().match(/\d+/)[0] || '';
                    }
                    if (boostForm.querySelector("button[type='submit']").classList.contains("active")) {
                        newBoostLinkElement.classList.add("active");
                    } else {
                        newBoostLinkElement.classList.remove("active");
                    }
                });
            });
            boostCounterObserver.observe(boostForm, {
                childList: true
            });
            newBoostLinkElement.innerHTML = `<i class="fas fa-rocket"></i> <span class="boost-counter">${boostCounter}</span>`;
            boostForm.classList.add("boost-link-removed");
            boostLi.append(newBoostLinkElement);

            /** Replace more link */
            const moreLinkElement = articleElement.querySelector("footer menu li button[data-subject-target='more']");
            moreLinkElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
            moreLinkElement.classList.add("more-link", "footer-button");

            /** Enrich meta */
            const metaEl = articleElement.querySelector("aside.meta");
            if (metaEl && settings.get("showInstanceName")) {
                const magEl = metaEl.querySelector(".magazine-inline");

                if (magEl) {
                    const magImgEl = magEl.querySelector("img");
                    const magName = magEl.innerText;

                    /** Check if mag name has already been replaced */
                    if (!magName.match(/.*@.+\..+/)) {
                        magEl.innerHTML = "";
                        if (magImgEl) {
                            magEl.append(magImgEl);
                        }

                        const magNameEl = document.createElement("span");
                        magNameEl.className = "mag-name";
                        magNameEl.innerText = magName;
                        magEl.append(magNameEl);

                        const magInstanceName = magEl.href.match(/\/m\/.*@(.*)/)
                        if (magInstanceName && !window.location.hostname.endsWith(magInstanceName[1])) {
                            const magInstanceEl = document.createElement("span");
                            magInstanceEl.className = "mag-instance";
                            magInstanceEl.innerText = "@" + magInstanceName[1];
                            magEl.append(magInstanceEl);
                        }
                    } else {
                        console.warn("Magazine name already modified. Are you using multiple scripts?");
                        const notification = new LocalNotification("Can't show instance name because magazine name already modified. Are you using multiple scripts?", {
                            type: LocalNotification.TYPES.WARNING,
                            action: {
                                text: "Disable setting",
                                callback: () => {
                                    settings.save("showInstanceName", false);
                                }
                            },
                            id: "showInstanceName-already-modified-warning"
                        });
                        notification.show();
                    }
                }
            }

            if (settings.get("alternativeMobileUI")) {
                if (metaEl) {
                    const userEl = metaEl.querySelector(".user-inline");
                    const magazineEl = metaEl.querySelector(".magazine-inline");
                    const timeEl = metaEl.querySelector("time");
                    metaEl.classList.add("alternative-mobile-ui");

                    const newMetaContent = Object.assign(document.createElement("div"), {
                        className: "meta-content"
                    });
                    if (userEl) {
                        userEl.classList.add("meta-item");
                        newMetaContent.append(userEl);
                    }
                    if (magazineEl) {
                        magazineEl.classList.add("meta-item");
                        newMetaContent.append(magazineEl);
                    }
                    if (timeEl) {
                        const timeOuter = Object.assign(document.createElement("div"), {
                            className: "time-outer meta-item",
                            innerHTML: '<span class="meta-icon"><i class="fas fa-clock"></i> </span>'
                        });
                        timeOuter.append(timeEl);
                        newMetaContent.append(timeOuter);
                    }
                    metaEl.innerHTML = "";
                    metaEl.append(newMetaContent);
                }
            }
        }

        /** Fix thumbnail */
        const thumbnailFigure = articleElement.querySelector("figure");
        const thumbnail = thumbnailFigure?.querySelector("a img");
        if (thumbnail) {
            thumbnail.style.objectFit = null;
            if (settings.get("alternativeMobileUI") && !isNewKbinVersion()) {
                thumbnailFigure.style.backgroundImage = "url(" + thumbnail.src + ")";
            }
        }

        /** Add bookmark button */
        if (settings.get("enableBookmarks")) {
            const footer = articleElement.querySelector("footer");
            const footerMenu = footer.querySelector("menu");
            const bookmarkHandler = BookmarkHandler.getInstance();

            const bookmarkButton = document.createElement("button");
            bookmarkButton.classList.add("bookmark-button");
            bookmarkButton.innerHTML = '<i class="fas fa-bookmark"></i>';
            bookmarkButton.addEventListener("click", (event) => {
                event.preventDefault();
                bookmarkHandler.toggleBookmark(this);
            });

            if (bookmarkHandler.isBookmarked(this)) {
                bookmarkButton.classList.add("bookmarked");
            }
            this.bookmarkButton = bookmarkButton;

            const bookmarkLi = document.createElement("li");
            bookmarkLi.classList.add("bookmark-li");
            bookmarkLi.append(bookmarkButton);
            footerMenu.insertBefore(bookmarkLi, footerMenu.querySelector(".dropdown"));

            window.addEventListener("KUP-bookmark-changed", (event) => {
                if (event.detail.articleId === this.id) {
                    if (event.detail.bookmarked) {
                        this.addBookmark();
                    } else {
                        this.removeBookmark();
                    }
                }
            });
        }


        this.applySettings();
    }

    hideMediaPreview() {
        const element = this.feedElement ?? this.articlePageElement;
        if (!element) {
            return;
        }
        this.mediaPreviewOpen = false;
        let previewElement = element.querySelector(".media-preview");
        if (previewElement) {
            previewElement.classList.remove("show");
            previewElement.querySelector(".media-preview-content").innerHTML = "";
        }
    }

    toggleMediaPreview() {
        if (this.mediaPreviewOpen) {
            this.hideMediaPreview();
        } else {
            this.showMediaPreview();
        }
    }

    select() {
        this.selected = true;
        this.feedElement.classList.add("selected");
    }

    unselect() {
        this.selected = false;
        this.feedElement.classList.remove("selected");
    }

    /** Resize media preview on drag */
    #isDraggingMediaPreview = false;

    handleMediaPreviewResizeDrag(event, imageElement) {
        if (event.type === "mousedown") {
            this.#isDraggingMediaPreview = true;
        } else if (event.type === "mouseup") {
            this.#isDraggingMediaPreview = false;
        } else if (event.type === "mousemove" && this.#isDraggingMediaPreview) {
            let imageRect = imageElement.getBoundingClientRect();
            imageElement.style.width = (imageRect.width + event.movementX * 2) + "px";
            if (imageRect.width <= 100 && !imageElement.classList.contains("animateMinResize")) {
                imageElement.classList.add("animateMinResize");
            } else if (imageRect.width > 110) {
                imageElement.classList.remove("animateMinResize");
            }
        }
    }

    togglePreviews() {
        if (!this.articlePreviewOpen && this.enableArticlePreview && this.hasContent()) {
            this.showArticlePreview();
        } else if (!this.mediaPreviewOpen && this.hasMedia) {
            this.showMediaPreview();
        } else {
            this.hideArticlePreview();
            this.hideMediaPreview();
        }
    }

    applySettings() {
        const settings = new Settings();
        const element = this.feedElement ?? this.articlePageElement;

        if (!this.hasMedia) {
            element.classList.add("no-media-preview");
        }
        if (settings.get("alternativeMobileUI") === true) {
            if (this.articlePageElement) {
                this.showMediaPreview();
            } else if (this.feedElement) {
                if (settings.get("openArticleInNewTab")) {
                    this.feedElement.querySelector(".comments-link").target = "_blank";
                    this.feedElement.querySelector("header a").target = "_blank";
                } else {
                    this.feedElement.querySelector(".comments-link").removeAttribute("target");
                    this.feedElement.querySelector("header a").removeAttribute("target");
                }
            }
        } else {
            if (this.feedElement) {
                const commentsLink = this.feedElement.querySelector("footer menu li [data-subject-target='commentsCounter']").parentElement;
                if (settings.get("openArticleInNewTab")) {
                    commentsLink.target = "_blank";
                    this.feedElement.querySelector("header a").target = "_blank";
                } else {
                    commentsLink.removeAttribute("target");
                    this.feedElement.querySelector("header a").removeAttribute("target");
                }
            }
        }
    }
}

export default Article;