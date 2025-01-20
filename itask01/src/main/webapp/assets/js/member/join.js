// 아이디 중복검사
document.querySelector('.lsa-join-info-id-btn').addEventListener('click', function(event) {
  event.preventDefault();
  const idInput = document.querySelector('.lsa-join-info-id');
  const idCheckMessage = document.querySelector('.lsa-join-info-id-check1');

  // 간단한 아이디 유효성 검사 (정규식 활용)
  const idRegex = /^[a-zA-Z0-9]{6,15}$/;
  if (idRegex.test(idInput.value)) {
      idCheckMessage.textContent = "아이디가 적합합니다.";
      idCheckMessage.style.color = "green"; 
  } else {
      idCheckMessage.textContent = "아이디는 영문, 숫자 조합으로 6~15자 이내여야 합니다.";
      idCheckMessage.style.color = "red"; 
  }
});

// 닉네임 중복검사
document.querySelector('.lsa-join-info-nickName-btn').addEventListener('click', function(event) {
  event.preventDefault();
  const nickInput = document.querySelector('.lsa-join-info-nickName');
  const nickCheckMessage = document.querySelector('.lsa-join-info-nickName-check');
  
  const nickRegex = /^[a-zA-Z0-9가-힣]{2,10}$/;
  if (nickRegex.test(nickInput.value)) {
      nickCheckMessage.textContent = "닉네임이 적합합니다.";
      nickCheckMessage.style.color = "#green"; 
  } else {
      nickCheckMessage.textContent = "닉네임은 2~10자, 영문, 숫자, 한글만 가능합니다.";
      nickCheckMessage.style.color = "red"; 
  }
});

// 휴대폰 인증번호 받기
document.querySelector('.lsa-join-info-phoneNumber-btn').addEventListener('click', function(event) {
  event.preventDefault();
  const phoneInput = document.querySelector('.lsa-join-info-phoneNumber');
  const certiMessage = document.querySelector('.lsa-join-info-certiNumber-check');

  // 전화번호 유효성 검사 
  const phoneRegex = /^[0-9]{10,11}$/;
  if (phoneRegex.test(phoneInput.value)) {

      alert("인증번호가 발송되었습니다.");
  } else {
      alert("올바른 전화번호를 입력해 주세요.");
  }
});

// 인증번호 확인
document.querySelector('.lsa-join-certiNumber-btn').addEventListener('click', function(event) {
  event.preventDefault();
  
  const certiInput = document.querySelector('.lsa-join-info-certiNumber');
  const certiMessage = document.querySelector('.lsa-join-info-certiNumber-check');

  const validCertiNumber = "123456"; 

  if (certiInput.value === validCertiNumber) {
      certiMessage.textContent = "인증번호가 확인되었습니다.";
      certiMessage.style.color = "green"; 
  } else {
      certiMessage.textContent = "인증번호가 일치하지 않습니다.";
      certiMessage.style.color = "red"; 
  }
});

// 회원가입 버튼 클릭 시 필수 항목 확인
document.querySelector('.lsa-join-infoBtn').addEventListener('click', function(event) {
  const nameInput = document.querySelector('.lsa-join-info-name');
  const phoneInput = document.querySelector('.lsa-join-info-phoneNumber');
  const certiInput = document.querySelector('.lsa-join-info-certiNumber');
  const pw1Input = document.querySelector('.lsa-join-info-pw1');
  const pw2Input = document.querySelector('.lsa-join-info-pw2');
  const idInput = document.querySelector('.lsa-join-info-id');
  const nickInput = document.querySelector('.lsa-join-info-nickName');

  // 필수 항목 체크
  if (!nameInput.value || !phoneInput.value || !certiInput.value || !pw1Input.value || !pw2Input.value || !idInput.value || !nickInput.value) {
      alert("모든 필수 항목을 입력해 주세요.");
      event.preventDefault();  
      return;
  }

  // 비밀번호 일치 여부 확인
  if (pw1Input.value !== pw2Input.value) {
      alert("비밀번호가 일치하지 않습니다.");
      event.preventDefault();  
      return;
  }

  // 인증번호가 맞는지 확인
  if (certiInput.value !== "123456") {
      alert("인증번호가 일치하지 않습니다.");
      event.preventDefault(); 
      return;
  }
  alert("회원가입이 완료되었습니다.");
});
