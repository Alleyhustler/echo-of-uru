var modal = document.getElementById("myModal");
var captionText = document.getElementById("caption");

function openModal() {
document.getElementById("myModal").style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = slides[slideIndex-1].alt;
    document.body.style.overflow = "hidden";
    document.body.addEventListener('keydown', respondToPressedKey);
}

//show next/prior slide by pressing arrow key
function respondToPressedKey(e) {
    switch (e.key) {
        case 'ArrowLeft':
            plusSlides(-1);
            break;
        case 'ArrowRight':
            plusSlides(1);
            break;
        }
}

var span = document.getElementsByClassName("modal-close")[0];
//close by click on X
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.removeEventListener('keydown', respondToPressedKey);
}
//close by click outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
        document.body.removeEventListener('keydown', respondToPressedKey);
    }
}
//close by press esc on keyboard
window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
        document.body.removeEventListener('keydown', respondToPressedKey);
    }
}