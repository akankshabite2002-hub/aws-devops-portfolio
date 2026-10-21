
/* 1. Update the footer year automatically */
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = footer.innerHTML.replace(
        /©\s*\d{4}/,
        `© ${new Date().getFullYear()}`
    );
}

/* 2. Reveal sections as you scroll */
const sections = document.querySelectorAll("main section");

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08 }
    );

    sections.forEach((section) => observer.observe(section));
} else {
    sections.forEach((section) => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    });
}

/* 3. Add a greeting in the browser console */
console.log("Welcome to Akanksha's AWS DevOps Portfolio!");
