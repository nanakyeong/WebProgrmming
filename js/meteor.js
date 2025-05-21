document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".meteor-container");

    for (let i = 0; i < 20; i++) {
        const meteor = document.createElement("div");
        meteor.classList.add("meteor");

        const delay = Math.random() * 10;
        const left = Math.random() * 100;

        meteor.style.left = `${left}vw`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${2 + Math.random() * 3}s`;

        container.appendChild(meteor);
    }
});