const totalBtn = document.querySelector('.keh-agreement-total');

const terms = document.querySelectorAll('.keh-agreement-terms');

// 노드리스트에서 map을 사용할 수 있도록
NodeList.prototype.map = Array.prototype.map;


// 전체 클릭시 -> 나머지 모두 동의
totalBtn.addEventListener('click', function(){
  terms.forEach((term) => {
    term.checked = totalBtn.checked;
  })
})


// 전체 제외 모두 클릭시 -> 전체도 체크
terms.forEach((term) => {
  term.addEventListener('click', function(){
    totalBtn.checked = terms.map(term => term.checked).filter((checked)=> checked).length === 3;
  })
})

const nextBtn = document.querySelector('.keh-agreement-btn');

nextBtn.addEventListener('click', function(){
  location.href="/workspace/webapp/html/member/join.html";
})