document.addEventListener("DOMContentLoaded", function () {

    /* Hero Animation */
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    if (heroText) {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateX(0)";
    }

    if (heroImage) {
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateX(0)";
    }

    /* Companies */
    const cards = document.querySelectorAll(".company-card");
    const galleries = document.querySelectorAll(".certificate-box");

    cards.forEach((card) => {

        card.addEventListener("click", function () {

            cards.forEach(c => c.classList.remove("active"));
            galleries.forEach(g => g.classList.remove("active"));

            this.classList.add("active");

            const target = document.getElementById(this.dataset.company);

            if (target) {
                target.classList.add("active");
            }

        });

    });

    /* Lightbox */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    document.querySelectorAll(".certificate-box img").forEach((img) => {

        img.addEventListener("click", function () {

            lightbox.classList.add("active");
            lightboxImg.src = this.src;

        });

    });

    closeBtn.addEventListener("click", function () {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }

    });

});