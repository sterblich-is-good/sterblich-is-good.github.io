import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    const App = {
      setup() {
        const liList = ref([
            {id:1,title:"🧠 人工智能"},
            {id:2,title:"🛠 后端技术"},
            {id:3,title:"📝 学习笔记"},
            {id:4,title:"📷 生活记录"},
            {id:5,title:"🌐 网络相关"},
            {id:6,title:"📦 其他分类"},
        ])

        const activeCategory = ref(1)

        const allArticles = {
          5: [
            { id: 501, title: "异地组网", desc: "iStoreOS+Tailscale实现外网设备访问局域网内设备",link:"../content/0804/con01.html" },
          ],
          6: [
            { id: 601, title: "在本地连接github仓库的方法", desc: "用Git连接远程仓库方便管理",link:"../content/1010/con02.html" },
          ],
        }

        const articles = ref(allArticles[activeCategory.value])

        function selectCategory(id) {
          activeCategory.value = id
          articles.value = allArticles[id]
        }

        return { liList, activeCategory, articles, selectCategory }
      },
      template: `
        <div class="cool-container">
          <aside class="cool-sidebar">
            <h2>分类</h2>
            <ul class="cool-category-list">
              <li 
                v-for="li in liList" 
                :key="li.id"
                @click="selectCategory(li.id)"
                :class="{ active: activeCategory === li.id }"
              >
                <a href="#">{{ li.title }}</a>
              </li>
            </ul>
          </aside>

          <main class="cool-main" id="article-area">
            <h1>🎉 欢迎浏览分类！</h1>
            <p>点击分类进入你感兴趣的内容板块。</p>

            <div class="article-grid" id="article-grid">
              <a 
                v-for="item in articles"
                :key="item.id"
                class="article-card"
                :href="item.link"
              >
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </a>
            </div>
          </main>
        </div>
      `
    }

    // ✅ 关键：创建 Vue 应用并挂载到 #app
    createApp(App).mount('#app')

