const nav = document.querySelector(".nav");

let ht = getComputedStyle(document.documentElement).
getPropertyValue('--ht-height');

divElement = document.querySelector(".header");
elemHeight = divElement.offsetHeight;

hh = parseInt(elemHeight) + parseInt(ht) * 2;

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (screen.width > 800) {
    if (lastScrollY < window.scrollY && lastScrollY > elemHeight || lastScrollY < hh || window.scrollY == 0) {
        nav.classList.add("hide");
    }
    else
    {
        nav.classList.remove("hide");
    }
    }
    else {
        nav.classList.add("hide");
    }

    lastScrollY = window.scrollY;
});

