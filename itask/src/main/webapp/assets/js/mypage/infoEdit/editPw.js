// 새 비밀번호 눈 버튼 기능
const input = document.querySelector(".keh-editPw-pw");
const mark = document.querySelector(".mark");
const input2 = document.querySelector(".keh-editPw-pw2");
const mark2 = document.querySelector(".mark2");

let pwStatus1 = false; // 새 비밀번호 상태
let pwStatus2 = false; // 비밀번호 확인 상태

mark.addEventListener("click", () => {
  if (pwStatus1) {
    input.type = "password";
    mark.src = "./../../../assets/img/hidden 4.png";
  } else {
    input.type = "text";
    mark.src = "./../../../assets/img/Eye.png";
  }
  pwStatus1 = !pwStatus1;
});

mark2.addEventListener("click", () => {
  if (pwStatus2) {
    input2.type = "password";
    mark2.src = "./../../../assets/img/hidden 4.png";
  } else {
    input2.type = "text";
    mark2.src = "./../../../assets/img/Eye.png";
  }
  pwStatus2 = !pwStatus2;
});

// 유효성 검사 메시지와 비밀번호 확인 메시지
const check1 = document.querySelector(".keh-editPw-check1");
const check2 = document.querySelector(".keh-editPw-check2");
const matchMessage1 = document.querySelector(".keh-editPw-check2-1");
const matchMessage2 = document.querySelector(".keh-editPw-check2-2");

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const form = document.querySelector(".keh-editPw-pwForm"); // 폼 요소

// 비밀번호 일치 확인 함수
function checkPasswordMatch() {
  if (input.value === input2.value && input.value !== "") {
    matchMessage1.style.display = "none";
    matchMessage2.style.display = "block";
    return true;
  } else {
    matchMessage1.style.display = "block";
    matchMessage2.style.display = "none";
    return false;
  }
}

// 비밀번호 입력 이벤트
input.addEventListener("input", () => {
  const value = input.value;

  if (value === "") {
    check1.style.display = "none";
    check2.style.display = "none";
  } else if (passwordRegex.test(value)) {
    check1.style.display = "none";
    check2.style.display = "block";
  } else {
    check1.style.display = "block";
    check2.style.display = "none";
  }

  checkPasswordMatch();
});

input2.addEventListener("input", checkPasswordMatch);

// 폼 제출 이벤트 처리
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 폼 제출 동작 방지

  if (checkPasswordMatch()) {
    alert("비밀번호가 변경되었습니다. 재로그인해주세요.");
    window.location.href = "./../../member/login.html"; // 로그인 페이지로 이동
  } else {
    alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
  }
});