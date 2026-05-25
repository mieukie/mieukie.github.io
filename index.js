document.getElementById('spanShift').addEventListener('click', function() {
        this.classList.toggle('shifting');
    });

const imageLinks = document.querySelectorAll('.image-link');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1    
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('is-in-view');
    } else {
        entry.target.classList.remove('is-in-view'); 
    }
    });
}, observerOptions);

imageLinks.forEach(link => {
    scrollObserver.observe(link);
});

const spinCats = document.querySelectorAll('.basiileaf-cat');
spinCats.forEach(cat => {
    cat.addEventListener('click', () => {
        cat.classList.remove('spin');
        cat.offsetWidth;
        cat.classList.add('spin');
    });
});