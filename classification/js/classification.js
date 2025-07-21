const categoryData = {
    "前端开发": [
      { title: "HTML & CSS 入门", desc: "快速上手网页开发基础。" },
      { title: "React 状态管理", desc: "掌握组件间的数据传递与控制。" },
      { title: "Vue3 初体验", desc: "使用 Composition API 构建现代应用。" }
    ],
    // "人工智能": [
    //   { title: "神经网络原理", desc: "理解感知机到深度学习的演化。" },
    //   { title: "机器学习实战", desc: "使用 Python 实现分类模型。" },
    //   { title: "大语言模型", desc: "从GPT到BERT，自然语言模型漫谈。" }
    // ],
    // "后端技术": [
    //   { title: "Node.js 入门", desc: "服务端 JavaScript 的强大能力。" },
    //   { title: "数据库优化技巧", desc: "索引、缓存与查询性能提升。" },
    //   { title: "RESTful API 设计", desc: "优雅、高效的接口设计理念。" }
    // ]
    // 你可以继续添加其他分类
  };

  const links = document.querySelectorAll('.cool-category-list a');
  const grid = document.getElementById('article-grid');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const name = link.textContent.trim().replace(/^🧠|🌐|🛠|📝|📷|📁/g, '').trim();
      const items = categoryData[name];
      if (!items) {
        grid.innerHTML = `<p style="color: #fff;">该分类暂无内容。</p>`;
        return;
      }

      grid.innerHTML = items.map(item => `
        <div class="article-card">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `).join('') + `
        <div class="article-card view-all">
          <h3>📖 浏览全部</h3>
          <p>点击查看更多 "${name}" 相关内容。</p>
        </div>
      `;
    });
  });

