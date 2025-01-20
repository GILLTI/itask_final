// 250112 - 이거 우선 쉬운버전임....
// //사용자 입력하는 부분 접근
// const nickName = document.querySelector('.keh-editInfo-nickName');
// // console.log(nickName);

// const tempNick = "itask123"; // 중복 체크 가능을 위한 임시 닉네임 설정

// const submitBtn = document.querySelector('.keh-editInfo-nickName-btn');
// const duplicateNickName = document.querySelector('.bjs-editInfo-duplicate-nickName');

// // 수정 버튼 클릭시 중복 조회
// submitBtn.addEventListener('click', function(event) {
//   event.preventDefault(); // 기본 폼 제출 동작 방지 참고

//   const check = /^[가-힣a-zA-Z0-9]+$/; // 정규식 표현을 참고함

//   // 중복이면 중복멘트 띄우기
//   if(nickName.value === tempNick){
//     duplicateNickName.style.display = "block";
//   }else { 
//     // 중복아님 
//     // 한글 영문 숫자 and 글자수 6~15자 and 특수문자 불가
//     // !(한글 영문 숫자아니고) or (글자수 6~15자 아닐시) 

//     if(!nickName.value.match(check) || nickName.value.length < 6 || nickName.value.length > 15){
//       alert("닉네임 조건에 맞지 않습니다. 다시 입력해주세요");
//     }else {
//       alert("닉네임이 변경되었습니다!"); // 성공 메시지 출력
//       location.reload(true);
//       //
//     }

//     // duplicateNickName.style.display = "none"; // 중복 메시지 숨김

//   }
// })

// ---------------------  250112 이것으로 적용 - 배지수
// 사용자가 입력하는 동안 유효성검사가 동작하게 설정

// 사용자 입력하는 부분 접근
const nickName = document.querySelector('.keh-editInfo-nickName');
const tempNick = "승현의스윙스칩"; // 중복 체크 가능을 위한 임시 닉네임 설정
const duplicateNickName = document.querySelector('.bjs-editInfo-duplicate-nickName');
const submitBtn = document.querySelector('.keh-editInfo-nickName-btn');

// 새로운 닉네임 조건 불일치 메시지를 동일한 위치에 생성
const invaildMessage = document.createElement('div');
invaildMessage.textContent = "닉네임 조건에 맞지 않습니다.";
with (invaildMessage.style) {
  color = "#D96073";
  fontWeight = "bold";
  textAlign = "left";
  padding = "10px 30px";
  fontSize = "20px";
  display = "none";
}

const correctMessage = document.createElement('div');
correctMessage.textContent = "닉네임으로 적합합니다.";
with (correctMessage.style) {
  color = "#22A309";
  fontWeight = "bold";
  textAlign = "left";
  padding = "10px 30px";
  fontSize = "20px";
  display = "none";
}

// `duplicateNickName` 다음에 `invaildMessage` 및 `correctMessage` 추가
duplicateNickName.insertAdjacentElement('afterend', invaildMessage);
duplicateNickName.insertAdjacentElement('afterend', correctMessage);

const check = /^[가-힣a-zA-Z0-9]+$/; // 정규식: 한글, 영문, 숫자만 허용

// 입력 필드에서 입력하는 동안 유효성 검사
nickName.addEventListener('input', function () {
  const inputValue = nickName.value;

  // 초기 메시지 상태 숨김
  invaildMessage.style.display = "none";
  duplicateNickName.style.display = "none";
  correctMessage.style.display = "none";

  // 유효성 검사
  if (
    !check.test(inputValue) || // 한글, 영문, 숫자가 아닌 문자가 포함되었거나
    inputValue.length < 6 || // 6자 미만이거나
    inputValue.length > 15 // 15자 초과일 경우
  ) {
    invaildMessage.style.display = "block"; // 조건 불일치 메시지 표시
  } else if (inputValue === tempNick) {
    // 중복 체크
    duplicateNickName.style.display = "block"; // 중복 메시지 표시
  } else {
    // 조건을 모두 만족하는 경우
    correctMessage.style.display = "block"; // 적합 메시지 표시
  }
});

// 수정 버튼 클릭 시 유효성 검사에 따라 alert() 띄우는 이벤트
submitBtn.addEventListener('click', function (event) {
  const inputValue = nickName.value;

  // 유효성 검사에서 실패할 경우
  if (
    !check.test(inputValue) || // 한글, 영문, 숫자가 아닌 문자가 포함되었거나
    inputValue.length < 6 || // 6자 미만이거나
    inputValue.length > 15 // 15자 초과일 경우
  ) {
    alert("닉네임 조건에 맞지 않습니다. 다시 입력해주세요");
    event.preventDefault(); // 새로고침 못하게
  } else if (inputValue === tempNick) {
    alert("이미 있는 닉네임입니다. 다른 닉네임을 입력해주세요");
    event.preventDefault(); // 새로고침 못하게
  } else {
    alert("닉네임이 성공적으로 변경되었습니다!"); // 성공 메시지
    location.reload(true); // 새로고침
  }
});


// 회원탈퇴하기

document.getElementById("idid").addEventListener("click", function(){
  // confirm("진짜 탈퇴하겠습니까?");
  const isExit = confirm("진짜 탈퇴하겠습니까?");
  if(isExit){
    //눌렀을 때 원하는 경로로 가게 하기
    location.href = "https://www.naver.com/"; 
    // 나중에 메인 도메인 정해지면 메인으로 이동하기로함
    // return "https://www.naver.com/"; 이렇게 하면 이동 안됨
  }else{
    return;
  }
 console.log(isExit);
})
