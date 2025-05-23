document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".meteor-container");
    const totalHeight = document.body.scrollHeight;

    for (let i = 0; i < 40; i++) {
        const meteor = document.createElement("div");
        meteor.classList.add("meteor");

        const delay = Math.random() * 10;
        const left = Math.random() * 100;
        const fallDistance = 300 + Math.random() * 800;

        meteor.style.left = `${left}vw`;
        meteor.style.top = `0px`;
        meteor.style.setProperty("--fall-distance", `${fallDistance}px`);
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${2 + Math.random() * 3}s`;

        container.appendChild(meteor);
    }
});