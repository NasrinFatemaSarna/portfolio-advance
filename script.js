document.addEventListener("DOMContentLoaded", () => {
  /* ================================
     1. Mobile Menu Toggle
  ================================= */
  const menuButton     = document.getElementById("menu-button");
  const closeButton    = document.getElementById("close-button");
  const mobileMenu     = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("translate-x-full");
    document.body.classList.add("overflow-hidden"); // prevent scroll when open
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("translate-x-full");
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMenu = () => {
    if (!mobileMenu) return;
    if (mobileMenu.classList.contains("translate-x-full")) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  if (menuButton)  menuButton.addEventListener("click", toggleMenu);
  if (closeButton) closeButton.addEventListener("click", toggleMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Close only if menu currently open
      if (!mobileMenu.classList.contains("translate-x-full")) {
        closeMenu();
      }
    });
  });

  // Desktop e ashle always menu close
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });

  /* ================================
     2. Skills Tab Switching
  ================================= */
  window.showSkills = function (category) {
    const frontend   = document.getElementById("frontend");
    const backend    = document.getElementById("backend");
    const btnFrontend = document.getElementById("btn-frontend");
    const btnBackend  = document.getElementById("btn-backend");

    if (!frontend || !backend || !btnFrontend || !btnBackend) return;

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
  const text       = "Hi, I’m Nasrin Fatema Sarna";
  let i            = 0;
  const speed      = 80;
  const eraseSpeed = 45;
  const wait       = 1800;

  function type() {
    if (!typedNameElement) return;
    if (i < text.length) {
      typedNameElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, wait);
    }
  }

  function erase() {
    if (!typedNameElement) return;
    if (i > 0) {
      typedNameElement.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(erase, eraseSpeed);
    } else {
      setTimeout(type, 400);
    }
  }

  if (typedNameElement) {
    type();
  }

  /* ================================
     4. AOS Initialization
  ================================= */
  if (window.AOS) {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 800,
    });
  }
});

/* ====================================
   5. Mouse Click Ripple Effect
==================================== */
document.addEventListener("click", (e) => {
  const effect = document.createElement("div");
  effect.className = "click-effect";
  effect.style.left = `${e.pageX}px`;
  effect.style.top  = `${e.pageY}px`;

  document.body.appendChild(effect);

  setTimeout(() => effect.remove(), 600);
});
/* =======================
   COUNTER RUNNING EFFECT
======================= */

function runCounter() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // animation 2 seconds
    const step = target / (duration / 16);

    let value = 0;

    const update = () => {
      value += step;
      if (value < target) {
        counter.textContent = Math.floor(value) + (counter.textContent.includes('%') ? '%' : '+');
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
      }
    };

    update();
  });
}

// Run when visible (intersection observer)
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter();
      obs.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));
