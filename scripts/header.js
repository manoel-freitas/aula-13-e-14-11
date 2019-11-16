let header = document.getElementById("header-nav");

window.onscroll = function() {scrollWindow()};

function scrollWindow() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        addClass(header, "onscroll-header");
    } else {
        removeClass(header, "onscroll-header");
    }
};

