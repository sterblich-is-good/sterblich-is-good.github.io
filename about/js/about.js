// 页面加载时添加动画类
    window.addEventListener("load", function () {
      document.body.classList.add("loaded");
    });

    // 滚动显示动画（标题逐个显现）
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const visiblePoint = 150;

        if (elementTop < windowHeight - visiblePoint) {
          reveals[i].classList.add("visible");
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // 初始调用