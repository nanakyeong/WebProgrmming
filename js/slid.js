var slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    slideIndex++;

    setTimeout(showSlides, 3000);
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    const slides2 = document.getElementsByClassName("mySlides2");

    if (slides2.length === 0) return;

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }

    slides2[slideIndex2].style.display = "block";
    slideIndex2++;

    setTimeout(showSlides2, 3000);
}