document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for menu links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Contact Form
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("✅ Thank you! Your message has been sent.");
            form.reset();
        });
    }

    // Animation on Scroll
    const cards = document.querySelectorAll(".card");
    if (cards.length > 0) {
        // Initial Card Style
        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";
            card.style.transition = "0.6s ease";
        });

        window.addEventListener("scroll", () => {
            cards.forEach(card => {
                const position = card.getBoundingClientRect().top;
                const screen = window.innerHeight;

                if (position < screen - 100) {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }
            });
        });
    }
});
