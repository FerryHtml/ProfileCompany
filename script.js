// Matrix Rain Effect
function createMatrixRain() {
  const matrixBg = document.getElementById("matrix-bg");
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

  for (let i = 0; i < 100; i++) {
    const rain = document.createElement("div");
    rain.className = "matrix-rain";
    rain.style.left = Math.random() * 100 + "%";
    rain.style.animationDuration = Math.random() * 3 + 2 + "s";
    rain.style.animationDelay = Math.random() * 2 + "s";

    let text = "";
    for (let j = 0; j < Math.floor(Math.random() * 20) + 5; j++) {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
    rain.textContent = text;

    matrixBg.appendChild(rain);
  }
}

// Smooth Scrolling
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Fade In Animation on Scroll
function initFadeInAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));
}

// Navbar Scroll Effect
function initNavbarEffect() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(0, 0, 0, 0.95)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 255, 65, 0.1)";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });
}

// Image Hover Effects
function initImageEffects() {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.filter = "brightness(1.1) contrast(1.1) saturate(1.2)";
    });

    img.addEventListener("mouseleave", function () {
      this.style.filter = "brightness(1) contrast(1) saturate(1)";
    });
  });
}

// Typing Effect for Hero Text
function initTypingEffect() {
  const heroTitle = document.querySelector(".hero h1");
  const text = "Devotion Tech";
  heroTitle.textContent = "";

  let i = 0;
  const typing = setInterval(() => {
    heroTitle.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(typing);
    }
  }, 100);
}

// Service Cards Animation
function initServiceCards() {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card, index) => {
    card.style.animationDelay = index * 0.1 + "s";

    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Parallax Effect
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero-content");

    parallaxElements.forEach((el) => {
      const speed = 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// Add dynamic glow effect to elements
function addGlowEffect() {
  const glowElements = document.querySelectorAll(
    ".logo, .section-title, .cta-button"
  );

  glowElements.forEach((el) => {
    setInterval(() => {
      el.style.textShadow = `0 0 ${
        Math.random() * 20 + 10
      }px var(--primary-green)`;
    }, 2000);
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  createMatrixRain();
  initSmoothScrolling();
  initFadeInAnimation();
  initNavbarEffect();
  initImageEffects();
  initServiceCards();
  initParallax();

  // Delay typing effect
  setTimeout(initTypingEffect, 500);
});

// Add loading screen effect
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Initialize glow effect after page loads
setTimeout(addGlowEffect, 1000);
