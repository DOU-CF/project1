const hamburgerMenu = document.querySelector('.hamburger-menu');// 選取漢堡圖示(不是監聽漢堡圖示)
const mobileNavbar= document.querySelector('.mobile-navbar');
// .mobile-navbar 直接操作父元素
// 原寫 “navbar-list” ，但是有兩個navbar-list. 導致畫面錯誤.


hamburgerMenu.addEventListener('click', function () {
    // 切換 .nav-active 類別到 .mobile-navbar上
    mobileNavbar.classList.toggle('nav-active');

});

document.querySelectorAll('.coach-card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('active'); // 點擊後切換顯示/隱藏技能卡片
    });
});