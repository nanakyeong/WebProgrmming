
    document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".case-box");

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
    setTimeout(() => {
    entry.target.classList.add("visible");
}, i * 150);
    observer.unobserve(entry.target);
}
});
}, { threshold: 0.2 });

    boxes.forEach(box => observer.observe(box));
});
