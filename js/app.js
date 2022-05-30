//nav js
let siteNavbar = document.querySelector('.site-navbar');
let aboutSection = document.querySelector("#about");

let navWayPoint = new Waypoint({
    element: aboutSection,
    handler: function(direction) {
        if(direction === "down"){
            console.log("about section appear")
            siteNavbar.classList.toggle("site-navbar-onscroll")

        }else{
            console.log("about section leave")
            siteNavbar.classList.toggle("site-navbar-onscroll")
        }
    },
    offset: "90%"
})

let navLinks = document.querySelectorAll(".nav-link");
function removeAllNavLinkActive(){
    navLinks.forEach(currentNavLink=>currentNavLink.classList.remove('active'))
}

navLinks.forEach(navLink => {
    // console.log(navLink.getAttribute('href'))
    let currentElement = document.querySelector(navLink.getAttribute('href'));
    new Waypoint({
        element: currentElement,
        handler:function (direction){
            if(direction==="down") {
                removeAllNavLinkActive()
                navLink.classList.add('active')
            }
            if(direction==="up") {
                removeAllNavLinkActive()
                navLink.classList.add('active')
            }
        },
        offset: "75%"
    })
})

window.addEventListener("scroll",function (){
    if (window.scrollY === 0){
        removeAllNavLinkActive()
        navLinks[0].classList.add('active')
    }
})

// Hero Section type js
let options = {
    strings: ['Food .....', 'Drinks .....'],
    typeSpeed: 40,
    backDelay: 1000,
    loop : true
};

var typed = new Typed('.hero-section-text', options);

// waypoint

let slideDown = {
    distance: '70px',
    origin: 'top',
    duration : 1000,
    interval : 500
};

ScrollReveal().reveal('.content', slideDown);