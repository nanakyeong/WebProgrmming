document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".meteor-container");

    const totalHeight = document.body.scrollHeight;

    // 총 40개의 유성을 생성
    for (let i = 0; i < 40; i++) {
        const meteor = document.createElement("div");
        // meteor 클래스 추가 (CSS에서 애니메이션 정의되어 있어야 함)
        meteor.classList.add("meteor");

        // 유성마다 다른 애니메이션 시작 지연 시간 설정 (0~10초)
        const delay = Math.random() * 10;
        // 유성의 수평 위치를 화면 너비 기준(%)으로 무작위 설정
        const left = Math.random() * 100;
        // 유성이 떨어지는 거리 (300~1100px 사이 랜덤)
        const fallDistance = 300 + Math.random() * 800;

        // 유성의 수평 위치 설정
        meteor.style.left = `${left}vw`;
        // 유성의 수직 위치는 항상 최상단에서 시작
        meteor.style.top = `0px`;
        // CSS 변수 --fall-distance 설정
        meteor.style.setProperty("--fall-distance", `${fallDistance}px`);
        // 애니메이션 시작 지연 시간 설정
        meteor.style.animationDelay = `${delay}s`;
        // 애니메이션 지속 시간 설정
        meteor.style.animationDuration = `${2 + Math.random() * 3}s`;

        // 설정된 유성 요소를 컨테이너에 추가
        container.appendChild(meteor);
    }
});