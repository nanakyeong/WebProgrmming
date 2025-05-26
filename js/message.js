const cheers = [
    "넌 충분히 잘하고 있어요!",
    "오늘도 멋지게 해내고 있네요!;",
    "쉬는 것도 준비의 일부예요. 너무 무리하지 마세요.",
    "계획을 세우는 당신, 이미 반은 성공했어요.",
    "포기하지 않는 모습이 정말 멋져요^^;"
];

function showCheer() {
    const msg = cheers[Math.floor(Math.random() * cheers.length)];
    document.getElementById("cheer-msg").innerText = msg;
}

function sendSelfCheer() {
    const msg = document.getElementById("selfInput").value;
    const floating = document.getElementById("floating-cheer");
    const clap = document.getElementById("clapSound");

    if (!msg.trim()) return;

    floating.textContent = msg;
    floating.style.opacity = 1;

    clap.currentTime = 0;
    clap.volume = 1;
    clap.play().catch(e => {
        console.warn("Audio play blocked:", e);
    });

    setTimeout(() => {
        floating.style.opacity = 0;
    }, 2000);
}