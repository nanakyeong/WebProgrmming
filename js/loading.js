
    const canvas = document.getElementById('loadingCanvas');
    const ctx = canvas.getContext('2d');
    let angle = 0;

    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, angle, angle + Math.PI * 1.2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, -angle, -angle + Math.PI * 1.2);
    ctx.stroke();

    angle += 0.05;
    requestAnimationFrame(draw);
}

    draw();
