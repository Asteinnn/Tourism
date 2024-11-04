let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    
    slides.forEach((slide) => slide.style.display = 'none');
    dots.forEach((dot) => dot.classList.remove('active'));

   
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

document.getElementById('tourism').addEventListener('click', function() {
    document.getElementById('scroll1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hotels').addEventListener('click', function() {
    document.getElementById('scroll2').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('destination').addEventListener('click', function() {
    document.getElementById('scroll3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('products').addEventListener('click', function() {
    document.getElementById('scroll4').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('history').addEventListener('click', function() {
    document.getElementById('scroll5').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nature').addEventListener('click', function() {
    document.getElementById('scroll6').scrollIntoView({ behavior: 'smooth' });
});


document.querySelectorAll('.card img').forEach((img) => {
    img.addEventListener('click', function() {
        alert('More information coming soon');
    });
});
