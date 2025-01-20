const categoryBtns = document.querySelectorAll('.bjs-itask-category-btn');

// 카테고리 선택시 색 변하는 이벤트 (필요한가?)
categoryBtns.forEach((categoryBtn) => {
  categoryBtn.addEventListener('click', function(){
    // 모든 버튼에서 bjs-itask-select 클래스 제거
    categoryBtns.forEach((Btn) => Btn.classList.remove('bjs-itask-select'));

    // 클릭한 버튼에 bjs-itask-select 클래스 추가
    categoryBtn.classList.add('bjs-itask-select');
  });
});
