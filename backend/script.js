console.log("welcome to Crptrd")

// creating a function to call events 

const eventforele = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


// navbar hamburger 
const nav_ham = document.querySelector("[data-nav-toggler]");
const dropdown = document.querySelector(".dropdown");
const navbarlink = document.querySelectorAll("[data-navbarlinks]")

const toggle = () => {
    nav_ham.classList.toggle("active");
    dropdown.classList.toggle("active");
    document.body.classList.toggle("active");
}
eventforele(nav_ham, "click", toggle);

// for going back to home page when links are clicked

const closenav = () => {
    nav_ham.classList.remove("active");
    dropdown.classList.remove("active");
    document.body.classList.remove("active");
}
eventforele(navbarlink, "click", closenav);

// reveal on scrool

const sections = document.querySelectorAll("[data-section]");

const reveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {

            sections[i].classList.add("active");
        }
        else {
            sections[i].classList.remove("active");

        }

    }
}
reveal();

eventforele(window, "scroll", reveal);