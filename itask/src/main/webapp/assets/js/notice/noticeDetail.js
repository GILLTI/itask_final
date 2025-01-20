let count = 0;

const img = document.getElementById('Detail-moniter-img')
const countplus = document.getElementById('Detail-monitercount')

img.addEventListener('click',function(){
  if(count===0){
    count++;
  }else{
    count--;
  }

countplus.textContent = count;
})

const noticeData = {
  1 : {
    category: "전체",
    title : "사이트 점검 안내",
    date : "2025-01-09 00:00",
    text : "점검시간 : 2025년 1월 10일 00시 00분~ 2025년 1월 24일까지",
  },
  2 : {
    category: "전체",
    title : "사이트 점검 안내",
    date : "2025-01-10 00:00",
    text : "점검시간 : 2025년 1월 15일 00시 00분~04시00분",
  },
};

// 공지사항 url에서 id 가져옴
const urlParams = new URLSearchParams(window.location.search);
const noticeId = urlParams.get("id");

// 공지사항 데이터 표시
if (noticeData[noticeId]) {
  document.getElementById("notice-category").textContent =
    noticeData[noticeId].category;
  document.getElementById("notice-title").textContent =
    noticeData[noticeId].title;
  document.getElementById("notice-date").textContent =
    noticeData[noticeId].date;
  document.getElementById("notice-text").textContent =
    noticeData[noticeId].text;
} else {
  document.querySelector(".mjh-noticeDetail-main").textContent =
    "해당 공지사항을 찾을 수 없습니다.";
}