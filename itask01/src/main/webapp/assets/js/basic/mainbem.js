function BannerSlider(target) {
  let index = 1; // 슬라이더의 현재 위치를 나타내는 변수 (초기값은 1)
  let isMoving = true; // 슬라이더 이동 가능 여부 플래그
  const speed = 1000; // 전환 애니메이션 속도 (밀리초 단위)
  const slider = document.querySelector(target); // 슬라이더 요소 선택
  const items = Array.from(slider.children); // 슬라이더 내부 자식 요소를 배열로 변환
  const size = items.length; // 슬라이더 항목의 개수

  // 슬라이더 항목을 감싸는 래퍼(wrapper) 생성
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex"; // 플렉스박스 스타일로 슬라이더 가로 정렬
  wrapper.style.transition = `transform ${speed / 1000}s ease`; // 전환 효과
  wrapper.style.width = `${100 * (size + 2)}%`; // 복제된 항목을 포함한 전체 너비 설정
  wrapper.style.transform = `translateX(-${100 * index}%)`; // 초기 위치로 이동

  // 무한 루프 효과를 위해 첫 번째와 마지막 항목을 복제
  wrapper.appendChild(items[size - 1].cloneNode(true)); // 마지막 항목 복제 후 앞에 추가
  items.forEach((item) => wrapper.appendChild(item.cloneNode(true))); // 모든 항목 복제 후 추가
  wrapper.appendChild(items[0].cloneNode(true)); // 첫 번째 항목 복제 후 뒤에 추가

  slider.innerHTML = ""; // 슬라이더의 기존 내용을 제거
  slider.appendChild(wrapper); // 새로운 래퍼를 슬라이더에 추가

  // 전환 종료 시 호출되는 이벤트 핸들러
  wrapper.addEventListener("transitionend", () => {
    if (index === 0) { // 첫 번째 슬라이드보다 왼쪽으로 이동한 경우
      index = size; // 마지막 슬라이드로 이동
      wrapper.style.transition = "none"; // 전환 애니메이션 제거
      wrapper.style.transform = `translateX(-${100 * index}%)`; // 마지막 슬라이드 위치로 이동
    } else if (index === size + 1) { // 마지막 슬라이드보다 오른쪽으로 이동한 경우
      index = 1; // 첫 번째 슬라이드로 이동
      wrapper.style.transition = "none"; // 전환 애니메이션 제거
      wrapper.style.transform = `translateX(-${100 * index}%)`; // 첫 번째 슬라이드 위치로 이동
    }
    isMoving = true; // 슬라이더 이동 가능 상태로 변경
  });

  // 다음 슬라이드와 이전 슬라이드로 이동하는 메서드 반환
  return {
    next: () => {
      if (!isMoving) return; // 슬라이더가 이동 중일 때는 동작하지 않음
      isMoving = false; // 이동 시작
      index++; // 다음 슬라이드로 인덱스 증가
      wrapper.style.transition = `transform ${speed / 1000}s ease`; // 전환 애니메이션 적용
      wrapper.style.transform = `translateX(-${100 * index}%)`; // 슬라이더 이동
    },
    prev: () => {
      if (!isMoving) return; // 슬라이더가 이동 중일 때는 동작하지 않음
      isMoving = false; // 이동 시작
      index--; // 이전 슬라이드로 인덱스 감소
      wrapper.style.transition = `transform ${speed / 1000}s ease`; // 전환 애니메이션 적용
      wrapper.style.transform = `translateX(-${100 * index}%)`; // 슬라이더 이동
    },
  };
}

// 슬라이더 초기화
const bannerSlider = new BannerSlider("#banner-slider");

// 왼쪽 버튼 클릭 시 이전 슬라이드로 이동
document.querySelector(".banner-left").addEventListener("click", () => bannerSlider.prev());

// 오른쪽 버튼 클릭 시 다음 슬라이드로 이동
document.querySelector(".banner-right").addEventListener("click", () => bannerSlider.next());

// 3초마다 자동으로 다음 슬라이드로 이동
setInterval(() => {
  bannerSlider.next();
}, 3000);
