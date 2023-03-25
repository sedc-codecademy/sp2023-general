// Navigation links
const navigationLinks = {
    homeBtn: document.getElementById('home-btn'),
    aboutUsBtn: document.getElementById('about-us-btn'),
    skillsBtn: document.getElementById('skills-btn'),
    contactUsBtn: document.getElementById('contact-us-btn'),
}

// Pages
const pages = {
    homePage: document.getElementById('home-page'),
    aboutUsPage: document.getElementById('about-us-page'),
    skillsPage: document.getElementById('skills-page'),
    contactUsPage: document.getElementById('contact-us-page'),
}

const setEventListeners = () => {
    for (const link in navigationLinks) {
        navigationLinks[link].addEventListener('click', (event) => {
            // data-page attribute in the HTML should have the same name as the pages property
            showPage(event.target.dataset.page)
        })
    }
};

// show the page sent as argument
const showPage = (page) => {
    for (const pageKey in pages) {
        // d-none is a bootstrap class, setting the property as display none is also fine
        //this line hides all pages
        pages[pageKey].classList.add('d-none');
    }
    // on this line the proper page which navigation link was clicked is shown
    pages[page].classList.remove('d-none');
};

setEventListeners();
//shownPage is called here with the initial page, which is home
showPage('homePage');
