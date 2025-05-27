// 캔버스 요소를 가져오고 2D 렌더링 컨텍스트를 설정
const canvas = document.getElementById('loadingCanvas');
const ctx = canvas.getContext('2d');

// 회전 각도 초기값
let angle = 0;

// 로딩 애니메이션을 그리는 함수
function draw() {
    // 이전 프레임을 지움
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스 중앙 좌표 계산
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 선 색상 설정 (흰색)
    ctx.strokeStyle = '#fff';
    // 선 굵기 설정
    ctx.lineWidth = 5;

    // 바깥쪽 회전 원호 그리기 (시계방향 회전)
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, angle, angle + Math.PI * 1.2); // 반지름 40, 1.2π 라디안 길이
    ctx.stroke();

    // 안쪽 회전 원호 그리기 (반시계방향 회전)
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, -angle, -angle + Math.PI * 1.2); // 반지름 20, 반대 방향 회전
    ctx.stroke();

    // 각도 증가시켜 애니메이션 효과 만들기
    angle += 0.05;

    // 다음 프레임을 요청하여 draw 함수 반복 실행
    requestAnimationFrame(draw);
}

// 애니메이션 시작
draw();