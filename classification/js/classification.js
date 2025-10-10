const categoryData = {
    "网络相关": [
      { title: "异地组网", desc: "iStoreOS+Tailscale实现外网设备访问局域网内设备",src:"../content/0804/con01.html" }
    ],
    "其他分类": [
      { title: "在本地连接github仓库的方法", desc: "用Git连接远程仓库方便管理",src:"../content/1010/con02.html" }
    ],
  };

  const links = document.querySelectorAll('.cool-category-list a');
  const grid = document.getElementById('article-grid');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const name = link.textContent.trim().replace(/^🧠|🌐|🛠|📝|📷|📦/g, '').trim();
      const items = categoryData[name];
      if (!items) {
        grid.innerHTML = `<p style="color: #fff;">该分类暂无内容。</p>`;
        return;
      }

      grid.innerHTML = items.map(item => `
        <a href="${item.src}">
        <div class="article-card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        </a>
      `).join('') + `
      <a href="" >
        <div class="article-card view-all">
          <h3>📖 浏览全部</h3>
          <p>点击查看更多 "${name}" 相关内容。</p>
        </div>
      </a>
      `;
    });
  });

