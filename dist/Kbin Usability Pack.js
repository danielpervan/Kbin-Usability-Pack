// ==UserScript==
// @name         Kbin Usability Pack
// @namespace    https://perry.dev
// @license      MIT
// @version      0.3.0
// @description  A collection of usability enhancements for Kbin
// @author       Daniel Pervan
// @match        https://kbin.social/*
// @match        https://lab2.kbin.pub/*
// @match        https://lab3.kbin.pub/*
// @icon         data:image/png;base64,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
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };

  // style-helper:index.js
  function inject_style(text) {
    if (typeof document !== "undefined") {
      var style = document.createElement("style");
      var node = document.createTextNode(text);
      style.appendChild(node);
      document.head.appendChild(style);
    }
  }
  var init_index = __esm({
    "style-helper:index.js"() {
    }
  });

  // src/Classes/Article/Article.scss
  var Article_exports = {};
  var init_Article = __esm({
    "src/Classes/Article/Article.scss"() {
      init_index();
      inject_style('body:not(.KUP-setting-showArticlePreview) .show-article-preview{display:none!important}#content article.entry .no-image-placeholder{place-self:center}#content article.entry aside.meta.entry__meta{line-height:2em}#content article.entry aside.meta.entry__meta img{margin-right:.25rem;margin-left:.25rem}#content article.entry .magazine-inline{white-space:nowrap}#content article.entry.selected{border:var(--kbin-meta-border)}#content article.entry>figure{align-self:center}#content article.entry>figure img{object-position:center}#content article.entry aside.vote{place-content:center}#content article.entry button.show-preview,#content article.entry button.preview-button{border:var(--kbin-button-primary-border);color:var(--kbin-button-primary-text-color);background:var(--kbin-button-primary-bg);padding:.5em;cursor:pointer}#content article.entry button.show-preview:hover,#content article.entry button.preview-button:hover{color:var(--kbin-button-primary-text-hover-color);background:var(--kbin-button-primary-hover-bg)}main#main.view-compact article.entry{grid-template-areas:"vote image title" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important}main#main.view-compact article.entry.no-image{grid-template-areas:"vote title" "vote meta" "vote footer" "body body" "preview preview"!important}main#main.view-compact article.entry figure{margin-right:1rem}main#main.view-compact article.entry figure img{max-height:100px;max-width:120px}@media (max-width: 689.98px){main#main.view-compact article.entry{grid-template-areas:"image vote" "title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}main#main.view-compact article.entry figure img{object-fit:contain}main#main.view-compact article.entry.no-image{grid-template-areas:"title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}}.preview-outer{grid-area:preview}.preview-outer .preview-inner{position:relative;display:none;border-top:var(--kbin-meta-border);padding:1em}.preview-outer .preview-inner.show{display:block}.preview-outer .preview-inner .loading{position:relative;height:3em;z-index:1;display:flex;justify-content:center;align-items:center;animation:showPreviewLoading .25s ease-in-out}.preview-outer .preview-inner .article-preview-content{position:relative}.preview-outer .preview-inner .article-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}.preview-outer .preview-inner .media-preview-content{position:relative}.preview-outer .preview-inner .media-preview-content img{max-width:100%;max-height:100%;min-width:100px;object-fit:contain}.preview-outer .preview-inner .media-preview-content img.animateMinResize{animation:animateMinResize .25s ease-out;transform-origin:left top}@keyframes animateMinResize{0%{opacity:1;transform:scale(1)}33%{opacity:.8;transform:scale(.95)}66%{opacity:1;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}.preview-outer .preview-inner .media-preview-content.oembed-embed{position:relative;overflow:hidden;max-width:100%;height:100vh;margin:0 auto}.preview-outer .preview-inner .media-preview-content.oembed-embed iframe{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.youtube-embed{position:relative;overflow:hidden;max-width:100%;max-height:100vh;margin:0 auto;aspect-ratio:16/9}.preview-outer .preview-inner .media-preview-content.youtube-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}@keyframes showPreviewLoading{0%{opacity:0;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes articlePreviewFadeIn{0%{opacity:0;transform:translateY(-.5em)}to{opacity:1}}@media (max-width: 689.98px){#content article.entry>figure{margin:0}#content article.entry aside.vote{place-self:center}}');
    }
  });

  // src/Classes/Article/Article_alt_ui.scss
  var Article_alt_ui_exports = {};
  var init_Article_alt_ui = __esm({
    "src/Classes/Article/Article_alt_ui.scss"() {
      init_index();
      inject_style('body.KUP-setting-alternativeMobileUI article.entry .meta-content{display:flex;flex-flow:row;justify-content:flex-start;align-items:center;gap:1em;flex-wrap:wrap;width:100%;margin:auto;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .meta-content img{width:20px;height:20px;aspect-ratio:1}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer{vertical-align:middle;display:grid;grid-auto-columns:max-content;grid-auto-flow:column;padding:.5rem 0}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer .timeago{margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .meta-content .meta-icon{font-size:20px;margin-right:.25rem;margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry footer{z-index:1}body.KUP-setting-alternativeMobileUI article.entry footer menu{align-items:center}body.KUP-setting-alternativeMobileUI article.entry footer menu .boost-link-removed{overflow:hidden;height:0;width:0;visibility:hidden;position:absolute}body.KUP-setting-alternativeMobileUI article.entry .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .footer-button{font-size:1.4em;vertical-align:middle;white-space:nowrap}body.KUP-setting-alternativeMobileUI article.entry .footer-button.active{color:var(--kbin-button-primary-bg)}body.KUP-setting-alternativeMobileUI article.entry .footer-button.more-link{width:1.5em;height:100%}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI.rounded-edges .page-entry-single article.entry:not(.no-image) .media-preview{border-top-left-radius:.5rem;border-top-right-radius:.5rem}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image){grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image):not(.no-media-preview) figure img{display:none}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "preview preview" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry.no-image{grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI .page-entry-single #content .media-preview-li{display:none}body.KUP-setting-alternativeMobileUI.rounded-edges #middle:not(.page-entry-single) article.entry:not(.no-image) .media-preview img{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry{margin-bottom:2rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry .media-preview{margin-bottom:-.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content .no-image-placeholder{display:block}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image){grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry.no-image{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI #content article.entry{padding-bottom:0}body.KUP-setting-alternativeMobileUI #content article.entry .meta-content{justify-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview{overflow:hidden;max-height:90vh;padding:0}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview img{max-width:100%}body.KUP-setting-alternativeMobileUI #content article.entry .vote{margin-right:.5rem;margin-left:.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .entry__meta{text-align:center}body.KUP-setting-alternativeMobileUI #content article.entry footer{text-align:center;border-top:var(--kbin-section-border);margin-top:1rem;padding-top:.8em;padding-bottom:.8em}body.KUP-setting-alternativeMobileUI #content article.entry footer menu{place-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry menu{grid-auto-columns:auto}body.KUP-setting-alternativeMobileUI #content article.entry menu .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image){grid-template-columns:auto min-content;padding-top:0}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:none}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:block}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure img{width:100%;max-width:100%;max-height:90vh;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}}');
    }
  });

  // src/Classes/Article/Article_old.scss
  var Article_old_exports = {};
  var init_Article_old = __esm({
    "src/Classes/Article/Article_old.scss"() {
      init_index();
      inject_style('body:not(.KUP-setting-showArticlePreview) .show-article-preview{display:none!important}#content article.entry aside.meta.entry__meta{line-height:2em}#content article.entry aside.meta.entry__meta img{margin-right:.25rem;margin-left:.25rem}#content article.entry .magazine-inline{white-space:nowrap}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"}#content article.entry:not(.no-image){grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important;grid-template-columns:min-content min-content auto}#content article.entry.selected{border:var(--kbin-meta-border)}#content article.entry>figure{margin:0 1rem 0 0;align-self:center}#content article.entry>figure img{max-width:180px;max-height:100%;width:auto;height:auto;object-fit:contain}#content article.entry aside.vote{place-content:center}#content article.entry button.show-preview,#content article.entry button.preview-button{border:1px solid var(--kbin-section-text-color);padding:.5em;background:var(--kbin-bg)}main#main.view-compact article.entry{grid-template-areas:"vote image title" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important}main#main.view-compact article.entry.no-image{grid-template-areas:"vote title" "vote meta" "vote footer" "body body" "preview preview"!important}main#main.view-compact article.entry figure{margin-right:1rem}main#main.view-compact article.entry figure img{max-height:100px;max-width:120px}@media (max-width: 689.98px){main#main.view-compact article.entry{grid-template-areas:"image vote" "title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}main#main.view-compact article.entry figure img{object-fit:contain}main#main.view-compact article.entry.no-image{grid-template-areas:"title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}}@media (max-width: 991.98px){#content article.entry:not(.no-image){grid-template-areas:"vote image image" "vote title title" "vote shortDesc shortDesc" "vote meta meta" "vote footer footer" "body body body" "preview preview preview"!important}}@media (max-width: 689.98px){#content article.entry:not(.no-image){grid-template-areas:"vote image" "title title" "shortDesc shortDesc" "meta meta" "footer footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry>figure{margin:0}#content article.entry aside.vote{place-self:center}}.preview-outer{grid-area:preview}.preview-outer .preview-inner{position:relative;display:none;border-top:var(--kbin-meta-border);padding:1em}.preview-outer .preview-inner.show{display:block}.preview-outer .preview-inner .loading{position:relative;height:3em;z-index:1;display:flex;justify-content:center;align-items:center;animation:showPreviewLoading .25s ease-in-out}.preview-outer .preview-inner .article-preview-content{position:relative}.preview-outer .preview-inner .article-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}.preview-outer .preview-inner .media-preview-content{position:relative}.preview-outer .preview-inner .media-preview-content img{max-width:100%;max-height:100%;min-width:100px;object-fit:contain}.preview-outer .preview-inner .media-preview-content img.animateMinResize{animation:animateMinResize .25s ease-out;transform-origin:left top}@keyframes animateMinResize{0%{opacity:1;transform:scale(1)}33%{opacity:.8;transform:scale(.95)}66%{opacity:1;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}.preview-outer .preview-inner .media-preview-content.oembed-embed{position:relative;overflow:hidden;max-width:100%;height:100vh;margin:0 auto}.preview-outer .preview-inner .media-preview-content.oembed-embed iframe{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.youtube-embed{position:relative;overflow:hidden;max-width:100%;max-height:100vh;margin:0 auto;aspect-ratio:16/9}.preview-outer .preview-inner .media-preview-content.youtube-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}@keyframes showPreviewLoading{0%{opacity:0;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes articlePreviewFadeIn{0%{opacity:0;transform:translateY(-.5em)}to{opacity:1}}@media (min-width: 991.98px){body.KUP-setting-alternativeMobileUI #content article.entry>figure{background-image:none!important}}@media (max-width: 991.98px){body.KUP-setting-alternativeMobileUI #content article.entry>figure{height:110px;background-position:center;background-repeat:no-repeat;background-size:cover}body.KUP-setting-alternativeMobileUI #content article.entry>figure a img{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);max-width:100%;width:100%;height:100%;object-fit:contain!important;object-position:center}}body.KUP-setting-alternativeMobileUI article.entry .meta-link{font-size:1.4em}body.KUP-setting-alternativeMobileUI article.entry .meta-content{display:flex;flex-flow:row;justify-content:space-around;align-items:center;flex-wrap:wrap;width:100%;margin:auto;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .meta-content img{width:20px;height:20px;aspect-ratio:1}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer{vertical-align:middle;display:grid;grid-auto-columns:max-content;grid-auto-flow:column;padding:.5rem 0}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer .timeago{margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .meta-content .meta-icon{font-size:20px;margin-right:.25rem;margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .boost-link-removed{overflow:hidden;height:0;width:0;visibility:hidden;position:absolute}body.KUP-setting-alternativeMobileUI article.entry .footer-button{font-size:1.4em;vertical-align:middle;white-space:nowrap}body.KUP-setting-alternativeMobileUI article.entry .footer-button.more-link{width:1.5em;height:100%}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI.rounded-edges .page-entry-single article.entry:not(.no-image) .media-preview{border-top-left-radius:.5rem;border-top-right-radius:.5rem}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image){grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image):not(.no-media-preview) figure img{display:none}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "preview preview" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry.no-image{grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI .page-entry-single #content .media-preview-li{display:none}body.KUP-setting-alternativeMobileUI.rounded-edges #middle:not(.page-entry-single) article.entry:not(.no-image) .media-preview img{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry{margin-bottom:2rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image){grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry.no-image{grid-template-areas:"title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI #content article.entry{padding-bottom:0}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview{overflow:hidden;max-height:90vh;padding:0;margin:-.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview img{max-width:100%}body.KUP-setting-alternativeMobileUI #content article.entry .vote{margin-right:0;margin-left:.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .entry__meta{text-align:center}body.KUP-setting-alternativeMobileUI #content article.entry footer{text-align:center;border-top:var(--kbin-section-border);margin-top:1rem;padding-top:.8em;padding-bottom:.8em}body.KUP-setting-alternativeMobileUI #content article.entry footer menu{place-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry menu{grid-auto-columns:auto}body.KUP-setting-alternativeMobileUI #content article.entry menu .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image){grid-template-columns:auto min-content;padding-top:0}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:none}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:block;margin-left:-.5rem;margin-right:-.5rem;height:110px}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure img{width:100%;height:100%;max-width:100%;max-height:90vh;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;object-fit:contain!important}}');
    }
  });

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

  // src/Classes/Settings.js
  var Settings = class {
    constructor() {
    }
    get(key) {
      const settings3 = this.getAll();
      if (settings3[key] === void 0) {
        return null;
      }
      return settings3[key];
    }
    getAll() {
      const data = localStorage.getItem("kup-settings");
      let settings3 = {};
      if (data) {
        settings3 = JSON.parse(data);
      }
      if (settings3.showUrlSubheader === void 0) {
        settings3.showUrlSubheader = true;
      }
      if (settings3.removeCommentAnchor === void 0) {
        settings3.removeCommentAnchor = true;
      }
      if (settings3.showArticlePreview === void 0) {
        settings3.showArticlePreview = true;
      }
      if (settings3.infiniteCommentScroll === void 0) {
        settings3.infiniteCommentScroll = true;
      }
      if (settings3.addOptionsAnchor === void 0) {
        settings3.addOptionsAnchor = true;
      }
      return settings3;
    }
    replace(settings3, sendEvent = true, apply = true) {
      localStorage.setItem("kup-settings", JSON.stringify(settings3));
      if (apply) {
        this.apply();
      }
      if (sendEvent) {
        window.dispatchEvent(new CustomEvent("kup-settings-changed"));
      }
    }
    save(key, value, apply = true) {
      const settings3 = this.getAll();
      const oldValue = settings3[key];
      settings3[key] = value;
      localStorage.setItem("kup-settings", JSON.stringify(settings3));
      if (apply) {
        this.apply();
      }
      window.dispatchEvent(new CustomEvent("kup-settings-changed", {
        detail: {
          key,
          newValue: value,
          oldValue
        }
      }));
    }
    apply() {
      const settings3 = this.getAll();
      for (const [key, value] of Object.entries(settings3)) {
        if (value === true || value === false) {
          document.body.classList.toggle("KUP-setting-" + key, value);
        }
      }
    }
    reset() {
      localStorage.removeItem("kup-settings");
    }
  };
  var Settings_default = Settings;

  // src/Utils/utils.js
  function isNewKbinVersion() {
    const reportIssueEl = document.querySelector("#footer div section div a:nth-child(2)");
    return reportIssueEl && reportIssueEl.href.startsWith("https://codeberg.org/Kbin/");
  }

  // src/Classes/Article/Article.js
  var settings = new Settings_default();
  if (isNewKbinVersion()) {
    Promise.resolve().then(() => init_Article());
    if (settings.get("alternativeMobileUI")) {
      Promise.resolve().then(() => init_Article_alt_ui());
    }
  } else {
    Promise.resolve().then(() => init_Article_old());
  }
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
      window.addEventListener("kup-settings-changed", () => {
        console.log("kup-settings-changed");
        this.applySettings();
      });
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
      article.subject = articleElement.querySelector("header h1")?.childNodes[0]?.innerText?.trim();
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
      const settings3 = new Settings_default();
      const footer = this.feedElement.querySelector("footer");
      const footerMenu = footer.querySelector("menu");
      const previewOuter = Object.assign(document.createElement("div"), {
        className: "preview-outer"
      });
      this.feedElement.append(previewOuter);
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
      const commentLinkElement = footer.querySelector("menu li [data-subject-target='commentsCounter']")?.parentElement;
      const articleLinkElement = this.feedElement.querySelector("header h2 a");
      if (articleLinkElement) {
        if (settings3.get("openArticleInNewTab")) {
          articleLinkElement.target = "_blank";
        } else {
          articleLinkElement.removeAttribute("target");
        }
      }
      if (commentLinkElement) {
        if (settings3.get("openArticleInNewTab")) {
          commentLinkElement.target = "_blank";
        } else {
          commentLinkElement.removeAttribute("target");
        }
      }
    }
    replaceMediaPreview(parent) {
      const footer = parent.querySelector("footer");
      const mediaPreviewButton = footer.querySelector("button.show-preview");
      const previewOuter = parent.querySelector(".preview-outer");
      const footerMenu = footer.querySelector("menu");
      if (mediaPreviewButton && mediaPreviewButton.dataset.action === "preview#show") {
        this.hasMedia = true;
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
      const settings3 = new Settings_default();
      if (settings3.get("alternativeMobileUI")) {
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
      if (!element || !this.hasMedia) {
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
          const scripts = previewContentElement.querySelectorAll("script");
          scripts.forEach((script) => {
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
      const settings3 = new Settings_default();
      const articleElement = this.feedElement || this.articlePageElement;
      if (settings3.get("alternativeMobileUI")) {
        const commentsLinkElement = articleElement.querySelector("footer menu li > a.stretched-link");
        const commentsLi = commentsLinkElement?.parentElement;
        const commentsURL = commentsLinkElement?.href;
        const commentsCount = parseInt(commentsLinkElement.querySelector("[data-subject-target='commentsCounter']").innerText);
        commentsLinkElement.remove();
        const newCommentsLinkElement = document.createElement("a");
        newCommentsLinkElement.className = "comments-link footer-button";
        newCommentsLinkElement.href = commentsURL;
        if (settings3.get("openArticleInNewTab")) {
          newCommentsLinkElement.target = "_blank";
        }
        if (settings3.get("removeCommentAnchor") && this.feedElement) {
          if (commentsURL.endsWith("#comments")) {
            const url = new URL(commentsURL);
            newCommentsLinkElement.href = url.pathname;
          }
        }
        newCommentsLinkElement.innerHTML = `<i class="fas fa-comments"></i> ${commentsCount}`;
        commentsLi.append(newCommentsLinkElement);
        const boostLinkElement = articleElement.querySelector("footer menu li button[data-action='subject#favourite']");
        const boostLi = boostLinkElement?.parentElement.parentElement;
        const newBoostLinkElement = document.createElement("a");
        const boostCounter = parseInt(boostLinkElement.querySelector("[data-subject-target='upvoteCounter']")?.innerText.match(/\d+/)[0]);
        const boostForm = boostLinkElement.parentElement;
        newBoostLinkElement.className = "boost-link footer-button";
        newBoostLinkElement.href = "#";
        newBoostLinkElement.addEventListener("click", (event) => {
          event.preventDefault();
          boostForm.querySelector("button[type='submit']").click();
        });
        if (boostForm.querySelector("button[type='submit']").classList.contains("active")) {
          newBoostLinkElement.classList.add("active");
        }
        const boostCounterObserver = new MutationObserver((mutations) => {
          console.log("Boost counter observer");
          mutations.forEach(() => {
            const boostCounterElement = newBoostLinkElement.querySelector(".boost-counter");
            if (boostCounterElement) {
              boostCounterElement.innerText = boostForm.querySelector("[data-subject-target='upvoteCounter']")?.innerHTML?.trim().match(/\d+/)[0] || "";
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
        const moreLinkElement = articleElement.querySelector("footer menu li button[data-subject-target='more']");
        moreLinkElement.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
        moreLinkElement.classList.add("more-link", "footer-button");
        if (settings3.get("alternativeMobileUI")) {
          const metaEl = articleElement.querySelector("aside.meta");
          if (metaEl) {
            const userEl = metaEl.querySelector(".user-inline");
            const magazineEl = metaEl.querySelector(".magazine-inline");
            const timeEl = metaEl.querySelector("time");
            metaEl.classList.add("alternative-mobile-ui");
            const newMetaContent = Object.assign(document.createElement("div"), {
              className: "meta-content"
            });
            if (userEl) {
              newMetaContent.append(userEl);
            }
            if (magazineEl) {
              newMetaContent.append(magazineEl);
            }
            if (timeEl) {
              const timeOuter = Object.assign(document.createElement("div"), {
                className: "time-outer",
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
      const thumbnailFigure = articleElement.querySelector("figure");
      const thumbnail = thumbnailFigure?.querySelector("a img");
      if (thumbnail) {
        thumbnail.style.objectFit = null;
        if (settings3.get("alternativeMobileUI") && !isNewKbinVersion()) {
          thumbnailFigure.style.backgroundImage = "url(" + thumbnail.src + ")";
        }
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
    applySettings() {
      const settings3 = new Settings_default();
      if (settings3.get("alternativeMobileUI") === true) {
        if (this.articlePageElement) {
          this.showMediaPreview();
          if (!this.hasMedia) {
            this.articlePageElement.classList.add("no-media-preview");
          }
        } else if (this.feedElement) {
          console.log(settings3.get("openArticleInNewTab"));
          if (settings3.get("openArticleInNewTab")) {
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
          if (settings3.get("openArticleInNewTab")) {
            commentsLink.target = "_blank";
            this.feedElement.querySelector("header a").target = "_blank";
          } else {
            commentsLink.removeAttribute("target");
            this.feedElement.querySelector("header a").removeAttribute("target");
          }
        }
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
      const settings3 = new Settings_default();
      if (settings3.get("showArticlePreview")) {
        document.body.classList.add("kup-show-article-preview");
      } else {
        document.body.classList.remove("kup-show-article-preview");
        this.#articles.forEach((article) => {
          article.hideArticlePreview();
        });
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
  init_index();
  inject_style("body.KUP-setting-showUrlSubheader article.entry header .url-subheader{display:block}article.entry header .url-subheader{display:none;font-size:.6rem;font-weight:600;flex-basis:100%;word-break:break-all;padding-right:1em}article.entry header .url-subheader .url-subheader__path{font-weight:200}");

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
      const settings3 = new Settings_default();
      if (settings3.get("infiniteCommentScroll")) {
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
      this.applySettings();
      window.addEventListener("kup-settings-changed", () => {
        this.applySettings();
      });
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
    applySettings() {
      const settings3 = new Settings_default();
      const options = document.getElementById("options");
      if (settings3.get("addOptionsAnchor") === true) {
        options.querySelectorAll(".options__main li a").forEach((a) => {
          a.href = a.href + "#options";
        });
      } else {
        options.querySelectorAll(".options__main li a").forEach((a) => {
          a.href = a.href.replace("#options", "");
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

  // src/Classes/SettingsPanel/SettingsRow.js
  var SettingsRow = class _SettingsRow {
    element;
    name;
    description;
    value;
    type;
    id;
    static TYPES = {
      BOOLEAN: "boolean",
      STRING: "string",
      NUMBER: "number",
      ENUM: "enum",
      CUSTOM: "custom"
    };
    constructor(name, type, options = {}) {
      this.name = name;
      this.type = type;
      const { description, value, id } = options || {};
      this.value = value;
      this.description = description;
      if (id) {
        this.setId(id);
      }
    }
    getElement() {
      if (this.element) {
        return this.element;
      }
      const element = Object.assign(document.createElement("div"), {
        className: "settings-row"
      });
      this.element = element;
      const name = Object.assign(document.createElement("span"), {
        className: "name",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "description",
          innerText: this.description
        });
        element.appendChild(description);
      }
      return element;
    }
    static fromElement(element) {
      return new _SettingsRow(element.innerText, _SettingsRow.detectType(element), "", {});
    }
    setId(id) {
      this.id = id;
      const settings3 = new Settings_default();
      const value = settings3.get(id);
      if (value !== void 0) {
        this.value = value;
      }
    }
    legacyAction(valueElement) {
      if (valueElement.href?.trim().toLowerCase().startsWith("javascript:") || valueElement.href?.trim().startsWith("#")) {
        valueElement.click();
        return Promise.resolve();
      } else {
        return fetch(valueElement.href).then(() => {
          window.dispatchEvent(new CustomEvent("kup-settings-needs-reload"));
        });
      }
    }
    static detectType(element) {
      const valueElement = element.querySelector(":scope > div");
      const booleanRegex = /Yes\s*\|\s*No/;
      const enumRegex = /(\w+)\s*\|\s*(\w+)/;
      if (valueElement.innerText.trim().match(booleanRegex)) {
        return _SettingsRow.TYPES.BOOLEAN;
      } else if (valueElement.innerText.trim().match(enumRegex)) {
        return _SettingsRow.TYPES.ENUM;
      } else {
        return _SettingsRow.TYPES.CUSTOM;
      }
    }
  };
  var SettingsRow_default = SettingsRow;

  // src/Classes/SettingsPanel/SettingsRowCustom.js
  var SettingsRowCustom = class _SettingsRowCustom extends SettingsRow_default {
    valueElement;
    constructor(name, options) {
      super(name, SettingsRow_default.TYPES.CUSTOM, options);
      const { valueElement } = options || {};
      if (valueElement) {
        this.valueElement = valueElement;
      }
    }
    getElement() {
      if (this.element) {
        return this.element;
      }
      const element = Object.assign(document.createElement("div"), {
        className: "settings-row"
      });
      this.element = element;
      const name = Object.assign(document.createElement("span"), {
        className: "name",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "description",
          innerText: this.description
        });
        element.appendChild(description);
      }
      const valueContainer = Object.assign(document.createElement("div"), {
        className: "value-container"
      });
      valueContainer.appendChild(this.valueElement);
      element.appendChild(valueContainer);
      return element;
    }
    static fromElement(element) {
      let name = element.querySelector(":scope > span")?.innerText.trim();
      name = name.endsWith(":") ? name.slice(0, -1) : name;
      const settingsRow = new _SettingsRowCustom(name);
      settingsRow.description = element.querySelector(".description")?.innerText;
      settingsRow.valueElement = element.querySelector(":scope > div");
      return settingsRow;
    }
  };
  var SettingsRowCustom_default = SettingsRowCustom;

  // src/Classes/SettingsPanel/SettingsSection.js
  var SettingsSection = class _SettingsSection {
    settingsRows = [];
    name;
    expanded = false;
    constructor(name) {
      this.name = name;
      this.settingsRows = [];
    }
    addSettingsRow(settingRow) {
      this.settingsRows.push(settingRow);
    }
    addSettingsRows(settingRows) {
      settingRows.forEach((row) => {
        this.addSettingsRow(row);
      });
    }
    static fromHeaderElement(headerElement) {
      return new _SettingsSection(headerElement.innerText);
    }
    expand() {
      this.expanded = true;
      this.element.classList.add("expanded");
    }
    collapse() {
      this.expanded = false;
      this.element.classList.remove("expanded");
    }
    toggle() {
      this.expanded ? this.collapse() : this.expand();
    }
    getElement() {
      if (this.element) {
        return this.element;
      }
      const element = Object.assign(document.createElement("div"), {
        className: "settings-section"
      });
      this.element = element;
      const header = Object.assign(document.createElement("h3"), {
        className: "settings-section-header",
        innerHTML: `<span>${this.name}</span><i class="fas fa-chevron-down icon-chevron"></i>`
      });
      header.addEventListener("click", (e) => {
        if (e.shiftKey) {
          window.dispatchEvent(new CustomEvent("kup-settings-expand-all-sections", {
            detail: {
              expand: !this.expanded
            }
          }));
        } else {
          this.toggle();
        }
      });
      element.appendChild(header);
      const settingsRows = Object.assign(document.createElement("div"), {
        className: "settings-rows"
      });
      element.appendChild(settingsRows);
      this.settingsRows.forEach((row) => {
        settingsRows.appendChild(row.getElement());
      });
      const settings3 = new Settings_default();
      if (settings3.get("alwaysExpandSettingsSections")) {
        this.expand();
      }
      return element;
    }
  };
  var SettingsSection_default = SettingsSection;

  // src/Classes/SettingsPanel/SettingsPanel.scss
  init_index();
  inject_style('body:not(.KUP-setting-settingsCompatibilityMode) #settings .settings-list{display:none!important;visibility:hidden}#settings .settings-panel-footer{font-size:.8em;font-weight:100}#settings .settings-panel-footer span{margin-left:.25em}.settings-panel .settings-section{margin-bottom:2em}.settings-panel .settings-section .settings-section-header{font-weight:700;margin-bottom:1em;cursor:pointer}.settings-panel .settings-section .settings-section-header:hover{color:var(--kbin-primary)}.settings-panel .settings-section .settings-section-header .icon{margin-right:.5em}.settings-panel .settings-section .settings-section-header .icon-chevron{transition:transform .25s ease-in-out;transform:rotate(-90deg);margin-left:.5em}.settings-panel .settings-section.expanded .icon-chevron{transform:rotate(0)}.settings-panel .settings-section.expanded .settings-row{display:grid}.settings-panel .settings-section .settings-row{display:none;grid-template-areas:"name value" "description value";grid-template-columns:auto;align-items:center;margin-bottom:1em;animation:showSettingsRow .25s ease-in-out}@keyframes showSettingsRow{0%{opacity:0;transform:translateY(-1em)}to{opacity:1;transform:translateY(0)}}.settings-panel .settings-section .settings-row .name{margin-right:1em;grid-area:name}.settings-panel .settings-section .settings-row .description{grid-area:description;font-size:.8em;font-weight:100;color:var(--kbin-secondary-text-color)}.settings-panel .settings-section .settings-row .value-container{flex-grow:1;text-align:right;grid-area:value;margin-left:1em}.settings-panel .settings-section .settings-row .value-container .link-muted.active{color:var(--kbin-primary);font-weight:800!important}.settings-panel .settings-section .settings-row .value-container.enum{border:var(--kbin-button-primary-border);border-radius:.5em;display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));align-items:center;text-align:center;background-color:var(--kbin-button-secondary-bg);overflow:hidden;font-size:.8em}.settings-panel .settings-section .settings-row .value-container.enum .value{padding:.5em .25em;font-weight:100;color:var(--kbin-button-secondary-text-color)}.settings-panel .settings-section .settings-row .value-container.enum .value:not(:last-child){border-right:var(--kbin-button-primary-border)}.settings-panel .settings-section .settings-row .value-container.enum .value.selected{background:var(--kbin-button-primary-bg);color:var(--kbin-button-primary-text-color);font-weight:800!important}.settings-panel .settings-section .settings-row .value-container .switch{position:relative;display:inline-block;width:3em;height:1.5em;border-radius:.75em;overflow:hidden;border:var(--kbin-button-primary-border)}.settings-panel .settings-section .settings-row .value-container .switch input{width:0;height:0;visibility:hidden}.settings-panel .settings-section .settings-row .value-container .switch:hover .slider{background-color:var(--kbin-button-secondary-text-hover-color)}.settings-panel .settings-section .settings-row .value-container .switch:hover .slider:before{background-color:var(--kbin-button-primary-text-hover-color);border:.5em solid var(--kbin-button-primary-text-hover-color)}.settings-panel .settings-section .settings-row .value-container .switch:hover input:checked+.slider{background-color:var(--kbin-button-primary-hover-bg)}.settings-panel .settings-section .settings-row .value-container .switch:hover input:checked+.slider:before{background:var(--kbin-button-primary-hover-bg)}.settings-panel .settings-section .settings-row .value-container .slider{position:absolute;cursor:pointer;inset:0;background-color:var(--kbin-button-secondary-text-color);transition:.25s}.settings-panel .settings-section .settings-row .value-container .slider:before{position:absolute;content:"";height:100%;width:fit-content;aspect-ratio:1;left:0;bottom:0;background-color:var(--kbin-button-primary-text-color);transition:.25s;border-radius:.75em;border:.5em solid var(--kbin-button-primary-text-color)}.settings-panel .settings-section .settings-row .value-container input:checked+.slider{background-color:var(--kbin-button-primary-bg)}.settings-panel .settings-section .settings-row .value-container input:checked+.slider:before{transform:translate(1.5em);background:var(--kbin-button-primary-bg)}#settings-notification-container{position:fixed;bottom:0;left:0;right:0;z-index:1000;padding:1em;display:none;flex-direction:column;align-items:center;pointer-events:none}#settings-notification-container.visible{display:flex}#settings-notification-container .notification{pointer-events:initial;margin-bottom:1em;padding:1em;border-radius:.25rem;background-color:var(--kbin-bg);box-shadow:var(--kbin-shadow);border:var(--kbin-section-border);display:flex;flex-direction:row;align-items:center;justify-content:space-between;animation:showNotification .25s ease-in-out}@keyframes showNotification{0%{opacity:0;transform:translateY(1em)}to{opacity:1;transform:translateY(0)}}#settings-notification-container .notification .message,#settings-notification-container .notification .message-icon{margin-right:1em}#settings-notification-container .notification button{background:var(--kbin-button-primary-bg);color:var(--kbin-button-primary-text-color);border:var(--kbin-button-primary-border);cursor:pointer}#settings-notification-container .notification button:hover{background:var(--kbin-button-primary-hover-bg);color:var(--kbin-button-primary-hover-text-color)}');

  // src/Classes/SettingsPanel/SettingsRowBoolean.js
  var SettingsRowBoolean = class _SettingsRowBoolean extends SettingsRow_default {
    trueAction;
    falseAction;
    requireReload;
    onChangeAction;
    constructor(name, options = {}) {
      super(name, SettingsRow_default.TYPES.BOOLEAN, options);
      const { requireReload, onChange } = options || {};
      if (requireReload) {
        this.requireReload = requireReload;
      }
      if (onChange) {
        this.onChangeAction = onChange;
      }
      const action = (newValue) => {
        if (this.id) {
          const settings3 = new Settings_default();
          settings3.save(this.id, newValue, !this.requireReload);
        }
        if (this.onChangeAction) {
          this.onChangeAction(newValue);
        }
        if (this.requireReload) {
          window.dispatchEvent(new CustomEvent("kup-settings-needs-reload"));
        }
      };
      this.bindTrueAction(() => {
        action(true);
      });
      this.bindFalseAction(() => {
        action(false);
      });
    }
    setValue(value) {
      this.value = !!value;
      if (this.value) {
        this.trueAction();
      } else {
        this.falseAction();
      }
    }
    bindTrueAction(action) {
      this.trueAction = action;
    }
    bindFalseAction(action) {
      this.falseAction = action;
    }
    getElement() {
      if (this.element) {
        return this.element;
      }
      const element = Object.assign(document.createElement("div"), {
        className: "settings-row"
      });
      this.element = element;
      const name = Object.assign(document.createElement("span"), {
        className: "name",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "description",
          innerText: this.description
        });
        element.appendChild(description);
      }
      const valueContainer = Object.assign(document.createElement("div"), {
        className: "value-container"
      });
      const label = Object.assign(document.createElement("label"), {
        className: "switch"
      });
      const input = Object.assign(document.createElement("input"), {
        type: "checkbox",
        checked: this.value
      });
      const slider = Object.assign(document.createElement("span"), {
        className: "slider"
      });
      input.addEventListener("change", () => {
        this.setValue(!this.value);
      });
      label.appendChild(input);
      label.appendChild(slider);
      valueContainer.appendChild(label);
      element.appendChild(valueContainer);
      return element;
    }
    static fromElement(element) {
      let name = element.querySelector(":scope > span")?.innerText.trim();
      name = name.endsWith(":") ? name.slice(0, -1) : name;
      const settingsRow = new _SettingsRowBoolean(name, {
        value: element.querySelector(":scope > div a.active").innerText.trim() === "Yes"
      });
      const valueElements = element.querySelectorAll(":scope > div a");
      valueElements.forEach((valueElement) => {
        if (valueElement.innerText.trim() === "Yes") {
          settingsRow.bindTrueAction(() => {
            return settingsRow.legacyAction(valueElement);
          });
        } else {
          settingsRow.bindFalseAction(() => {
            return settingsRow.legacyAction(valueElement);
          });
        }
      });
      return settingsRow;
    }
  };
  var SettingsRowBoolean_default = SettingsRowBoolean;

  // src/Classes/SettingsPanel/SettingsRowEnum.js
  var SettingsRowEnum = class _SettingsRowEnum extends SettingsRow_default {
    selectedId;
    values = [];
    constructor(name, options = {}) {
      super(name, SettingsRow_default.TYPES.ENUM, options);
      const { values, selectedId } = options || {};
      if (selectedId) {
        this.selectedId = selectedId;
      }
      if (values) {
        this.values = values;
      }
    }
    setSelected(id) {
      this.selectedId = id;
      this.element.querySelectorAll(".value").forEach((valueElement) => {
        valueElement.classList.remove("selected");
      });
    }
    getElement() {
      if (this.element) {
        return this.element;
      }
      const element = Object.assign(document.createElement("div"), {
        className: "settings-row"
      });
      this.element = element;
      const name = Object.assign(document.createElement("span"), {
        className: "name",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "description",
          innerText: this.description
        });
        element.appendChild(description);
      }
      const valueContainer = Object.assign(document.createElement("div"), {
        className: "value-container enum"
      });
      this.values.forEach((value) => {
        const valueElement = Object.assign(document.createElement("a"), {
          className: "value",
          innerText: value.value,
          href: value.id
        });
        if (this.selectedId === value.id) {
          valueElement.classList.add("selected");
        }
        valueElement.addEventListener("click", (e) => {
          e.preventDefault();
          value.action();
          element.querySelectorAll(".value").forEach((valueElement2) => {
            valueElement2.classList.remove("selected");
          });
          valueElement.classList.add("selected");
        });
        valueContainer.appendChild(valueElement);
      });
      element.appendChild(valueContainer);
      return element;
    }
    static fromElement(element) {
      let name = element.querySelector(":scope > span")?.innerText.trim();
      name = name.endsWith(":") ? name.slice(0, -1) : name;
      const settingsRow = new _SettingsRowEnum(name);
      const valueElements = element.querySelectorAll(":scope > div a");
      let values = [];
      let selectedId = null;
      valueElements.forEach((valueElement) => {
        let value = {};
        value.value = valueElement.innerText.trim();
        value.id = valueElement.href;
        value.action = () => {
          settingsRow.legacyAction(valueElement);
        };
        if (valueElement.classList.contains("active")) {
          selectedId = value.id;
        }
        values.push(value);
      });
      settingsRow.values = values;
      settingsRow.selectedId = selectedId;
      return settingsRow;
    }
  };
  var SettingsRowEnum_default = SettingsRowEnum;

  // src/Classes/SettingsPanel/SettingsPanel.js
  function settingsRowFromElement(element) {
    let settingsRow;
    switch (SettingsRow_default.detectType(element)) {
      case SettingsRow_default.TYPES.BOOLEAN:
        settingsRow = SettingsRowBoolean_default.fromElement(element);
        break;
      case SettingsRow_default.TYPES.ENUM:
        settingsRow = SettingsRowEnum_default.fromElement(element);
        break;
      default:
        settingsRow = SettingsRowCustom_default.fromElement(element);
        break;
    }
    return settingsRow;
  }
  var SettingsPanel = class {
    #initiated = false;
    #notificationElement;
    #sections = [];
    #settingsPanelElement;
    #settingsPanelContainerElement;
    constructor() {
    }
    init() {
      if (this.#initiated) {
        console.error("SettingsPanel already initiated");
        return;
      }
      this.#initiated = true;
      this.#settingsPanelContainerElement = document.getElementById("settings");
      this.#addSettingsNotificationElement();
      document.KUP.settingsPanel = this;
      if (!document.KUP.components) {
        document.KUP.components = {};
      }
      document.KUP.components.SettingsPanelBooleanRow = SettingsRowBoolean_default;
      document.KUP.components.SettingsPanelEnumRow = SettingsRowEnum_default;
      document.KUP.components.SettingsPanelSection = SettingsSection_default;
      this.#enrichSettingsPanel();
      this.#populateKUPSettings();
      window.addEventListener("kup-settings-needs-reload", () => {
        this.showNotification("Settings updated. Some changes require reload to take effect.");
      });
      window.addEventListener("kup-settings-expand-all-sections", (e) => {
        this.#sections.forEach((section) => {
          e.detail.expand ? section.expand() : section.collapse();
        });
      });
    }
    addSection(section) {
      this.#sections.push(section);
      this.#settingsPanelElement.appendChild(section.getElement());
    }
    getSection(name) {
      return this.#sections.find((section) => section.name === name);
    }
    getSections() {
      return this.#sections;
    }
    removeSection(name) {
      const section = this.getSection(name);
      if (section) {
        section.getElement().remove();
        this.#sections = this.#sections.filter((section2) => section2.name !== name);
      }
    }
    rerender() {
      this.#settingsPanelElement.innerHTML = "";
      this.#sections.forEach((section) => {
        this.#settingsPanelElement.appendChild(section.getElement());
      });
    }
    #enrichSettingsPanel() {
      const settingsListElement = this.#settingsPanelContainerElement.querySelector(".settings-list");
      const settingsList = settingsListElement.querySelectorAll(":scope > *");
      const settingsPanel2 = document.createElement("div");
      this.#settingsPanelElement = settingsPanel2;
      settingsPanel2.classList.add("settings-panel");
      this.#settingsPanelContainerElement.appendChild(settingsPanel2);
      this.#settingsPanelContainerElement.appendChild(Object.assign(document.createElement("div"), {
        className: "settings-panel-footer",
        innerHTML: '<div><i class="fas fa-info-circle"></i> <span>Shift click to toggle all sections</span></div>'
      }));
      window.addEventListener("load", () => {
        setTimeout(() => {
          const settings3 = new Settings_default();
          if (settings3.get("settingsCompatibilityMode")) {
            this.rerender();
          } else {
            let currentSection = null;
            let sections = [];
            settingsList.forEach((el) => {
              if (el.tagName === "STRONG") {
                if (currentSection) {
                  sections.push(currentSection);
                  currentSection = null;
                }
                currentSection = SettingsSection_default.fromHeaderElement(el);
              } else {
                if (!currentSection) {
                  console.error("Found setting without section: ", el);
                  currentSection = new SettingsSection_default("Other");
                }
                const settingsRow = settingsRowFromElement(el);
                currentSection.addSettingsRow(settingsRow);
              }
            });
            if (currentSection) {
              sections.push(currentSection);
            }
            sections.forEach((section) => {
              settingsPanel2.appendChild(section.getElement());
            });
            settingsListElement.remove();
            this.#sections = [...sections, ...this.#sections];
            this.rerender();
          }
        }, 100);
      });
    }
    #addSettingsNotificationElement() {
      const settingsNotificationContainer = Object.assign(document.createElement("div"), {
        id: "settings-notification-container"
      });
      const settingsNotificationElement = document.createElement("div");
      settingsNotificationElement.classList.add("notification");
      settingsNotificationElement.innerHTML = `
            <span class="message-icon"><i class="fas fa-circle-info"></i></span>
            <span class="message"></span>
            <button class="btn btn-primary">Reload</button>
        `;
      settingsNotificationElement.querySelector("button").addEventListener("click", () => {
        window.location.reload();
      });
      settingsNotificationContainer.appendChild(settingsNotificationElement);
      document.body.appendChild(settingsNotificationContainer);
      this.#notificationElement = settingsNotificationContainer;
    }
    showNotification(message) {
      this.#notificationElement.classList.add("visible");
      this.#notificationElement.querySelector(".message").innerText = message;
    }
    hideNotification() {
      this.#notificationElement.classList.remove("visible");
    }
    #populateKUPSettings() {
      const section = new SettingsSection_default("Kbin Usability Pack");
      section.addSettingsRows([
        new SettingsRowBoolean_default("Show URL subheader", {
          id: "showUrlSubheader",
          description: "Show the link URL beneath the title",
          value: true
        }),
        new SettingsRowBoolean_default("Remove comment anchor", {
          id: "removeCommentAnchor",
          description: "Make the comment links go to the top of the article instead of the comments section.",
          requireReload: true,
          value: true
        }),
        new SettingsRowBoolean_default("Show article preview button", {
          id: "showArticlePreview",
          value: true
        }),
        new SettingsRowBoolean_default("Infinite comment scroll", {
          id: "infiniteCommentScroll",
          description: "Automatically load more comments when scrolling to the bottom of the page.",
          requireReload: true
        }),
        new SettingsRowBoolean_default("Add anchor to comment sorting options", {
          id: "addOptionsAnchor",
          description: "Scroll to the comment section after reloading when clicking the comment sorting buttons."
        }),
        new SettingsRowBoolean_default("Always expand settings sections", {
          id: "alwaysExpandSettingsSections",
          description: "Expand the settings sections by default."
        }),
        new SettingsRowBoolean_default("Experimental mobile UI", {
          id: "alternativeMobileUI",
          description: "Use the alternative experimental mobile UI.",
          requireReload: true
        }),
        new SettingsRowBoolean_default("Open articles in new tab", {
          id: "openArticleInNewTab"
        }),
        new SettingsRowBoolean_default("Settings compatibility mode", {
          id: "settingsCompatibilityMode",
          description: "Increase compatibility with other scripts that modify the settings panel.",
          requireReload: true
        })
      ]);
      this.addSection(section);
    }
  };
  var SettingsPanel_default = SettingsPanel;

  // src/index.js
  document.body.classList.add("KUP-injected");
  document.KUP = {};
  if (!isNewKbinVersion()) {
    document.body.classList.add("old-version");
  }
  var articlesHandler = new ArticlesHandler_default();
  var navigator = new Navigator_default();
  var articlePage = new ArticlePage_default();
  var settingsPanel = new SettingsPanel_default();
  var settings2 = new Settings_default();
  articlesHandler.init();
  navigator.init();
  articlePage.init();
  settingsPanel.init();
  settings2.apply();
})();
})();
