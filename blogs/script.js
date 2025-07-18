// 顶部导航栏显示控制
const header = document.getElementById("top-header");
let isHeaderVisible = false;

// 鼠标进入顶部区域显示导航
document.addEventListener("mousemove", (e) => {
  if (e.clientY < 30 && !isHeaderVisible) {
    header.style.top = "0";
    isHeaderVisible = true;
  } else if (e.clientY > 100 && isHeaderVisible) {
    header.style.top = "-60px";
    isHeaderVisible = false;
  }
});

// 滚动时隐藏导航
window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && isHeaderVisible) {
    header.style.top = "-60px";
    isHeaderVisible = false;
  }
});
