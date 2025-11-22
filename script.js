document.addEventListener("DOMContentLoaded", () => {
    /* ================================
       1. Mobile Menu Toggle
    ================================= */
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("translate-x-full");
        document.body.classList.toggle("overflow-hidden"); // Prevent scroll when menu open
    };

    if (menuButton) menuButton.addEventListener("click", toggleMenu);
    if (closeButton) closeButton.addEventListener("click", toggleMenu);

    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (!mobileMenu.classList.contains("translate-x-full")) {
                toggleMenu();
            }
        });
    });

    /* ================================
       2. Skills Tab Switching
    ================================= */
    window.showSkills = function (category) {
        const frontend = document.getElementById("frontend");
        const backend = document.getElementById("backend");
        const btnFrontend = document.getElementById("btn-frontend");
        const btnBackend = document.getElementById("btn-backend");

        if (category === "frontend") {
            frontend.classList.remove("hidden");
            backend.classList.add("hidden");
            btnFrontend.classList.add("tab-btn-active");
            btnBackend.classList.remove("tab-btn-active");
        } else {
            backend.classList.remove("hidden");
            frontend.classList.add("hidden");
            btnBackend.classList.add("tab-btn-active");
            btnFrontend.classList.remove("tab-btn-active");
        }
    };

    /* ================================
       3. Typing Animation (Hero Name)
    ================================= */
    const typedNameElement = document.getElementById("typed-name");
    const text = "Hi, I’m Nasrin Fatema Sarna";
    let i = 0;
    const speed = 80;
    const eraseSpeed = 45;
    const wait = 1800;

    function type() {
        if (i < text.length) {
            typedNameElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(erase, wait);
        }
    }

    function erase() {
        if (i > 0) {
            typedNameElement.textContent = text.substring(0, i - 1);
            i--;
            setTimeout(erase, eraseSpeed);
        } else {
            setTimeout(type, 400);
        }
    }

    if (typedNameElement) type();

    /* ================================
       4. AOS Initialization
    ================================= */
    AOS.init({
        once: true,
        easing: "ease-in-out",
        duration: 800,
    });
});

/* ====================================
   5. Mouse Click Ripple Effect
==================================== */
document.addEventListener("click", (e) => {
    const effect = document.createElement("div");
    effect.className = "click-effect";
    effect.style.left = `${e.pageX}px`;
    effect.style.top = `${e.pageY}px`;

    document.body.appendChild(effect);

    setTimeout(() => effect.remove(), 600);
});
