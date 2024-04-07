// Inisialisasi Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Tambahkan kelas fade-in saat discroll
    window.addEventListener('scroll', function() {
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                if (!section.classList.contains('fade-in')) {
                    section.classList.add('fade-in');
                }
            } else {
                section.classList.remove('fade-in');
            }
        });
    });

    // Fungsi untuk mengecek apakah elemen berada dalam viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
