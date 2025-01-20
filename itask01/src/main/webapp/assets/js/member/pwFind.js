
// 기존에 db에 저장되어 있는 id 예시
const originUserId = "itask";

// 기존에 db에 저장되어 있는 이름 예시
const originUserName = "김승현";

// 기존에 db에 저장되어 있는 폰번호 예시
const originUserPhoneNumber = "01012345678";

// 임시 인증번호 : 1!2@3#4$
const temp_number = "1!2@3#4$";

// 사용자가 입력한 이름 접근
const userName = document.querySelector('.keh-pwFind-name');

// 사용자가 입력한 아이디 접근
const userId = document.querySelector('.keh-pwFind-id');

// 사용자가 입력한 핸드폰번호 접근
const userPhone = document.querySelector('.keh-pwFind-phoneNum');

// 사용자가 인증번호 입력하는 필드 접근
const checkNumber = document.querySelector('.keh-pwFind-checkNum2');

// 인증번호 확인 버튼 접근
const checkBtn = document.querySelector('.keh-pwFind-phoneNum-btn2');

// 인증번호받기 버튼 접근
const getNumber = document.querySelector('.keh-pwFind-phoneNum-btn');

//인증완료 메시지에 접근
const checkMsg = document.querySelector('.keh-pwFind-checkInfo');

//비밀번호 재설정 버튼 접근
const resetting = document.querySelector('.keh-pwFind-pwBtn');


// 인증번호를 받았는지를 알려주는 상태
let userStatus = false; // 디폴트 = 받지 않음

// 최종 회원정보 수정 가능 상태 확인
let changeStatus = false;


//인증번호 클릭시 db에 저장되어있는 이름,아이디,핸드폰번호 일치 
// -> 인증번호가 발송되었습니다
getNumber.addEventListener('click', function(){

  //기존의 아이디, 이름, 핸드폰번호와 맞는지 유효성 검사
  if((originUserId === userId.value) && (originUserName === userName.value)
      && (originUserPhoneNumber === userPhone.value)){
    alert("핸드폰번호로 인증번호가 발송되었습니다.");
    userStatus = true; // 인증 대기 상태
  }else{
    alert("입력한 정보와 일치하는 계정이 없습니다.")
  }
})





// 인증번호 확인 버튼 클릭시
checkBtn.addEventListener('click', function(){
  //인증번호를 받지 않은 상태라면
  if(!userStatus){
    alert("인증번호를 받아주세요");
  }else if(checkNumber.value !== temp_number){
    alert("인증번호가 틀렸습니다");
  }else{
      checkMsg.style.display = "block";
      changeStatus = true;

      // changeBtn.style.disabled = "false";
      // console.log(changeBtn.disabled);
    }
  });


  //비밀번호 재설정 버튼 클릭시
  resetting.addEventListener('click', function(){
    if(!changeStatus){
      alert("변경된 사항이 없습니다.\n로그인 세션이 끊어집니다.")
    }else{
      alert("비밀번호가 성공적으로 변경되었습니다. \n로그인페이지로 이동합니다")
      window.location.href="/workspace/webapp/html/member/login.html";
    }
  })