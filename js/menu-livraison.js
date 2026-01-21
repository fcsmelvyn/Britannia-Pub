document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById("gallery");

    const IMAGE_COUNT = 19;
    const IMAGE_PATH = "images/menu/";
    const IMAGE_EXT = ".jpeg";

    const images = [];
    let currentIndex = 0;

    // Création galerie
    for (let i = 1; i <= IMAGE_COUNT; i++) {
        const img = document.createElement("img");
        img.src = `${IMAGE_PATH}menu${i}${IMAGE_EXT}`;
        img.alt = `Menu ${i}`;
        img.loading = "lazy";

        img.addEventListener("click", () => openLightbox(i - 1));

        gallery.appendChild(img);
        images.push(img.src);
    }

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const closeBtn = document.getElementById("close");

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
    }

    function closeLightbox() {
        lightbox.style.display = "none";
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    closeBtn.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", e => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        }
    });

});
