function showSurprise() {
    var surprise = document.getElementById("surprise");
    var slideshow = document.querySelector('.slideshow-container');
    surprise.style.display = "block";
    slideshow.style.display = "block";
    launchConfetti();
    playSong();
    showSlides();
}

function launchConfetti() {
    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function playSong() {
    var song = document.getElementById("birthdaySong");
    song.play();
}

var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
