window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('btnBackToTop').style.display = 'block';
    } else {
      document.getElementById('btnBackToTop').style.display = 'none';
    }
  });

  function backToTop() {
    const position =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (position) {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, position - position / 10);
        backToTop();
      });
    }
  }