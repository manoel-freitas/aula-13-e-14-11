let modal = document.getElementById("modal");



function showModal(event) {
    addClass(modal, "modal-showing");
    addClass(modal, "fadeIn")
    event.stopPropagation();

}

function closeModal() {
    addClass(modal, "fadeOut")
    setTimeout(function(){
    removeClass(modal, "modal-showing");
    },2000)
}

window.onclick = function() {
    closeModal(event);
};

