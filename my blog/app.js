// 博客数据 - 可自由修改
const blogPosts = [
    {
        id: 1,
        title: "VSCode入门指南",
        date: "2024-03-15",
        content: `
            ## 安装必备插件
            推荐安装这些扩展：
            - Live Server：实时预览
            - Prettier：代码美化
            - Chinese Language Pack：中文界面

            \`\`\`javascript
            console.log("Hello VSCode!");
            \`\`\`
        `
    },
    {
        id: 2,
        title: "CSS学习日记",
        date: "2024-03-16",
        content: `
            ## Flex布局技巧
            实现垂直居中：
            \`\`\`css
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            \`\`\`
        `
    }
];

// 渲染文章列表
function renderPostList() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = blogPosts.map(post => `
        <div class="post-item" onclick="showPost(${post.id})">
            <h3>${post.title}</h3>
            <small>${post.date}</small>
        </div>
    `).join('');
}

// 显示文章内容
function showPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    const contentDiv = document.getElementById('post-content');
    contentDiv.innerHTML = marked.parse(post.content);
}

// 初始化
renderPostList();
// 在app.js末尾添加
// 搜索功能
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.createElement('input');
    searchBox.placeholder = "搜索文章...";
    searchBox.style.cssText = `
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    `;
    document.querySelector('header').appendChild(searchBox);

    searchBox.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = blogPosts.filter(post => 
            post.title.toLowerCase().includes(keyword) || 
            post.content.toLowerCase().includes(keyword)
        );
        renderFilteredPosts(filtered);
    });
});

function renderFilteredPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = posts.map(post => `
        <div class="post-item" onclick="showPost(${post.id})">
            <h3>${post.title}</h3>
            <small>${post.date}</small>
        </div>
    `).join('');
}