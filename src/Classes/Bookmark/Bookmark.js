class Bookmark {
    constructor(title, url, articleId, magazine, instanceName=null) {
        this.title = title;
        this.magazine = magazine;
        this.url = url;
        this.instanceName = instanceName;
        this.articleId = articleId;
    }

    getElement() {
        let mag = this.magazine;
        if (this.instanceName) {
            mag += "@"+this.instanceName;
        }
        const li = Object.assign(document.createElement('li'), {
            className: 'bookmarks-menu-item',
            innerHTML: `<a href="${this.url}" class="bookmark-link"><span class="bookmark-title">${this.title}</span><span class="bookmark-magazine">${mag}</span></a>`
        });

        const actions = Object.assign(document.createElement('div'), {
            className: 'bookmark-actions'
        });
        const removeButton = Object.assign(document.createElement('a'), {
            className: 'bookmark-remove bookmark-action',
            innerHTML: '<i class="fas fa-check"></i>',
            href: "#"
        });
        actions.appendChild(removeButton);
        li.append(actions);
        return li
    }
}

export default Bookmark;