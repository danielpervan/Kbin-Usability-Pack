class Navigator {
    constructor() {
    }
    init() {
        this.fixMobileLogoLink()
    }

    fixMobileLogoLink() {
        const nav = document.querySelector("nav.head-nav");
        const logo = document.querySelector("nav.head-nav .brand > a");
        const hamburger = document.querySelector("nav.head-nav .brand > div");
        const homeButton = document.querySelector("#sidebar .section.mobile-close a.btn");
        /** move click event to hamburger */
        const action = nav.dataset.action;
        nav.dataset.action = "";
        hamburger.dataset.action = action;

        /** fix home button url */
        homeButton.href = logo.href;
    }

}
export default Navigator;