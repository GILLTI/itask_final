document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href; // 현재 페이지 URL
    document.querySelectorAll(".submenu-link").forEach(link => {
        if (currentUrl.includes(link.href)) {
            link.classList.add("active-link"); // 일치하는 링크에 클래스 추가
        }
    });
});