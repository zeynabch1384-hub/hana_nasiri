/* =========================================
   HANA NASIRI
   MAIN SCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}



/* ================= LIGHTBOX ================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

const portfolioImages = document.querySelectorAll(".portfolio-item img");


portfolioImages.forEach(image => {

    image.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}



/* ================= LANGUAGE ================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage =
    localStorage.getItem("hana-language") || "fa";


function setLanguage(language) {

    currentLanguage = language;


    /* تغییر زبان HTML */

    document.documentElement.lang = language;


    /* تغییر جهت صفحه */

    document.documentElement.dir =
        language === "en" ? "ltr" : "rtl";


    /* تغییر کلاس Body */

    document.body.classList.toggle(
        "english",
        language === "en"
    );


    /* تغییر نوشته دکمه */

    if (languageBtn) {

        languageBtn.textContent =
            language === "en" ? "FA" : "EN";

    }


    /* ذخیره زبان */

    localStorage.setItem(
        "hana-language",
        language
    );

}



/* کلیک روی دکمه زبان */

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        const newLanguage =
            currentLanguage === "fa"
                ? "en"
                : "fa";

        setLanguage(newLanguage);

    });

}



/* اجرای زبان ذخیره‌شده */

setLanguage(currentLanguage);
