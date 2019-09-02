const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Header section

const nav = document.querySelector('nav');

// CTA section

const titleJumbotron = document.querySelector('.cta-text h1');
titleJumbotron.textContent = siteContent.cta["h1"];
const textJumbotron = document.querySelector('.cta-text button');
textJumbotron.textContent = siteContent.cta["button"];
const imageJumbotron = document.getElementById('cta-img');
imageJumbotron.setAttribute('src', siteContent["cta"]["img-src"]);

// main content section top

const firstTitle = document.querySelectorAll('.top-content h4');
firstTitle[0].textContent = siteContent["main-content"]["services-h4"];
firstTitle[1].textContent = siteContent["main-content"]["about-h4"];

const firstParagraph = document.querySelectorAll('.top-content p');
firstParagraph[0].textContent = siteContent["main-content"]["services-content"]
firstParagraph[1].textContent = siteContent["main-content"]["about-content"]

// main content image

const imageMainContent = document.getElementById('middle-img');
imageMainContent.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// main content section bottom

const bottomTitle = document.querySelectorAll('.bottom-content h4');
bottomTitle[0].textContent = siteContent["main-content"]["features-h4"];
bottomTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitle[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomParagraph = document.querySelectorAll('.bottom-content p');
bottomParagraph[0].textContent = siteContent["main-content"]["features-content"]
bottomParagraph[1].textContent = siteContent["main-content"]["product-content"]
bottomParagraph[2].textContent = siteContent["main-content"]["vision-content"]

console.log(firstTitle[0])