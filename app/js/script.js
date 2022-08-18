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


let homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    scrollUp();
    setTimeout(hideSections, 300); // a dirty "hack" to give the time for the page to scroll before removing the element
});

let aboutBlock = document.querySelector("#about");
let aboutLink = document.querySelector('a[href="#about"]');
aboutLink.addEventListener("click", (e) => {
    e.preventDefault(); // preventing the page from scrolling by itself
    hideSections();
    aboutBlock.style.display = "block";
    scrollDown();
});

let portBlock = document.querySelector("#portfolio");
let portLink = document.querySelector('a[href="#portfolio"]');
portLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    portBlock.style.display = "block";
    scrollDown();
});

let resumeBlock = document.querySelector("#resume");
let resumeLink = document.querySelector('a[href="#resume"]');
resumeLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    resumeBlock.style.display = "block";
    scrollDown();
});

let contactBlock = document.querySelector("#contact");
let contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    hideSections();
    contactBlock.style.display = "block";
    scrollDown();
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