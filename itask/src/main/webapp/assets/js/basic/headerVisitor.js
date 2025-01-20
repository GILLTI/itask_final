document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-logo");
    const searchInput = document.querySelector(".search-input");

    searchButton.addEventListener("click", function () {
      const query = searchInput.value.trim();
      if (query) { 
        location.href = `/search?query=${encodeURIComponent(query)}`;
      } else {
        alert("검색어를 입력하세요.");
      }
    });

    // 엔터키 입력 시 검색 처리
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
      }
    });
  });