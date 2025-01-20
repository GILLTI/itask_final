document.getElementById("noticebutton").addEventListener("click", () => {
  window.location.href = "/workspace/webapp/html/notice/notice.html";
});

document.querySelectorAll(".main-notice-item").forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("data-id"); //공지사항 id 가져오기
    window.location.href = `/workspace/webapp/html/notice/noticeDetail.html?id=${id}`; // 공지사항 상세페이지
  });
});