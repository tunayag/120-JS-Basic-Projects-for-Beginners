const hamburger = document.querySelector(".hamburger");
const about = document.querySelector(".about");

hamburger.addEventListener("click", () => {
    about.classList.toggle("open");
    const t1 = gsap.timeline();
    if (about.classList.contains("open")) {
        t1.to(about, 0.5, { clipPath: "circle(1300px at 100% -20%)" });
        t1.to(".line1", 0, { rotate: "45deg", y: "5px" }, "-=0.5");
        t1.set(".line2", { display: "none" }, "-=0.5");
        t1.to(".line3", 0, { rotate: "-45deg", y: "-5px" }, "-=0.5");
        t1.fromTo(".social-links", .75, { opacity: 0 }, { opacity: 1 });
        t1.fromTo(".about-text", .75, { opacity: 0 }, { opacity: 1 },);
    } else {
        t1.to(about, 0.5, { clipPath: "circle(50px at 88.75% 8%)" });
        t1.to(".line1", 0, { rotate: "0", y: "0" }, "-=0.5");
        t1.set(".line2", { display: "block" }, "-=0.5");
        t1.to(".line3", 0, { rotate: "0", y: "0" }, "-=0.5");
    }
});