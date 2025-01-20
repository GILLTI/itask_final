const openQuizModel = document.getElementById("open-quiz-modal");
const quizModel = document.getElementById("quiz-modal");
const closeQuizModel = document.getElementById("close-quiz-modal");
const checkAnswerBtn = document.getElementById("check-answer-btn");
const answerDropdown = document.getElementById("pro-answer-dropdown");
const quizOptions = document.getElementByName("quiz-option");

// 퀴즈 질문 클릭하면 모달 열기
openQuizModel.addEventListener("click", () => {
  quizModel.style.display = "flex";
})

// 모달 닫기 클릭하면 모달 닫기
closeQuizModel.addEventListener("click", () => {
  quizModel.style.display = "none";
  answerDropdown.style.display = "none";
  // 옵션 초기화
  quizOptions.forEach((option) => {
    option.checked = false;
  });
});

// 정답 확인 버튼 클릭 시
checkAnswerBtn.addEventListener("click", () => {
  const selectedOption = 
  Array.from(quizOptions).find((option) => 
    option.checked);
  if (selectedOption) {
    if(selectedOption.value === "1") {
      answerDropdown.textContent = "정답: 1. 귀요미";
    }else {
      answerDropdown.textContent = 
      `오답입니다. 선택한 답: ${selectedOption.value}`;
    }
    answerDropdown.style.display = "block";
  }else{
    alert("정답을 선택해주세요");
  }
});

// 모달창 밖에 클릭시 닫기
window.addEventListener("click", (event) => {
  if (event.target === quizModel) {
    quizModel.style.display = "none";
    answerDropdown.style.display = "none";
    quizOptions.forEach((option) => {
      option.checked = false;
    });
  }
});