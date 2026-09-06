/* ========================================= HANA NASIRI LANGUAGE SYSTEM ========================================= */ const languageBtn = document.getElementById("languageBtn"); let currentLanguage = "fa"; /* ========================================= SET LANGUAGE ========================================= */ function setLanguage(language) { currentLanguage = language; document.documentElement.lang = language; if (language === "en") { document.documentElement.dir = "ltr"; document.body.classList.add("english"); languageBtn.textContent = "FA"; document.querySelectorAll(".fa-text").forEach(element => { element.style.display = "none"; }); document.querySelectorAll(".en-text").forEach(element => { element.style.display = ""; }); } else { document.documentElement.dir = "rtl"; document.body.classList.remove("english"); languageBtn.textContent = "EN"; document.querySelectorAll(".fa-text").forEach(element => { element.style.display = ""; }); document.querySelectorAll(".en-text").forEach(element => { element.style.display = "none"; }); } } /* ========================================= LANGUAGE BUTTON ========================================= */ languageBtn.addEventListener("click", () => { if (currentLanguage === "fa") { setLanguage("en"); } else { setLanguage("fa"); } }); /* ========================================= MOBILE MENU ========================================= */ const menuBtn = document.getElementById("menuBtn"); const mobileMenu = document.getElementById("mobileMenu"); menuBtn.addEventListener("click", () => { mobileMenu.classList.toggle("active"); }); document.querySelectorAll(".mobile-menu a").forEach(link => { link.addEventListener("click", () => { mobileMenu.classList.remove("active"); }); }); /* ========================================= PORTFOLIO LIGHTBOX ========================================= */ const portfolioImages = document.querySelectorAll(".portfolio-item img"); const lightbox = document.getElementById("lightbox"); const lightboxImage = document.getElementById("lightboxImage"); const closeLightbox = document.getElementById("closeLightbox"); portfolioImages.forEach(image => { image.addEventListener("click", () => { lightboxImage.src = image.src; lightbox.classList.add("active"); document.body.style.overflow = "hidden"; }); }); function closeLightboxFunction() { lightbox.classList.remove("active"); document.body.style.overflow = ""; } closeLightbox.addEventListener( "click", closeLightboxFunction ); lightbox.addEventListener("click", (event) => { if (event.target === lightbox) { closeLightboxFunction(); } }); document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeLightboxFunction(); } }); /* ========================================= SCROLL REVEAL ========================================= */ const revealElements = document.querySelectorAll( ".section-heading, .profile-grid, .about-grid, .experience-list, .beyond-card, .portfolio-item, .vision-content, .contact-grid" ); const revealObserver = new IntersectionObserver( (entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); } }); }, { threshold: 0.1 } ); revealElements.forEach(element => { element.classList.add("reveal"); revealObserver.observe(element); }); /* ========================================= START WITH PERSIAN ========================================= */ setLanguage("fa");
const languageBtn = document.getElementById("languageBtn");

let currentLanguage =
    localStorage.getItem("hana-language") || "fa";

function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir =
        language === "en" ? "ltr" : "rtl";

    document.body.classList.toggle(
        "english",
        language === "en"
    );

    languageBtn.textContent =
        language === "en" ? "FA" : "EN";

    localStorage.setItem(
        "hana-language",
        language
    );
}

languageBtn.addEventListener("click", () => {

    setLanguage(
        currentLanguage === "fa"
            ? "en"
            : "fa"
    );

});

setLanguage(currentLanguage);
