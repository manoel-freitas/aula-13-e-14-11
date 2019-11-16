let headerButton = document.getElementById('header-btn')

function changeBtnOnmouseover() {
    addClass(headerButton, "header-btn-onmouseover")
}

function changeBtnOnmouseout() {
    removeClass(headerButton, "header-btn-onmouseover")
}

function changeBtnOnModalActions(action) {
    action(headerButton, "header-btn-onmodal")
}

/*function changeBtnByWindowClicked() {
    addClass(headerButton, "header-btn")
}*/