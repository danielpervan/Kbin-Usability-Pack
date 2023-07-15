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
      inject_style("body:not(.KUP-setting-showArticlePreview) .show-article-preview{display:none!important}.media-preview-content{position:relative;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;overflow:hidden}#content article.entry .no-image-placeholder{place-self:center}#content article.entry aside.meta.entry__meta{line-height:2em}#content article.entry aside.meta.entry__meta img{margin-right:.25rem;margin-left:.25rem}#content article.entry .magazine-inline{white-space:nowrap}#content article.entry .magazine-inline .mag-instance{font-weight:100}#content article.entry.selected{border:var(--kbin-meta-border)}#content article.entry>figure{align-self:center}#content article.entry>figure img{object-position:center}#content article.entry aside.vote{place-content:center}#content article.entry button.show-preview,#content article.entry button.preview-button{border:var(--kbin-button-primary-border);color:var(--kbin-button-primary-text-color);background:var(--kbin-button-primary-bg);padding:.5em;cursor:pointer}#content article.entry button.show-preview:hover,#content article.entry button.preview-button:hover{color:var(--kbin-button-primary-text-hover-color);background:var(--kbin-button-primary-hover-bg)}.preview-outer{grid-area:preview}.preview-outer .preview-inner{position:relative;display:none;border-top:var(--kbin-meta-border)}.preview-outer .preview-inner.show{display:block}.preview-outer .preview-inner .loading{position:relative;height:3em;z-index:1;display:flex;justify-content:center;align-items:center;animation:showPreviewLoading .25s ease-in-out}.preview-outer .preview-inner .article-preview-content{position:relative;padding:1em}.preview-outer .preview-inner .article-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}.preview-outer .preview-inner .media-preview-content{position:relative;border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;overflow:hidden}.preview-outer .preview-inner .media-preview-content img{max-width:100%;max-height:100%;min-width:100px;object-fit:contain;vertical-align:middle}.preview-outer .preview-inner .media-preview-content img.animateMinResize{animation:animateMinResize .25s ease-out;transform-origin:left top}@keyframes animateMinResize{0%{opacity:1;transform:scale(1)}33%{opacity:.8;transform:scale(.95)}66%{opacity:1;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}.preview-outer .preview-inner .media-preview-content.oembed-embed{position:relative;overflow:hidden;max-width:100%;height:100vh;margin:0 auto}.preview-outer .preview-inner .media-preview-content.oembed-embed iframe{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.youtube-embed{position:relative;overflow:hidden;max-width:100%;max-height:100vh;margin:0 auto;aspect-ratio:16/9}.preview-outer .preview-inner .media-preview-content.youtube-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}@keyframes showPreviewLoading{0%{opacity:0;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes articlePreviewFadeIn{0%{opacity:0;transform:translateY(-.5em)}to{opacity:1}}@media (max-width: 689.98px){#content article.entry aside.vote{place-self:center}}article.entry .bookmark-button{transition:all .25s ease-in-out}article.entry .bookmark-button.bookmarked{color:var(--kbin-button-primary-bg)}");
    }
  });

  // src/Classes/Article/Article_alt_ui.scss
  var Article_alt_ui_exports = {};
  var init_Article_alt_ui = __esm({
    "src/Classes/Article/Article_alt_ui.scss"() {
      init_index();
      inject_style('body.KUP-setting-alternativeMobileUI article.entry .meta-content{display:flex;flex-flow:row;justify-content:flex-start;align-items:center;gap:1em;flex-wrap:wrap;width:100%;margin:auto;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .meta-content img{width:20px;height:20px;aspect-ratio:1}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer{vertical-align:middle;display:grid;grid-auto-columns:max-content;grid-auto-flow:column;padding:.5rem 0}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer .timeago{margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .meta-content .meta-icon{font-size:20px;margin-right:.25rem;margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry footer{z-index:1}body.KUP-setting-alternativeMobileUI article.entry footer menu{align-items:center}body.KUP-setting-alternativeMobileUI article.entry footer menu .boost-link-removed{overflow:hidden;height:0;width:0;visibility:hidden;position:absolute}body.KUP-setting-alternativeMobileUI article.entry .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .footer-button{font-size:1.4em;vertical-align:middle;white-space:nowrap}body.KUP-setting-alternativeMobileUI article.entry .footer-button.active{color:var(--kbin-button-primary-bg)}body.KUP-setting-alternativeMobileUI article.entry .footer-button.more-link{width:1.5em;height:100%}body.KUP-setting-alternativeMobileUI #middle.page-entry-single article.entry{grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry{grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI.rounded-edges .page-entry-single article.entry:not(.no-image) .media-preview-content{border-radius:.5rem .5rem 0 0}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image){grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image):not(.no-media-preview) figure{display:none}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "preview preview" "body body"}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry.no-image{grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body";grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry>figure{border-top-left-radius:var(--kbin-rounded-edges-radius)!important;border-top-right-radius:var(--kbin-rounded-edges-radius)!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content .media-preview-li{display:none}body.KUP-setting-alternativeMobileUI.rounded-edges #middle:not(.page-entry-single) article.entry:not(.no-image) .media-preview img{border-bottom-left-radius:var(--kbin-rounded-edges-radius);border-bottom-right-radius:var(--kbin-rounded-edges-radius)}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry{margin-bottom:2rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry .media-preview{margin-bottom:-.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content .no-image-placeholder{display:block}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image){grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry.no-image{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview";grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI #content article.entry{padding-bottom:0}body.KUP-setting-alternativeMobileUI #content article.entry .meta-content{justify-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview{overflow:hidden;max-height:90vh;padding:0}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview img{max-width:100%}body.KUP-setting-alternativeMobileUI #content article.entry .vote{margin-right:.5rem;margin-left:.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .entry__meta{text-align:center}body.KUP-setting-alternativeMobileUI #content article.entry footer{text-align:center;border-top:var(--kbin-section-border);margin-top:1rem;padding-top:.8em;padding-bottom:.8em}body.KUP-setting-alternativeMobileUI #content article.entry footer menu{place-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry menu{grid-auto-columns:auto}body.KUP-setting-alternativeMobileUI #content article.entry menu .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image){grid-template-columns:auto min-content;padding-top:0}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure img{width:100%;max-width:100%;max-height:90vh;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}}body.KUP-setting-alternativeMobileUI.rounded-edges #middle main#main.view-compact #content article.entry figure{border-top-right-radius:var(--kbin-rounded-edges-radius)!important}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry{grid-template-areas:"vote title image" "vote meta image" "vote footer image" "body body body" "preview preview preview"}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry .url-subheader{margin-top:0;margin-bottom:0}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry .meta-content .meta-item{padding:0}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry>figure{align-self:flex-start;max-height:min(90vh,10rem)}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry>figure img{position:relative;vertical-align:middle}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry .no-image-placeholder{height:fit-content;padding:1rem 0;place-self:flex-start center;width:4rem}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry{grid-template-areas:"title title vote" "meta meta image" "footer footer image" "body body body" "preview preview preview";grid-template-columns:1fr min-content min-content}body.KUP-setting-alternativeMobileUI #middle main#main.view-compact #content article.entry>figure{height:fit-content;margin-left:.5rem;margin-right:.5rem;width:fit-content}}body.KUP-setting-alternativeMobileUI #middle.page-entry-single main#main.view-compact #content article.entry figure{height:fit-content}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI #middle.page-entry-single main#main.view-compact #content article.entry:not(.no-image){grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"}body.KUP-setting-alternativeMobileUI #middle.page-entry-single main#main.view-compact #content article.entry.no-media-preview:not(.no-image){grid-template-areas:"title title vote" "meta meta image" "footer footer image" "body body body"}}');
    }
  });

  // src/Classes/Article/Article_standard_ui.scss
  var Article_standard_ui_exports = {};
  var init_Article_standard_ui = __esm({
    "src/Classes/Article/Article_standard_ui.scss"() {
      init_index();
      inject_style('#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"}#content article.entry:not(.no-image){grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important;grid-template-columns:min-content min-content auto}@media (max-width: 689.98px){#content article.entry:not(.no-image){grid-template-areas:"image image" "vote title" "vote shortDesc" "meta meta" "footer footer" "body body" "preview preview"!important;grid-template-columns:min-content 1fr}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"!important;grid-template-columns:min-content 1fr}}main#main.view-compact article.entry{grid-template-areas:"vote title image" "vote meta image" "vote footer image" "body body body" "preview preview preview"!important;grid-template-columns:min-content 1fr min-content}main#main.view-compact article.entry.no-image{grid-template-areas:"vote title" "vote meta" "vote footer" "body body" "preview preview"!important}@media (max-width: 689.98px){main#main.view-compact article.entry{grid-template-areas:"title title vote" "meta meta image" "footer footer image" "body body body" "preview preview preview"!important;grid-template-columns:1fr min-content min-content}main#main.view-compact article.entry figure img{object-fit:contain}main#main.view-compact article.entry.no-image{grid-template-areas:"title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}}');
    }
  });

  // src/Classes/Article/Article_old.scss
  var Article_old_exports = {};
  var init_Article_old = __esm({
    "src/Classes/Article/Article_old.scss"() {
      init_index();
      inject_style('body:not(.KUP-setting-showArticlePreview) .show-article-preview{display:none!important}#content article.entry aside.meta.entry__meta{line-height:2em}#content article.entry aside.meta.entry__meta img{margin-right:.25rem;margin-left:.25rem}#content article.entry .magazine-inline{white-space:nowrap}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"}#content article.entry:not(.no-image){grid-template-areas:"vote image title" "vote image shortDesc" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important;grid-template-columns:min-content min-content auto}#content article.entry.selected{border:var(--kbin-meta-border)}#content article.entry>figure{margin:0 1rem 0 0;align-self:center}#content article.entry>figure img{max-width:180px;max-height:100%;width:auto;height:auto;object-fit:contain}#content article.entry aside.vote{place-content:center}#content article.entry button.show-preview,#content article.entry button.preview-button{border:1px solid var(--kbin-section-text-color);padding:.5em;background:var(--kbin-bg)}@media (max-width: 689.98px){main#main.view-compact article.entry figure{margin-left:-.5em;margin-right:-.5em}}main#main.view-compact article.entry{grid-template-areas:"vote image title" "vote image meta" "vote image footer" "body body body" "preview preview preview"!important}main#main.view-compact article.entry.no-image{grid-template-areas:"vote title" "vote meta" "vote footer" "body body" "preview preview"!important}main#main.view-compact article.entry figure{margin-right:1rem}main#main.view-compact article.entry figure img{max-height:100px;max-width:120px}@media (max-width: 689.98px){main#main.view-compact article.entry{grid-template-areas:"image vote" "title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}main#main.view-compact article.entry figure img{object-fit:contain}main#main.view-compact article.entry.no-image{grid-template-areas:"title vote" "meta vote" "footer vote" "body body" "preview preview"!important;grid-template-columns:auto min-content}}@media (max-width: 991.98px){#content article.entry:not(.no-image){grid-template-areas:"image image image" "vote title title" "vote shortDesc shortDesc" "vote meta meta" "vote footer footer" "body body body" "preview preview preview"!important}}@media (max-width: 689.98px){#content article.entry:not(.no-image){grid-template-areas:"vote image" "title title" "shortDesc shortDesc" "meta meta" "footer footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry.no-image{grid-template-areas:"vote title" "vote shortDesc" "vote meta" "vote footer" "body body" "preview preview"!important;grid-template-columns:min-content auto}#content article.entry>figure{margin:0}#content article.entry aside.vote{place-self:center}}.preview-outer{grid-area:preview}.preview-outer .preview-inner{position:relative;display:none;border-top:var(--kbin-meta-border);padding:1em}.preview-outer .preview-inner.show{display:block}.preview-outer .preview-inner .loading{position:relative;height:3em;z-index:1;display:flex;justify-content:center;align-items:center;animation:showPreviewLoading .25s ease-in-out}.preview-outer .preview-inner .article-preview-content{position:relative}.preview-outer .preview-inner .article-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}.preview-outer .preview-inner .media-preview-content{position:relative}.preview-outer .preview-inner .media-preview-content img{max-width:100%;max-height:100%;min-width:100px;object-fit:contain}.preview-outer .preview-inner .media-preview-content img.animateMinResize{animation:animateMinResize .25s ease-out;transform-origin:left top}@keyframes animateMinResize{0%{opacity:1;transform:scale(1)}33%{opacity:.8;transform:scale(.95)}66%{opacity:1;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}.preview-outer .preview-inner .media-preview-content.oembed-embed{position:relative;overflow:hidden;max-width:100%;height:100vh;margin:0 auto}.preview-outer .preview-inner .media-preview-content.oembed-embed iframe{position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.youtube-embed{position:relative;overflow:hidden;max-width:100%;max-height:100vh;margin:0 auto;aspect-ratio:16/9}.preview-outer .preview-inner .media-preview-content.youtube-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.preview-outer .preview-inner .media-preview-content.loaded{animation:articlePreviewFadeIn .5s ease-in-out}@keyframes showPreviewLoading{0%{opacity:0;transform:scale(.8)}50%{opacity:1;transform:scale(1.15)}80%{transform:scale(.9)}to{transform:scale(1)}}@keyframes articlePreviewFadeIn{0%{opacity:0;transform:translateY(-.5em)}to{opacity:1}}@media (min-width: 689.98px){body.KUP-setting-alternativeMobileUI #middle main#main.view-compact article.entry>figure{margin:0 1rem 0 0;min-width:100px}}body.KUP-setting-alternativeMobileUI.rounded-edges #middle main#main.view-compact article.entry>figure{border-radius:.5rem}@media (min-width: 991.98px){body.KUP-setting-alternativeMobileUI #content article.entry>figure{background-image:none!important}}@media (max-width: 991.98px){body.KUP-setting-alternativeMobileUI.rounded-edges #middle article.entry>figure{border-top-left-radius:.5rem;border-top-right-radius:.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) article.entry>figure{margin-top:-1rem;margin-left:-.5rem;margin-right:-.5rem}body.KUP-setting-alternativeMobileUI #middle.page-entry-single article.entry>figure{margin-top:-2rem;margin-left:-.5rem;margin-right:-.5rem}body.KUP-setting-alternativeMobileUI #content article.entry>figure{height:110px;background-position:center;background-repeat:no-repeat;background-size:cover}body.KUP-setting-alternativeMobileUI #content article.entry>figure a img{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);max-width:100%;width:100%;height:100%;object-fit:contain!important;object-position:center}}body.KUP-setting-alternativeMobileUI article.entry .meta-link{font-size:1.4em}body.KUP-setting-alternativeMobileUI article.entry .meta-content{display:flex;flex-flow:row;justify-content:space-around;align-items:center;flex-wrap:wrap;width:100%;margin:auto;vertical-align:middle}body.KUP-setting-alternativeMobileUI article.entry .meta-content .mag-instance{font-weight:100}body.KUP-setting-alternativeMobileUI article.entry .meta-content img{width:20px;height:20px;aspect-ratio:1}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer{vertical-align:middle;display:grid;grid-auto-columns:max-content;grid-auto-flow:column;padding:.5rem 0}body.KUP-setting-alternativeMobileUI article.entry .meta-content .time-outer .timeago{margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .meta-content .meta-icon{font-size:20px;margin-right:.25rem;margin-left:.25rem}body.KUP-setting-alternativeMobileUI article.entry .boost-link-removed{overflow:hidden;height:0;width:0;visibility:hidden;position:absolute}body.KUP-setting-alternativeMobileUI article.entry .footer-button{font-size:1.4em;vertical-align:middle;white-space:nowrap}body.KUP-setting-alternativeMobileUI article.entry .footer-button.active{color:var(--kbin-button-primary-bg)}body.KUP-setting-alternativeMobileUI article.entry .footer-button.more-link{width:1.5em;height:100%}@media (max-width: 689.98px){body.KUP-setting-alternativeMobileUI.rounded-edges .page-entry-single article.entry:not(.no-image) .media-preview{border-top-left-radius:.5rem;border-top-right-radius:.5rem}body.KUP-setting-alternativeMobileUI.rounded-edges #middle article.entry>figure{border-top-left-radius:.5rem;border-top-right-radius:.5rem}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image){grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image):not(.no-media-preview) figure{display:none}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "preview preview" "body body"!important}body.KUP-setting-alternativeMobileUI .page-entry-single #content article.entry.no-image{grid-template-areas:"preview preview" "title vote" "shortDesc shortDesc" "meta meta" "footer footer" "image image" "body body"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI .page-entry-single #content .media-preview-li{display:none}body.KUP-setting-alternativeMobileUI.rounded-edges #middle:not(.page-entry-single) article.entry:not(.no-image) .media-preview img{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry{margin-bottom:2rem}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image){grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry:not(.no-image).no-media-preview{grid-template-areas:"image image" "title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important}body.KUP-setting-alternativeMobileUI #middle:not(.page-entry-single) #content article.entry.no-image{grid-template-areas:"title vote" "shortDesc vote" "meta meta" "body body" "footer footer" "preview preview"!important;grid-template-columns:auto min-content}body.KUP-setting-alternativeMobileUI #content article.entry{padding-bottom:0}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview{overflow:hidden;max-height:90vh;padding:0;margin:-.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .media-preview img{max-width:100%}body.KUP-setting-alternativeMobileUI #content article.entry .vote{margin-right:0;margin-left:.5rem}body.KUP-setting-alternativeMobileUI #content article.entry .entry__meta{text-align:center}body.KUP-setting-alternativeMobileUI #content article.entry footer{text-align:center;border-top:var(--kbin-section-border);margin-top:1rem;padding-top:.8em;padding-bottom:.8em}body.KUP-setting-alternativeMobileUI #content article.entry footer menu{place-content:space-around}body.KUP-setting-alternativeMobileUI #content article.entry menu{grid-auto-columns:auto}body.KUP-setting-alternativeMobileUI #content article.entry menu .fa-solid.fa-thumbtack{font-size:1.4em;vertical-align:middle}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image){grid-template-columns:auto min-content;padding-top:0}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:none}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure{display:block;margin-left:-.5rem;margin-right:-.5rem;margin-top:0;height:110px}body.KUP-setting-alternativeMobileUI #content article.entry:not(.no-image)>figure img{width:100%;height:100%;max-width:100%;max-height:90vh;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;object-fit:contain!important}}');
    }
  });

  // src/Classes/User/User.js
  var User = class {
    username;
    avatar;
    reputation;
    constructor(username, avatar = null) {
      this.username = username;
      this.avatar = avatar;
    }
    fetchData() {
      return fetch("/ajax/fetch_user_popup/" + this.username).then((response) => response.text()).then((text) => {
        const { html } = JSON.parse(text);
        let dom = new DOMParser().parseFromString(html, "text/html");
        this.avatar = dom.querySelector("img").src;
        this.reputation = html.match(/Reputation points: (\d)/)?.[0] ?? null;
      });
    }
  };
  var User_default = User;

  // src/Classes/Settings.js
  var Settings = class {
    constructor() {
    }
    get(key) {
      const settings2 = this.getAll();
      if (settings2[key] === void 0) {
        return null;
      }
      return settings2[key];
    }
    getAll() {
      const data = localStorage.getItem("kup-settings");
      let settings2 = {};
      if (data) {
        settings2 = JSON.parse(data);
      }
      if (settings2.showUrlSubheader === void 0) {
        settings2.showUrlSubheader = true;
      }
      if (settings2.removeCommentAnchor === void 0) {
        settings2.removeCommentAnchor = true;
      }
      if (settings2.showArticlePreview === void 0) {
        settings2.showArticlePreview = true;
      }
      if (settings2.infiniteCommentScroll === void 0) {
        settings2.infiniteCommentScroll = true;
      }
      if (settings2.addOptionsAnchor === void 0) {
        settings2.addOptionsAnchor = true;
      }
      if (settings2.fixCSS === void 0) {
        settings2.fixCSS = true;
      }
      if (settings2.enableBookmarks === void 0) {
        settings2.enableBookmarks = true;
      }
      return settings2;
    }
    replace(settings2, sendEvent = true, apply = true) {
      localStorage.setItem("kup-settings", JSON.stringify(settings2));
      if (apply) {
        this.apply();
      }
      if (sendEvent) {
        window.dispatchEvent(new CustomEvent("kup-settings-changed"));
      }
    }
    save(key, value, apply = true) {
      const settings2 = this.getAll();
      const oldValue = settings2[key];
      settings2[key] = value;
      localStorage.setItem("kup-settings", JSON.stringify(settings2));
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
      const settings2 = this.getAll();
      for (const [key, value] of Object.entries(settings2)) {
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

  // src/Classes/Notification/Notification.scss
  init_index();
  inject_style("#kup-notification-container{position:fixed;bottom:0;left:0;right:0;z-index:1000;padding:1em;display:none;flex-direction:column;align-items:center;pointer-events:none}#kup-notification-container.visible{display:flex}#kup-notification-container .notification{display:none;pointer-events:initial;margin-bottom:1em;padding:1em;border-radius:.25rem;background-color:var(--kbin-bg);box-shadow:var(--kbin-shadow);border:var(--kbin-section-border);flex-direction:row;align-items:center;justify-content:space-between;animation:showNotification .25s ease-in-out;transition:width .25s ease-in-out,font-size .25s ease-in-out}#kup-notification-container .notification.visible{display:flex}#kup-notification-container .notification.hidden{animation:hideNotification .5s ease-in-out;animation-fill-mode:forwards}@keyframes showNotification{0%{opacity:0;transform:translateY(1em)}to{opacity:1;transform:translateY(0)}}@keyframes hideNotification{0%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(1em);font-size:1em}to{opacity:0;font-size:0}}#kup-notification-container .notification .message,#kup-notification-container .notification .message-icon{margin-right:1em}#kup-notification-container .notification button{background:var(--kbin-button-primary-bg);color:var(--kbin-button-primary-text-color);border:var(--kbin-button-primary-border);cursor:pointer}#kup-notification-container .notification button:hover{background:var(--kbin-button-primary-hover-bg);color:var(--kbin-button-primary-hover-text-color)}");

  // src/Classes/Notification/NotificationHandler.js
  var NotificationHandler = class _NotificationHandler {
    static #instance;
    #containerElement;
    #activeNotifications;
    static TYPES = {
      INFO: "info",
      ERROR: "error",
      SUCCESS: "success",
      WARNING: "warning"
    };
    static ACTION_TYPES = {
      RELOAD: "reload",
      HIDE: "hide",
      NEVER_SHOW: "never-show",
      NONE: "none"
    };
    constructor() {
      this.#activeNotifications = [];
    }
    static getInstance() {
      if (!_NotificationHandler.#instance) {
        _NotificationHandler.#instance = new _NotificationHandler();
        _NotificationHandler.#instance.init();
      }
      return _NotificationHandler.#instance;
    }
    createNotification(message, type = _NotificationHandler.TYPES.INFO, id = null, action = _NotificationHandler.ACTION_TYPES.NONE, options = { delay: 5e3 }) {
      const { delay } = options || {};
      if (!this.#containerElement) {
        console.error("NotificationHandler not initialised");
        return;
      }
      this.#containerElement.classList.add("visible");
      let notificationElement;
      if (id && this.#activeNotifications[id]) {
        notificationElement = this.#activeNotifications[id];
      } else {
        notificationElement = document.createElement("div");
        notificationElement.classList.add("notification", "visible");
        this.#activeNotifications[id] = notificationElement;
        this.#containerElement.insertBefore(notificationElement, this.#containerElement.firstChild);
      }
      let messageElement = Object.assign(document.createElement("span"), {
        className: "message",
        innerText: message
      });
      let icon;
      let color;
      switch (type) {
        case _NotificationHandler.TYPES.INFO:
          icon = "fas fa-circle-info";
          color = "var(--kbin-button-primary-bg)";
          break;
        case _NotificationHandler.TYPES.ERROR:
          icon = "fas fa-circle-xmark";
          color = "var(--kbin-danger-color)";
          break;
        case _NotificationHandler.TYPES.SUCCESS:
          icon = "fas fa-check";
          color = "var(--kbin-success-color)";
          break;
        case _NotificationHandler.TYPES.WARNING:
          icon = "fas fa-triangle-exclamation";
          color = "#f0ad4e";
          break;
        default:
          icon = "fas fa-circle-info";
          color = "var(--kbin-button-primary-bg)";
          break;
      }
      let button;
      if (typeof action === "object") {
        const hideOnClick = action.hideOnClick === void 0 ? true : action.hideOnClick;
        button = Object.assign(document.createElement("button"), {
          classList: ["btn btn-primary"],
          innerText: action.text
        });
        button.addEventListener("click", () => {
          if (hideOnClick) {
            this.hideNotification(id);
          }
          action.callback();
        });
      } else {
        switch (action) {
          case _NotificationHandler.ACTION_TYPES.RELOAD:
            button = Object.assign(document.createElement("button"), {
              classList: ["btn btn-primary"],
              innerText: "Reload"
            });
            button.addEventListener("click", () => {
              messageElement.innerText = "Reloading...";
              window.location.reload();
            });
            break;
          case _NotificationHandler.ACTION_TYPES.HIDE:
            button = Object.assign(document.createElement("button"), {
              classList: ["btn btn-primary"],
              innerText: "Close"
            });
            button.addEventListener("click", () => {
              this.hideNotification(id);
            });
            break;
          case _NotificationHandler.ACTION_TYPES.NEVER_SHOW:
            button = Object.assign(document.createElement("button"), {
              classList: ["btn btn-primary"],
              innerText: "Never show again"
            });
            button.addEventListener("click", () => {
              this.hideNotification(id);
              const settings2 = new Settings_default();
              settings2.save("hide-notification-" + id, true);
            });
            break;
          default:
            button = null;
            setTimeout(() => {
              this.hideNotification(id);
            }, delay);
            break;
        }
      }
      notificationElement.innerHTML = `
            <span class="message-icon" style="color:${color}"><i class="${icon}"></i></span>
        `;
      notificationElement.appendChild(messageElement);
      if (button) {
        notificationElement.appendChild(button);
      }
      return notificationElement;
    }
    hideNotification(id) {
      if (this.#activeNotifications[id]) {
        this.#activeNotifications[id].classList.add("hidden");
        const element = this.#activeNotifications[id];
        this.#activeNotifications[id].addEventListener("animationend", () => {
          element.remove();
        });
        this.#activeNotifications[id] = null;
      }
      if (Object.keys(this.#activeNotifications).length === 0) {
        this.#containerElement.classList.remove("visible");
      }
    }
    init() {
      const notificationContainer = Object.assign(document.createElement("div"), {
        id: "kup-notification-container"
      });
      document.body.appendChild(notificationContainer);
      this.#containerElement = notificationContainer;
    }
  };
  var NotificationHandler_default = NotificationHandler;

  // src/Classes/Notification/LocalNotification.js
  var LocalNotification = class _LocalNotification {
    static TYPES = NotificationHandler_default.TYPES;
    static ACTION_TYPES = NotificationHandler_default.ACTION_TYPES;
    #element = null;
    #notificationHandler;
    /**
     * Create a new notification
     * @param message {string}
     * @param options {{[type=LocalNotification.TYPES.INFO]: LocalNotification.TYPES, [action=LocalNotification.ACTION_TYPES.NONE]: LocalNotification.ACTION_TYPES | function, [id]: string}}
     */
    constructor(message, options = {
      type: _LocalNotification.TYPES.INFO,
      action: _LocalNotification.ACTION_TYPES.NONE,
      id: null
    }) {
      const { type, action, id } = options || {};
      this.type = type;
      this.action = action;
      this.id = id || Math.round(Math.random() * 1e17);
      this.message = message;
      this.#notificationHandler = NotificationHandler_default.getInstance();
    }
    /**
     * Show the notification
     */
    show() {
      this.#element = this.#notificationHandler.createNotification(this.message, this.type, this.id, this.action);
    }
    /**
     * Show a new notification
     * @param message
     * @param options {{[type=LocalNotification.TYPES.INFO]: LocalNotification.TYPES, [action=LocalNotification.ACTION_TYPES.NONE]: LocalNotification.ACTION_TYPES | function, [id]: string}}
     */
    static show(message, options = {
      type: _LocalNotification.TYPES.INFO,
      action: _LocalNotification.ACTION_TYPES.NONE,
      id: null
    }) {
      const notification = new _LocalNotification(message, options);
      notification.show();
    }
  };
  var LocalNotification_default = LocalNotification;

  // src/Classes/Bookmark/BookmarkHandler.scss
  init_index();
  inject_style('.rounded-edges .modal{border-radius:var(--kbin-rounded-edges-radius)}.mobile-bookmarks-button{display:none}@media (max-width: 500px){#header .bookmark-menu-button{display:none}.mobile-bookmarks-button{display:block}}.modal-background{background:rgba(0,0,0,.5);position:fixed;top:0;left:0;z-index:5;width:100%;height:100%;justify-content:center;align-items:center;display:none;backdrop-filter:blur(2px);animation:showBookmarkModalBackground .25s ease-in-out}@keyframes showBookmarkModalBackground{0%{opacity:0}to{opacity:1}}.modal-background.show{display:flex}.modal-background .modal.modal-bookmarks{width:100%;max-width:40rem;min-width:20rem;position:fixed;top:4rem;max-height:calc(100% - 5rem);background:var(--kbin-section-bg);border:var(--kbin-section-border);padding:1em;overflow:auto;animation:showBookmarkModal .25s ease-in-out}@keyframes showBookmarkModal{0%{opacity:0;transform:translateY(-1em)}75%{opacity:1;transform:translateY(.1em)}to{opacity:1;transform:translateY(0)}}.modal-background .modal.modal-bookmarks .modal-header{display:flex;justify-content:space-around;align-items:center;margin-bottom:1em;text-align:center;background:var(--kbin-section-bg);position:sticky;top:-1em}.modal-background .modal.modal-bookmarks .modal-header h2{margin:0}.modal-background .modal.modal-bookmarks .modal-close{font-size:28px;cursor:pointer;position:absolute;top:.5rem;right:1rem}.modal-background .modal.modal-bookmarks .modal-content{animation:showModalContent .25s .1s ease-in-out;animation-fill-mode:backwards;padding:1em}.modal-background .modal.modal-bookmarks .modal-content .bookmarks-menu-item.placeholder{justify-content:center;align-items:center;display:flex;flex-direction:column;height:100%;width:100%;font-size:1.5em;opacity:.5}@keyframes showModalContent{0%{transform:translateY(-1em)}75%{transform:translateY(.1em)}to{transform:translateY(0)}}.modal-background .modal.modal-bookmarks .modal-content ul{list-style:none;padding:0;margin:0}.modal-background .modal.modal-bookmarks .modal-content ul li{display:grid;grid-template-columns:auto min-content;width:100%;gap:2em;grid-template-areas:"link actions";justify-content:space-between;align-items:center;padding:.5em 0;border-bottom:var(--kbin-section-border);margin-bottom:.5em}.modal-background .modal.modal-bookmarks .modal-content ul li.hide{animation:hideBookmarkItem .25s ease-in-out;animation-fill-mode:forwards}@keyframes hideBookmarkItem{0%{overflow:hidden;opacity:1;max-height:5em}to{opacity:0;max-height:0;overflow:hidden;display:none}}.modal-background .modal.modal-bookmarks .modal-content ul li:last-child{border-bottom:none;margin-bottom:0}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-link{grid-area:link;display:grid;grid-template-areas:"title" "magazine";align-items:center;transition:color .25s ease-in-out}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;grid-area:title;font-weight:700;margin:0}@media (max-width: 689.98px){.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-title{font-size:.8em}}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-magazine{grid-area:magazine;font-weight:100;color:var(--kbin-text-color-secondary);margin:0}@media (max-width: 689.98px){.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-magazine{font-size:.8em}}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-actions{grid-area:actions;display:flex;justify-content:space-between;align-items:center}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-actions .bookmark-action{cursor:pointer;font-size:1.25em;color:var(--kbin-text-color-secondary);transition:color .25s ease-in-out}.modal-background .modal.modal-bookmarks .modal-content ul li .bookmark-actions .bookmark-action:hover{color:var(--kbin-text-color)}');

  // src/Classes/Bookmark/Bookmark.js
  var Bookmark = class {
    constructor(title, url, articleId, magazine, instanceName = null) {
      this.title = title;
      this.magazine = magazine;
      this.url = url;
      this.instanceName = instanceName;
      this.articleId = articleId;
    }
    getElement() {
      let mag = this.magazine;
      if (this.instanceName) {
        mag += "@" + this.instanceName;
      }
      const li = Object.assign(document.createElement("li"), {
        className: "bookmarks-menu-item",
        innerHTML: `<a href="${this.url}" class="bookmark-link"><span class="bookmark-title">${this.title}</span><span class="bookmark-magazine">${mag}</span></a>`
      });
      const actions = Object.assign(document.createElement("div"), {
        className: "bookmark-actions"
      });
      const removeButton = Object.assign(document.createElement("a"), {
        className: "bookmark-remove bookmark-action",
        innerHTML: '<i class="fas fa-check"></i>',
        href: "#"
      });
      actions.appendChild(removeButton);
      li.append(actions);
      return li;
    }
  };
  var Bookmark_default = Bookmark;

  // src/Classes/Bookmark/BookmarkHandler.js
  var BookmarkHandler = class _BookmarkHandler {
    static instance;
    bookmarks = [];
    static initialised = false;
    #menuButtonContainer;
    constructor() {
      this.loadBookmarks();
      if (!_BookmarkHandler.instance) {
        _BookmarkHandler.instance = this;
      }
    }
    static getInstance() {
      if (!_BookmarkHandler.instance) {
        _BookmarkHandler.instance = new _BookmarkHandler();
        _BookmarkHandler.instance.init();
      }
      return _BookmarkHandler.instance;
    }
    init() {
      if (_BookmarkHandler.initialised) {
        console.warn("BookmarkHandler already initialised");
        return;
      }
      _BookmarkHandler.initialised = true;
      const settings2 = new Settings_default();
      if (!settings2.get("enableBookmarks")) {
        return;
      }
      this.#menuButtonContainer = Object.assign(document.createElement("li"), {
        className: "toolbar-bookmarks dropdown"
      });
      const menuButton = Object.assign(document.createElement("a"), {
        className: "bookmark-menu-button",
        href: "#",
        innerHTML: '<i class="fa fa-bookmark"></i>'
      });
      menuButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMenu();
      });
      this.#menuButtonContainer.appendChild(menuButton);
      const menu = document.querySelector(".kbin-container > menu");
      menu.insertBefore(this.#menuButtonContainer, menu.firstChild);
      const mobileMenu = document.querySelector(".options--top.mobile-close");
      const mobileMenuButton = Object.assign(document.createElement("button"), {
        className: "mobile-bookmarks-button btn btn__secondary",
        innerHTML: '<i class="fa fa-bookmark"></i>'
      });
      mobileMenuButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMenu();
      });
      mobileMenu.insertBefore(mobileMenuButton, mobileMenu.lastChild.previousSibling);
      const bookmarksMenu = Object.assign(document.createElement("ul"), {
        className: "bookmarks-menu dropdown__menu"
      });
      this.#menuButtonContainer.appendChild(bookmarksMenu);
      const modalBackground = Object.assign(document.createElement("div"), {
        className: "modal-background"
      });
      modalBackground.addEventListener("click", (e) => {
        if (e.target === modalBackground) {
          e.preventDefault();
          this.closeMenu();
        }
      });
      const menuModal = Object.assign(document.createElement("div"), {
        className: "modal modal-bookmarks",
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
      const modalCloseButton = menuModal.querySelector(".modal-close");
      modalCloseButton.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeMenu();
      });
      document.body.appendChild(modalBackground);
      modalBackground.appendChild(menuModal);
      this.populateBookmarksMenu();
      window.addEventListener("hide-all-modals", () => {
        this.closeMenu();
      });
    }
    populateBookmarksMenu() {
      const bookmarksContent = document.querySelector(".modal-bookmarks .modal-content ul");
      const bookmarks = this.getBookmarks();
      bookmarksContent.innerHTML = "";
      if (bookmarks.length > 0) {
        bookmarks.forEach((bookmark) => {
          const bookmarkElement = bookmark.getElement();
          const removeButton = bookmarkElement.querySelector(".bookmark-remove");
          removeButton.addEventListener("click", (e) => {
            e.preventDefault();
            bookmarkElement.classList.add("hide");
            bookmarkElement.addEventListener("animationend", () => {
              this.removeBookmark(bookmark);
            });
          });
          bookmarksContent.appendChild(bookmarkElement);
        });
      } else {
        const bookmarkElement = Object.assign(document.createElement("li"), {
          className: "bookmarks-menu-item placeholder",
          innerHTML: "<h3>No bookmarks</h3>"
        });
        bookmarksContent.appendChild(bookmarkElement);
      }
    }
    getBookmarks() {
      return this.bookmarks;
    }
    addBookmark(bookmark) {
      this.bookmarks.push(bookmark);
      localStorage.setItem("kup-bookmarks", JSON.stringify(this.bookmarks));
      this.populateBookmarksMenu();
      window.dispatchEvent(new CustomEvent("KUP-bookmark-changed", {
        detail: {
          bookmarked: true,
          articleUrl: bookmark.url,
          articleId: bookmark.articleId
        }
      }));
    }
    loadBookmarks() {
      const bookmarks = JSON.parse(localStorage.getItem("kup-bookmarks")) || [];
      bookmarks.forEach((bookmark) => {
        this.bookmarks.push(new Bookmark_default(bookmark.title, bookmark.url, bookmark.articleId, bookmark.magazine, bookmark.instanceName));
      });
    }
    reloadBookmarks() {
      this.bookmarks = [];
      this.loadBookmarks();
      this.populateBookmarksMenu();
    }
    toggleMenu() {
      const modalBackground = document.querySelector(".modal-background");
      if (modalBackground.classList.contains("show")) {
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
      const bookmark = this.bookmarks.find((bookmark2) => bookmark2.articleId === article.id);
      if (bookmark) {
        this.removeBookmark(bookmark);
        return false;
      } else {
        this.addBookmark(new Bookmark_default(article.subject, article.articleUrl, article.id, article.magazine, article.instanceName));
        return true;
      }
    }
    removeBookmark(bookmark) {
      this.bookmarks = this.bookmarks.filter((b) => b.articleId !== bookmark.articleId);
      localStorage.setItem("kup-bookmarks", JSON.stringify(this.bookmarks));
      this.populateBookmarksMenu();
      window.dispatchEvent(new CustomEvent("KUP-bookmark-changed", {
        detail: {
          bookmarked: false,
          articleUrl: bookmark.url,
          articleId: bookmark.articleId
        }
      }));
    }
    isBookmarked(article) {
      return this.bookmarks.find((bookmark) => bookmark.articleId === article.id);
    }
    closeMenu() {
      const modalBackground = document.querySelector(".modal-background");
      modalBackground.classList.remove("show");
    }
    showMenu() {
      window.dispatchEvent(new Event("hide-all-modals"));
      const modalBackground = document.querySelector(".modal-background");
      modalBackground.classList.add("show");
    }
  };
  var BookmarkHandler_default = BookmarkHandler;

  // src/Classes/Article/Article.js
  var settings = new Settings_default();
  if (isNewKbinVersion()) {
    Promise.resolve().then(() => init_Article());
    if (settings.get("alternativeMobileUI")) {
      Promise.resolve().then(() => init_Article_alt_ui());
    } else {
      Promise.resolve().then(() => init_Article_standard_ui());
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
    instanceName = null;
    id = null;
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
        this.applySettings();
      });
    }
    static fromFeedElement(element) {
      let article = new _Article();
      article.feedElement = element;
      article.subject = element.querySelector("header h2 a").innerText;
      article.author = new User_default(element.querySelector(".meta .user-inline").innerText, element.querySelector(".meta .user-inline img")?.src);
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
      article.subject = articleElement.querySelector("header h1 a")?.firstChild?.textContent?.trim() || articleElement.querySelector("header h1")?.firstChild?.textContent?.trim();
      article.author = new User_default(articleElement.querySelector(".meta .user-inline").innerText, articleElement.querySelector(".meta .user-inline img")?.src);
      article.date = new Date(articleElement.querySelector(".meta.entry__meta time")?.innerText);
      article.linkUrl = articleElement.querySelector("header h1>a")?.href;
      article.thumbUrl = articleElement.querySelector("figure a img")?.src;
      article.mediaUrl = articleElement.querySelector("footer button.show-preview")?.dataset?.previewUrlParam ?? articleElement.querySelector("button.show-preview")?.dataset?.previewUrlParam;
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
      const settings2 = new Settings_default();
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
        if (settings2.get("openArticleInNewTab")) {
          articleLinkElement.target = "_blank";
        } else {
          articleLinkElement.removeAttribute("target");
        }
      }
      if (commentLinkElement) {
        if (settings2.get("openArticleInNewTab")) {
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
      const settings2 = new Settings_default();
      if (settings2.get("alternativeMobileUI")) {
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
      const settings2 = new Settings_default();
      const articleElement = this.feedElement || this.articlePageElement;
      const commentsLinkElement = articleElement.querySelector("footer menu li > a.stretched-link");
      if (settings2.get("removeCommentAnchor") && this.feedElement) {
        if (commentsLinkElement?.href.endsWith("#comments")) {
          const url = new URL(commentsLinkElement?.href);
          commentsLinkElement.href = url.pathname;
        }
      }
      if (settings2.get("alternativeMobileUI")) {
        const commentsCount = parseInt(commentsLinkElement.querySelector("[data-subject-target='commentsCounter']").innerText);
        const commentsLi = commentsLinkElement?.parentElement;
        const commentsURL = commentsLinkElement?.href;
        commentsLinkElement.remove();
        const newCommentsLinkElement = document.createElement("a");
        newCommentsLinkElement.className = "comments-link footer-button";
        newCommentsLinkElement.href = commentsURL;
        if (settings2.get("openArticleInNewTab")) {
          newCommentsLinkElement.target = "_blank";
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
        const metaEl = articleElement.querySelector("aside.meta");
        if (metaEl && settings2.get("showInstanceName")) {
          const magEl = metaEl.querySelector(".magazine-inline");
          if (magEl) {
            const magImgEl = magEl.querySelector("img");
            const magName = magEl.innerText;
            if (!magName.match(/.*@.+\..+/)) {
              magEl.innerHTML = "";
              if (magImgEl) {
                magEl.append(magImgEl);
              }
              const magNameEl = document.createElement("span");
              magNameEl.className = "mag-name";
              magNameEl.innerText = magName;
              magEl.append(magNameEl);
              const magInstanceName = magEl.href.match(/\/m\/.*@(.*)/);
              if (magInstanceName && !window.location.hostname.endsWith(magInstanceName[1])) {
                const magInstanceEl = document.createElement("span");
                magInstanceEl.className = "mag-instance";
                magInstanceEl.innerText = "@" + magInstanceName[1];
                magEl.append(magInstanceEl);
              }
            } else {
              console.warn("Magazine name already modified. Are you using multiple scripts?");
              const notification = new LocalNotification_default("Can't show instance name because magazine name already modified. Are you using multiple scripts?", {
                type: LocalNotification_default.TYPES.WARNING,
                action: {
                  text: "Disable setting",
                  callback: () => {
                    settings2.save("showInstanceName", false);
                  }
                },
                id: "showInstanceName-already-modified-warning"
              });
              notification.show();
            }
          }
        }
        if (settings2.get("alternativeMobileUI")) {
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
      const thumbnailFigure = articleElement.querySelector("figure");
      const thumbnail = thumbnailFigure?.querySelector("a img");
      if (thumbnail) {
        thumbnail.style.objectFit = null;
        if (settings2.get("alternativeMobileUI") && !isNewKbinVersion()) {
          thumbnailFigure.style.backgroundImage = "url(" + thumbnail.src + ")";
        }
      }
      if (settings2.get("enableBookmarks")) {
        const footer = articleElement.querySelector("footer");
        const footerMenu = footer.querySelector("menu");
        const bookmarkHandler = BookmarkHandler_default.getInstance();
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
      const settings2 = new Settings_default();
      const element = this.feedElement ?? this.articlePageElement;
      if (!this.hasMedia) {
        element.classList.add("no-media-preview");
      }
      if (settings2.get("alternativeMobileUI") === true) {
        if (this.articlePageElement) {
          this.showMediaPreview();
        } else if (this.feedElement) {
          if (settings2.get("openArticleInNewTab")) {
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
          if (settings2.get("openArticleInNewTab")) {
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
              }, 1e3);
            }
          });
        });
        observer.observe(element);
      }
      this.#articles.push(article);
    }
    parseArticles() {
      document.querySelectorAll("#middle:not(.page-entry-single) #content article.entry").forEach((el) => {
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
      const settings2 = new Settings_default();
      if (settings2.get("showArticlePreview")) {
        document.body.classList.add("kup-show-article-preview");
      } else {
        document.body.classList.remove("kup-show-article-preview");
        this.#articles.forEach((article) => {
          article.hideArticlePreview();
        });
      }
      this.showArticlePreview = settings2.get("autoArticlePreview");
    }
  };
  var ArticlesHandler_default = ArticlesHandler;

  // src/Classes/Navigator/Navigator.scss
  init_index();
  inject_style("@media (max-width: 689.98px){.KUP-setting-fixCSS #header menu .dropdown__menu{left:auto;right:0}}");

  // src/Classes/Navigator/Navigator.js
  var Navigator = class {
    constructor() {
    }
    init() {
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
      if (!document.querySelector("#middle.page-entry-single")) {
        return;
      }
      this.url = currentURL;
      this.articleElement = document.querySelector("article.entry");
      this.article = Article_default.fromArticlePage(this.articleElement);
      this.article.enrichArticlePage();
      const settings2 = new Settings_default();
      if (settings2.get("infiniteCommentScroll")) {
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
      const settings2 = new Settings_default();
      const options = document.getElementById("options");
      if (settings2.get("addOptionsAnchor") === true) {
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
      BUTTON: "button",
      STRING: "string",
      NUMBER: "number",
      ENUM: "enum",
      CUSTOM: "custom",
      STANDARD: "standard"
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
      return new _SettingsRow(element.innerText, _SettingsRow.detectType(element), {});
    }
    setId(id) {
      this.id = id;
      const settings2 = new Settings_default();
      const value = settings2.get(id);
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
          this.showSettingsSavedNotification(true);
        });
      }
    }
    showSettingsSavedNotification(requireReload = false) {
      let notification;
      if (requireReload) {
        notification = new LocalNotification_default("Settings updated. Some changes require reload to take effect.", {
          type: LocalNotification_default.TYPES.INFO,
          action: LocalNotification_default.ACTION_TYPES.RELOAD,
          id: "settings-updated-require-reload"
        });
      } else {
        notification = new LocalNotification_default("Settings saved.", {
          type: LocalNotification_default.TYPES.SUCCESS,
          action: LocalNotification_default.ACTION_TYPES.NONE
        });
      }
      notification.show();
    }
    static detectType(element) {
      const valueElement = element.querySelector(":scope > div");
      const booleanRegex = /Yes\s*\|\s*No/;
      const enumRegex = /(\w+)\s*\|\s*(\w+)/;
      if (element.classList.contains("settings-row")) {
        return _SettingsRow.TYPES.STANDARD;
      } else if (valueElement.innerText.trim().match(booleanRegex)) {
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
        className: "label",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "help",
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
      const settings2 = new Settings_default();
      if (settings2.get("alwaysExpandSettingsSections")) {
        this.expand();
      }
      return element;
    }
  };
  var SettingsSection_default = SettingsSection;

  // src/Classes/SettingsPanel/SettingsPanel.scss
  init_index();
  inject_style("body:not(.KUP-setting-settingsCompatibilityMode) #settings .settings-list{display:none!important;visibility:hidden}#settings .settings-panel-footer{font-size:.8em;font-weight:100}#settings .settings-panel-footer span{margin-left:.25em}.settings-panel .settings-section{margin-bottom:2em}.settings-panel .settings-section .settings-section-header{font-weight:700;margin-bottom:1em;cursor:pointer}.settings-panel .settings-section .settings-section-header:hover{color:var(--kbin-primary)}.settings-panel .settings-section .settings-section-header .icon{margin-right:.5em}.settings-panel .settings-section .settings-section-header .icon-chevron{transition:transform .25s ease-in-out;transform:rotate(-90deg);margin-left:.5em}.settings-panel .settings-section.expanded .icon-chevron{transform:rotate(0)}.settings-panel .settings-section.expanded .settings-row{display:grid}.settings-panel .settings-section .settings-row{display:none;animation:showSettingsRow .25s ease-in-out}@keyframes showSettingsRow{0%{opacity:0;transform:translateY(-1em)}to{opacity:1;transform:translateY(0)}}.settings-panel .settings-section .settings-row .value-container{flex-grow:1;text-align:right;grid-area:value;margin-left:1em}.settings-panel .settings-section .settings-row .value-container .link-muted.active{color:var(--kbin-primary);font-weight:800!important}.settings-panel .settings-section .settings-row .value-container.enum{border:var(--kbin-button-primary-border);border-radius:.5em;display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));align-items:center;text-align:center;background-color:var(--kbin-button-secondary-bg);overflow:hidden;font-size:.8em}.settings-panel .settings-section .settings-row .value-container.enum .value{padding:.5em .25em;font-weight:100;color:var(--kbin-button-secondary-text-color)}.settings-panel .settings-section .settings-row .value-container.enum .value:not(:last-child){border-right:var(--kbin-button-primary-border)}.settings-panel .settings-section .settings-row .value-container.enum .value.selected{background:var(--kbin-button-primary-bg);color:var(--kbin-button-primary-text-color);font-weight:800!important}.settings-panel .settings-section .settings-row .value-container button{background:var(--kbin-button-primary-bg);color:var(--kbin-button-primary-text-color);border:var(--kbin-button-primary-border);cursor:pointer;font-size:.8em}.settings-panel .settings-section .settings-row .value-container button:hover{background:var(--kbin-button-primary-hover-bg);color:var(--kbin-button-primary-hover-text-color)}");

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
          const settings2 = new Settings_default();
          settings2.save(this.id, newValue, !this.requireReload);
        }
        if (this.onChangeAction) {
          this.onChangeAction(newValue);
        }
        this.showSettingsSavedNotification(this.requireReload);
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
        className: "label",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "help",
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
        className: "label",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "help",
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

  // src/Classes/SettingsPanel/SettingsRowButton.js
  var SettingsRowButton = class extends SettingsRow_default {
    constructor(name, options = {
      label: "Click me!",
      onClick: () => {
      },
      requireReload: false
    }) {
      super(name, SettingsRow_default.TYPES.BUTTON, options);
      const { label, onClick, requireReload } = options || {};
      this.label = label ?? "Click me!";
      this.onClick = onClick;
      this.requireReload = requireReload;
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
        className: "label",
        innerText: this.name
      });
      element.appendChild(name);
      if (this.description) {
        element.classList.add("has-description");
        const description = Object.assign(document.createElement("span"), {
          className: "help",
          innerText: this.description
        });
        element.appendChild(description);
      }
      const valueContainer = Object.assign(document.createElement("div"), {
        className: "value-container"
      });
      const button = Object.assign(document.createElement("button"), {
        className: "btn btn-primary",
        innerText: this.label
      });
      button.addEventListener("click", () => {
        if (this.onClick) {
          this.onClick();
        }
        if (this.requireReload) {
          this.showSettingsSavedNotification(this.requireReload);
        }
      });
      valueContainer.appendChild(button);
      element.appendChild(valueContainer);
      return element;
    }
  };
  var SettingsRowButton_default = SettingsRowButton;

  // src/Classes/SettingsPanel/SettingsRowStandard.js
  var SettingsRowStandard = class _SettingsRowStandard extends SettingsRow_default {
    constructor(name, element, options) {
      super(name, SettingsRow_default.TYPES.STANDARD, options);
      this.element = element;
      element.querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {
          this.showSettingsSavedNotification(true);
        });
      });
    }
    getElement() {
      return this.element;
    }
    static fromElement(element) {
      return new _SettingsRowStandard(element.querySelector(".label").innerText, element, {});
    }
  };
  var SettingsRowStandard_default = SettingsRowStandard;

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
      case SettingsRow_default.TYPES.STANDARD:
        settingsRow = SettingsRowStandard_default.fromElement(element);
        break;
      default:
        settingsRow = SettingsRowCustom_default.fromElement(element);
        break;
    }
    return settingsRow;
  }
  var SettingsPanel = class {
    #initiated = false;
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
      document.KUP.settingsPanel = this;
      if (!document.KUP.components) {
        document.KUP.components = {};
      }
      document.KUP.components.SettingsPanelBooleanRow = SettingsRowBoolean_default;
      document.KUP.components.SettingsPanelButtonRow = SettingsRowButton_default;
      document.KUP.components.SettingsPanelEnumRow = SettingsRowEnum_default;
      document.KUP.components.SettingsPanelSection = SettingsSection_default;
      this.#enrichSettingsPanel();
      this.#populateKUPSettings();
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
      const settingsList = settingsListElement.querySelectorAll(":scope > *:not(.reload-required-section)");
      const settingsPanel = document.createElement("div");
      this.#settingsPanelElement = settingsPanel;
      settingsPanel.classList.add("settings-panel");
      this.#settingsPanelContainerElement.appendChild(settingsPanel);
      this.#settingsPanelContainerElement.appendChild(Object.assign(document.createElement("div"), {
        className: "settings-panel-footer",
        innerHTML: '<div><i class="fas fa-info-circle"></i> <span>Shift click to toggle all sections</span></div>'
      }));
      window.addEventListener("load", () => {
        setTimeout(() => {
          const settings2 = new Settings_default();
          if (settings2.get("settingsCompatibilityMode")) {
            this.rerender();
          } else {
            try {
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
                settingsPanel.appendChild(section.getElement());
              });
              settingsListElement.remove();
              this.#sections = [...sections, ...this.#sections];
            } catch (e) {
              console.error("Error while parsing settings, enabling high compatibility mode: ", e);
              settings2.save("settingsCompatibilityMode", true);
              const notification = new LocalNotification_default("There was a problem setting up the settings panel. Turning on compatibility mode...", {
                type: LocalNotification_default.TYPES.ERROR,
                action: LocalNotification_default.ACTION_TYPES.HIDE
              });
              notification.show();
              return;
            }
            this.rerender();
          }
        }, 100);
      });
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
        new SettingsRowBoolean_default("Show instance name", {
          id: "showInstanceName",
          description: "Show the instance name for federated posts.",
          requireReload: true
        }),
        new SettingsRowBoolean_default("Auto article preview", {
          id: "autoArticlePreview",
          description: "Automatically show article preview after a short delay."
        }),
        new SettingsRowBoolean_default("Fix styles", {
          id: "fixCSS",
          description: "Fix some common CSS issues unrelated to KUP."
        }),
        new SettingsRowBoolean_default("Enable bookmarks", {
          id: "enableBookmarks",
          description: "Enable the bookmarks feature. Save articles to read later.",
          requireReload: true
        }),
        new SettingsRowBoolean_default("Settings compatibility mode", {
          id: "settingsCompatibilityMode",
          description: "Increase compatibility with other scripts that modify the settings panel.",
          requireReload: true
        }),
        new SettingsRowButton_default("Reset settings", {
          id: "resetSettings",
          description: "Reset all KUP settings to their default values.",
          requireReload: true,
          onClick: () => {
            const settings2 = new Settings_default();
            settings2.reset();
            localStorage.removeItem("kup-bookmarks");
          },
          label: "Reset"
        })
      ]);
      this.addSection(section);
    }
  };
  var SettingsPanel_default = SettingsPanel;

  // src/index.js
  if (!document.body.classList.contains("KUP-injected")) {
    document.body.classList.add("KUP-injected");
    document.KUP = {};
    document.KUP.LocalNotification = LocalNotification_default;
    const bookmarkHandler = new BookmarkHandler_default();
    const articlesHandler = new ArticlesHandler_default();
    const navigator = new Navigator_default();
    const articlePage = new ArticlePage_default();
    const settingsPanel = new SettingsPanel_default();
    const settings2 = new Settings_default();
    if (!settings2.get("installedVersion")) {
      const notification = new LocalNotification_default("Kbin Usability Pack installed", {
        type: LocalNotification_default.TYPES.SUCCESS,
        action: LocalNotification_default.ACTION_TYPES.NONE
      });
      notification.show();
      settings2.save("installedVersion", GM_info.script.version);
    } else if (settings2.get("installedVersion") !== GM_info.script.version) {
      const notification = new LocalNotification_default("Kbin Usability Pack updated to version " + GM_info.script.version, {
        type: LocalNotification_default.TYPES.SUCCESS,
        action: LocalNotification_default.ACTION_TYPES.NONE
      });
      notification.show();
      settings2.save("installedVersion", GM_info.script.version);
    }
    articlesHandler.init();
    navigator.init();
    articlePage.init();
    settingsPanel.init();
    bookmarkHandler.init();
    settings2.apply();
  } else {
    console.warn("Kbin Usability Pack already injected!");
  }
})();
