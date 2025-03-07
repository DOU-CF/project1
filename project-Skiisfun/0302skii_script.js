const hamburgerMenu = document.querySelector('.hamburger-menu');// 監聽漢堡圖示
const navbarList= document.querySelector('.navbar-list');//導航欄


hamburgerMenu.addEventListener('click', function () {
    // 切換 .nav-active 類別到 .navbar-list 上
    navbarList.classList.toggle('nav-active');

});