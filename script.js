document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    function updateIcon() {
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Check saved preference
    // if (localStorage.getItem('theme') === 'light') {
    //     body.classList.add('light-mode');
    //     updateIcon();
    // }

    themeToggle.addEventListener('click', () => {
        // Add animation class
        icon.classList.add('rotate-icon');

        // Wait for half animation to swap icon for smoothness
        setTimeout(() => {
            body.classList.toggle('light-mode');
            updateIcon();
        }, 250);

        // Remove animation class after completion
        setTimeout(() => {
            icon.classList.remove('rotate-icon');
        }, 500);

        // Save preference
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Typewriter Effect
    const texts = ["Software Developer.", "UI/UX Designer.", "Problem Solver.", "Creative Professional."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        const typewriterEl = document.querySelector('.typewriter-text');
        if (typewriterEl) {
            typewriterEl.textContent = letter;
        }

        if (letter.length === currentText.length) {
            setTimeout(() => {
                count++;
                index = 0;
                setTimeout(type, 2000);
            }, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();

    // Lenis Smooth Scroll
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Sync helper for anchors if needed, but Lenis handles standard anchors relatively well.
        // For strict anchor clicking we can intercept clicks.
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'));
            });
        });
    }

    // Custom Cursor Logic
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Simple follow for outline (CSS transition handles smoothing)
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Hover effect for links/buttons
        const interactives = document.querySelectorAll('a, button, .project-card');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    // Smooth Reveal on Scroll (Single Clean Implementation)
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to prevent re-triggering
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, ' +
        '.section-title, ' +
        '.about-text, ' +
        '.contact-subtitle, ' +
        '.email-link, ' +
        '.hero-title, ' +
        '.hero-subtitle, ' +
        '.hero-cta'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-section');
        scrollObserver.observe(el);
    });

    // Preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 3000); // Extended 3s display time to show off animation
    });
});
