(() => {
  // src/Classes/User/User.js
  var User = class {
    username;
    avatar;
    constructor(username, avatar = null) {
      this.username = username;
      this.avatar = avatar;
    }
  };
  var User_default = User;

  // style-helper:index.js
  function inject_style(text) {
    if (typeof document !== "undefined") {
      var style = document.createElement("style");
      var node = document.createTextNode(text);
      style.appendChild(node);
      document.head.appendChild(style);
    }
  }

  // src/Classes/Article/Article.scss
  inject_style('#content article.entry aside.meta.entry__meta{line-height:3.5em}#content article.entry aside.meta.entry__meta img{margin-right:.25em;margin-left:.25em}#content article.entry .magazine-inline{white-space:nowrap}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"}#content article.entry:not(.no-image){grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important;grid-template-columns:min-content min-content auto}#content article.entry.selected{border:var(--kbin-meta-border)}#content article.entry>figure{margin:0;margin-right:1rem;align-self:center}#content article.entry>figure img{max-width:220px;max-height:145px;object-fit:contain}#content article.entry aside.vote{place-content:center}#content article.entry button.show-preview,#content article.entry button.preview-button{border:1px solid var(--kbin-section-text-color);padding:.5em;background:var(--kbin-bg)}main#main.view-compact article.entry{grid-template-areas:"vote image title" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important}main#main.view-compact article.entry.no-image{grid-template-areas:"vote title" "vote meta" "vote footer" "body body" "preview preview"!important}main#main.view-compact article.entry figure{margin-right:1rem}main#main.view-compact article.entry figure img{max-height:100px;max-width:120px}@media (max-width: 689.98px){main#main.view-compact article.entry{grid-template-areas:"image vote" "title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}main#main.view-compact article.entry figure img{object-fit:contain}main#main.view-compact article.entry.no-image{grid-template-areas:"title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}}@media (max-width: 991.98px){#content article.entry:not(.no-image){grid-template-areas:"vote image image" "vote title title" "vote shortDesc shortDesc" "vote meta meta" "vote footer footer" "body body body" "preview preview preview"!important}}@media (max-width: 689.98px){#content article.entry:not(.no-image){grid-template-areas:"vote image" "title title" "shortDesc shortDesc" "meta meta" "footer footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry>figure{margin:0}#content article.entry aside.vote{place-self:center}}.preview-outer{grid-area:preview}.preview-outer .preview-inner{position:relative;display:none;border-top:var(--kbin-meta-border);padding:1em}.preview-outer .preview-inner.show{display:block}.preview-outer .preview-inner .loading{position:relative;height:3em;z-index:1;display:flex;justify-content:center;align-items:center;animation:showPreviewLoading .25s ease-in-out}.preview-outer .preview-inner .article-preview-content{position:relative}.preview-outer .preview-inner .article-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}.preview-outer .preview-inner .media-preview-content{position:relative}.preview-outer .preview-inner .media-preview-content img{max-width:100%;max-height:100%;min-width:100px;object-fit:contain}.preview-outer .preview-inner .media-preview-content img.animateMinResize{animation:animateMinResize .25s ease-out;transform-origin:left top}@keyframes animateMinResize{0%{opacity:1;transform:scale(1)}33%{opacity:.8;transform:scale(.95)}66%{opacity:1;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}.preview-outer .preview-inner .media-preview-content.oembed-embed{position:relative;overflow:hidden;max-width:100%;height:100vh;margin:0 auto}.preview-outer .preview-inner .media-preview-content.oembed-embed iframe{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.youtube-embed{position:relative;overflow:hidden;max-width:100%;max-height:100vh;margin:0 auto;aspect-ratio:16/9}.preview-outer .preview-inner .media-preview-content.youtube-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}@keyframes showPreviewLoading{0%{opacity:0;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes articlePreviewFadeIn{0%{opacity:0;transform:translateY(-.5em)}to{opacity:1}}');

  // src/Classes/Article/Article.js
  var Article = class _Article {
    feedElement = null;
    subject = null;
    author = null;
    date = null;
    articleUrl = null;
    mediaUrl = null;
    magazine = null;
    linkUrl = null;
    hasMedia = false;
    articlePreviewOpen = false;
    mediaPreviewOpen = false;
    TYPES = {
      ARTICLE: "article",
      LINK: "link",
      IMAGE: "image"
    };
    #content;
    #articleLoaded;
    articlePageElement;
    enableArticlePreview = true;
    constructor() {
    }
    static fromFeedElement(element) {
      let article = new _Article();
      article.feedElement = element;
      article.subject = element.querySelector("header h2").innerText;
      article.author = new User_default(element.querySelector(".meta .user-inline").innerText, element.querySelector(".meta .user-inline img")?.src);
      article.date = new Date(element.querySelector(".meta.entry__meta time")?.innerText);
      article.articleUrl = element.querySelector("header h2 a")?.href;
      article.thumbUrl = element.querySelector("figure a img")?.src;
      article.mediaUrl = element.querySelector("button.show-preview")?.dataset?.previewUrlParam;
      article.magazine = element.querySelector(".meta.entry__meta .magazine-inline")?.innerText;
      article.shortDescription = element.querySelector(".content.short-desc")?.innerText?.trim();
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
      };
      return fetch(this.articleUrl, fetchOptions).then((response) => {
        return response.text();
      }).then((text) => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(text, "text/html");
        const contentElement = htmlDocument.querySelector("article .entry__body .content");
        this.#content = contentElement?.innerHTML ?? null;
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
      let article = new _Article();
      article.subject = articleElement.querySelector("header h1")?.childNodes[0]?.textContent?.trim();
      article.author = new User_default(articleElement.querySelector(".meta .user-inline").innerText, articleElement.querySelector(".meta .user-inline img")?.src);
      article.date = new Date(articleElement.querySelector(".meta.entry__meta time")?.innerText);
      article.linkUrl = articleElement.querySelector("header h1>a")?.href;
      article.thumbUrl = articleElement.querySelector("figure a img")?.src;
      article.mediaUrl = articleElement.querySelector("button.show-preview")?.dataset?.previewUrlParam;
      article.magazine = articleElement.querySelector(".meta.entry__meta .magazine-inline")?.innerText;
      article.#content = articleElement.querySelector(".entry__body .content")?.innerHTML ?? null;
      const upvoteElement = articleElement.querySelector("aside.vote .vote__up");
      const downvoteElement = articleElement.querySelector("aside.vote .vote__down");
      article.upvotes = parseInt(upvoteElement?.querySelector("span")?.innerText) || 0;
      article.downvotes = parseInt(downvoteElement?.querySelector("span")?.innerText) || 0;
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
      const footer = this.feedElement.querySelector("footer");
      const footerMenu = footer.querySelector("menu");
      const previewOuter = Object.assign(document.createElement("div"), {
        className: "preview-outer"
      });
      this.feedElement.append(previewOuter);
      const thumbnail = this.feedElement.querySelector("figure a img");
      if (thumbnail) {
        thumbnail.style.objectFit = null;
      }
      this.replaceMediaPreview(this.feedElement);
      if (this.hasContent()) {
        if (this.type === this.TYPES.ARTICLE) {
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
      const commentsLinkElements = footer.querySelectorAll("menu li > a.stretched-link");
      commentsLinkElements.forEach((commentsLinkElement) => {
        if (commentsLinkElement && commentsLinkElement.href.endsWith("#comments")) {
          const url = new URL(commentsLinkElement.href);
          commentsLinkElement.href = url.pathname;
        }
      });
    }
    replaceMediaPreview(parent) {
      const footer = parent.querySelector("footer");
      const mediaPreviewButton = footer.querySelector("button.show-preview");
      const previewOuter = parent.querySelector(".preview-outer");
      const footerMenu = footer.querySelector("menu");
      if (mediaPreviewButton && mediaPreviewButton.dataset.action === "preview#show") {
        this.hasMedia = true;
        mediaPreviewButton.remove();
        const newMediaPreviewButton = document.createElement("button");
        newMediaPreviewButton.classList.add("show-media-preview", "preview-button");
        newMediaPreviewButton.innerHTML = '<i class="fas fa-photo-film"></i>';
        newMediaPreviewButton.addEventListener("click", (event) => {
          event.preventDefault();
          this.toggleMediaPreview();
        });
        const li = document.createElement("li");
        li.append(newMediaPreviewButton);
        footer.querySelector("menu").insertBefore(li, footerMenu.firstChild);
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
      this.getContent().then((content) => {
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
      if (!element || !this.mediaUrl) {
        return;
      }
      this.mediaPreviewOpen = true;
      let previewElement = element.querySelector(".media-preview");
      let previewContentElement = previewElement.querySelector(".media-preview-content");
      previewElement.classList.add("show");
      previewContentElement.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';
      previewContentElement.classList.remove("loaded");
      const mediaURLObject = new URL(this.mediaUrl);
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
        let url = "/ajax/fetch_embed?url=" + encodeURIComponent(this.mediaUrl);
        fetch(url).then((response) => response.json().then((data) => {
          previewContentElement.innerHTML = "";
          previewContentElement.insertAdjacentHTML("beforeend", data.html);
          previewContentElement.classList.add("loaded");
        })).catch(() => {
          previewContentElement.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Error loading media</div>';
          previewContentElement.classList.add("loaded");
        });
      }
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
        imageElement.style.width = imageRect.width + event.movementX * 2 + "px";
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
  };
  var Article_default = Article;

  // src/Classes/ArticlesHandler/ArticlesHandler.js
  var ArticlesHandler = class {
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
        childList: true
      });
      document.addEventListener("keydown", (e) => {
        this.handleKeydown(e);
      });
    }
    parseArticle(element) {
      const article = Article_default.fromFeedElement(element);
      article.enrichFeedElement();
      element.addEventListener("click", () => {
        this.selectArticle(article);
      });
      this.#articles.push(article);
    }
    parseArticles() {
      document.querySelectorAll("#content>div>article.entry").forEach((el) => {
        this.parseArticle(el);
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
  };
  var ArticlesHandler_default = ArticlesHandler;

  // src/Classes/Navigator/Navigator.js
  var Navigator = class {
    constructor() {
    }
    init() {
      this.fixMobileLogoLink();
    }
    fixMobileLogoLink() {
      const nav = document.querySelector("nav.head-nav");
      const logo = document.querySelector("nav.head-nav .brand > a");
      const hamburger = document.querySelector("nav.head-nav .brand > div");
      const homeButton = document.querySelector("#sidebar .section.mobile-close a.btn");
      const action = nav.dataset.action;
      nav.dataset.action = "";
      hamburger.dataset.action = action;
      homeButton.href = logo.href;
    }
  };
  var Navigator_default = Navigator;

  // src/Classes/ArticlePage/ArticlePage.scss
  inject_style("article.entry header .url-subheader{font-size:.6rem;font-weight:600;flex-basis:100%}article.entry header .url-subheader .url-subheader__path{font-weight:200}");

  // src/Classes/ArticlePage/ArticlePage.js
  var ArticlePage = class {
    currentPage = 1;
    numberOfPages = 1;
    constructor() {
    }
    init() {
      const currentURL = new URL(window.location.href);
      if (!currentURL.pathname.match(/\/m\/.+?\/t\/.+?/)) {
        return;
      }
      this.url = currentURL;
      this.articleElement = document.querySelector("article.entry");
      this.article = Article_default.fromArticlePage(this.articleElement);
      this.article.enrichArticlePage();
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
        paginationElement.innerHTML = "";
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.handleInfiniteScroll();
            }
          });
        });
        observer.observe(paginationElement);
      }
      document.addEventListener("keydown", (e) => {
        this.handleKeydown(e);
      });
      if (this.article.linkUrl) {
        const subheader = document.createElement("h3");
        subheader.classList.add("url-subheader");
        let url = new URL(this.article.linkUrl);
        let subheaderText = '<i class="fa fa-link"></i> <span class="url-subheader__host">' + url.hostname + '</span><span class="url-subheader__path">' + url.pathname + url.search + "</span>";
        subheader.innerHTML = `<a href="${this.article.linkUrl}" target="_blank">${subheaderText}</a>`;
        this.articleElement.querySelector("header").appendChild(subheader);
      }
    }
    handleInfiniteScroll() {
      if (this.numberOfPages > this.currentPage) {
        this.currentPage++;
        this.loadPage(this.currentPage).then((html) => {
          const dom = new DOMParser().parseFromString(html, "text/html");
          const comments = dom.querySelectorAll("#comments section.comments > .comment");
          const paginationElement = document.querySelector("nav.pagination.section");
          comments.forEach((comment) => {
            document.querySelector("#comments section.comments").insertBefore(comment, paginationElement);
          });
        });
      }
    }
    handleKeydown(event) {
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
          window.open(this.article.linkUrl, "_blank");
        }
      }
    }
    loadPage(page) {
      let url = this.url.pathname + "?p=" + page;
      return fetch(url).then((response) => {
        return response.text();
      });
    }
  };
  var ArticlePage_default = ArticlePage;

  // src/index.js
  var articlesHandler = new ArticlesHandler_default();
  var navigator = new Navigator_default();
  var articlePage = new ArticlePage_default();
  articlesHandler.init();
  navigator.init();
  articlePage.init();
})();
