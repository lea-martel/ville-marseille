const navSlide = () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('.second-bar');
    const navLinks = document.querySelectorAll('.second-bar li')


    toggleBtn.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        //Toggle animation
        toggleBtn.classList.toggle('toggle');
    });
};

navSlide();