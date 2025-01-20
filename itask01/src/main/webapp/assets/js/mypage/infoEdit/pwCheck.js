// const mark = document.querySelector('.mark');
// console.log(mark);

// mark.addEventListener('click', (e) => {
//   const input = document.querySelector("input[name=password]");
//   const isText = input.type === "text";

//   input.setAttribute("type", isText ? 'password' : 'text');
//   e.target.style.backgroundImage = `url(${isText ? './../../../assets/img/hidden 4.png' : './../../../assets/img/Eye.png'})`;
// })


const input = document.querySelector(".keh-pwCheck-pw");
const mark = document.querySelector(".mark");

let pwStatus = false; // 초기 상태: 비밀번호 숨김


// 비밀번호 표시하기 / 가리기
mark.addEventListener("click", () => {
  if (pwStatus) {
    input.type = "password"; // 비밀번호 숨김
    mark.src = "./../../../assets/img/hidden 4.png"; // 아이콘 변경
  } else {
    input.type = "text"; // 비밀번호 표시
    mark.src = "./../../../assets/img/Eye.png"; // 아이콘 변경
  }
  pwStatus = !pwStatus; // 상태 변경
});


// 비밀번호 일치 여부 확인

let originPw = "12345678!"


const passwd = document.querySelector('.keh-pwCheck-pw');
const btn = document.querySelector(".keh-pwCheck-pwBtn");

 // 버튼 클릭 시 비밀번호 일치 여부 확인
 btn.addEventListener("click", (e) => {
  e.preventDefault(); // 기본 동작 막기 (페이지 이동 방지)
  const enteredPw = input.value; // 입력된 비밀번호 가져오기
  
  if (enteredPw === originPw) {
    alert("인증되었습니다");
    window.location.href = "./editInfo.html";
  } else {
    alert("비밀번호가 틀립니다");
  }
});
