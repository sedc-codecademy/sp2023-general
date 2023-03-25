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

// Function that generates all the HTML to the home page
const generateHomePage = (slides) => {
    pages.homePage.innerHTML = homePageCarousel(homePageCarouselSlide, slides)
}

// Function that takes a callback function as first parameter, and data for tha slides. This function generates the structure for the carousel.
// The callback function is used to call another function that generates a single slide. This way we can generate as many slides as we wish
// Most of the content in a carousel is fixed, only the slides can be dynamic. So that is why we are using a separate function to generate dynamic slides
const homePageCarousel = (slidesGenerator, slides) => `
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <!-- this part can be created by another function that will generate these list items jas as for the slides -->
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <!-- this is the part where slides are created by another function, so that we can have dynamic content and different number of slides -->
                ${slidesGenerator(slides)}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button"
               data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button"
               data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
	    </div>
    `;

// This function creates a single slide. It takes an array of object as a parameter
const homePageCarouselSlide = (items) => {
    let slides = ``;
    items.forEach((item, index) => slides += `
                <!-- with the help of ternary operator, we can add classes when needed -->
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <!--  having images with same name and numbering, helps us to save time while adding images in HTML with a function -->
                    <img src="./img/stock-img-${item.img}.jpg" class="d-block w-100" alt="test">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${item.title}</h5>
                        <p>${item.description}</p>
                    </div>
                </div>
             `)
    return slides;
}

// This data should be taken from a JSON api call using fetch
let fetchedJSONdata = [
    {
        title: 'First slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        img: 1
    },
    {
        title: 'Second slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        img: 2
    },
    {
        title: 'Third slide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        img: 3
    }
]

generateHomePage(fetchedJSONdata);
