// 公共JavaScript函数

// 菜单折叠功能
function toggleMenu(category) {
    category.classList.toggle('collapsed');
}

// 初始化菜单状态（默认折叠）
function initMenuState() {
    const categories = document.querySelectorAll('.menu-category');
    categories.forEach(category => {
        category.classList.add('collapsed');
    });
}

// 页面加载完成后初始化菜单
document.addEventListener('DOMContentLoaded', function() {
    initMenuState();
}); 