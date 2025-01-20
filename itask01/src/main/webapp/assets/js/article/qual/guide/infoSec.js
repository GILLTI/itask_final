function calculateDay(target){
  const today = new Date();
  const targetDay = new Date(target);

  const sec = targetDay - today;

  const day = Math.ceil(sec / (1000 * 60 * 60 * 24));

  return day;
}

// 날짜 바꾸려면 여기만 t 의 값만 업뎃해주면됨
const t = '2025-02-04';
const dDay = calculateDay(t);

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelector(".lch-infoSec-dday").innerText = dDay;
});