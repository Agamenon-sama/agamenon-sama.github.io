let activeSection = 0;

function hideSections() {
    let sections = document.querySelectorAll(".content > div");
    for(let section of sections) {
        section.style.display = "none";
    }
}

function scrollDown() {
    if(window.scrollY === 0) {
        window.scrollBy({
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    }
}

function scrollUp() {
    if(window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}

function noSections() {
    scrollUp();
    setTimeout(hideSections, 300); // give time for the page to scroll before removing the element
    activeSection = 0;
}

function displaySection(section, sectionID) {
    hideSections();
    section.style.display = "block";
    scrollDown();
    activeSection = sectionID;
}


let aboutBlock = document.querySelector("#about");
let aboutLink = document.querySelector('a[href="#about"]');
aboutLink.addEventListener("click", (e) => {
    e.preventDefault(); // preventing the page from scrolling by itself
    if (activeSection === 1) {
        noSections();
    }
    else {
        displaySection(aboutBlock, 1);
    }
});

let portBlock = document.querySelector("#portfolio");
let portLink = document.querySelector('a[href="#portfolio"]');
portLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (activeSection === 2) {
        noSections();
    }
    else {
        displaySection(portBlock, 2);
    }
});

let resumeBlock = document.querySelector("#resume");
let resumeLink = document.querySelector('a[href="#resume"]');
resumeLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (activeSection === 3) {
        noSections();
    }
    else {
        displaySection(resumeBlock, 3);
    }
});

let contactBlock = document.querySelector("#contact");
let contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (activeSection === 4) {
        noSections();
    }
    else {
        displaySection(contactBlock, 4);
    }
});

let blogBlock = document.querySelector(".blog");
let bgBlock = document.querySelector(".darkBg");
let blogLink = document.querySelector('a[href="#blog"]');
blogLink.addEventListener("click", (e) => {
    e.preventDefault();
    blogBlock.style.display = "block";
    bgBlock.style.display = "block";
    
});
let blogBtn = document.querySelector('button');
blogBtn.addEventListener("click", () => {
    blogBlock.style.display = "none";
    bgBlock.style.display = "none";
});