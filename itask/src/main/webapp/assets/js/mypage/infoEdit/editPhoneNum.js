// 이름 필드에 접근 : 나중에 백에서 값 저장할때 사용
const name = document.querySelector('.keh-editPhoneNum-name');

// 핸드폰 필드에 접근 : 나중에 백에서 값 저장할때 사용
const userPhoneNum = document.querySelector('.keh-editPhoneNum-phoneNum');

// 임시 인증번호 : 1!2@3#4$
const temp_number = "1!2@3#4$";

// 인증번호 받기 버튼
const getNumber = document.querySelector('.keh-editPhoneNum-phoneNum-btn');


// 사용자가 인증번호 입력하는 필드 접근
const checkNumber = document.querySelector('.keh-editPhoneNum-phoneNum2');

// 인증번호 확인 버튼
const checkBtn = document.querySelector('.keh-editPhoneNum-phoneNum-btn2');

//인증완료 메시지에 접근
const checkMsg = document.querySelector('.keh-editPhoneNum-checkInfo');

//변경된 정보 저장하기 버튼에 접근
const changeBtn = document.querySelector('.keh-editPhoneNum-submit-btn');

// 인증번호를 받았는지를 알려주는 상태
let userStatus = false; // 디폴트 = 받지 않음
let changeStatus = false;

// 인증번호 받기 버튼 클릭시
getNumber.addEventListener('click', function(){
  // console.log(userPhoneNum.value);
  if(userPhoneNum.value === ""){
    alert("핸드폰번호가 유효하지 않습니다.")
  }else{
    alert("핸드폰으로 인증번호가 발송되었습니다. \n인증번호가 오지 않는다면 핸드폰 번호를 다시 확인해주세요")
    userStatus = true; // 인증 대기 상태
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


//변경된 정보 클릭시 추가해야함
changeBtn.addEventListener('click', function(){
  // location.href="./../../../../html/mypage/infoEdit/editInfo.html";
  if(!changeStatus){
    alert("변경된 사항이 없습니다.\n로그인 세션이 끊어집니다.")
  }else{
    alert("비밀번호가 성공적으로 변경되었습니다. \n로그인페이지로 이동합니다")
    location.href="/workspace/webapp/html/member/login.html";
  }
  
  // location.href="https://www.naver.com";
})
