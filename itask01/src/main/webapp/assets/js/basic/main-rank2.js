const rankingData = [
  { ranking: 1, rankingname: '김영선', rankingdetails: '27inch 87m / 경력8+', rankingicon: '/path/to/kimyoungsun-icon.jpg', profilePage: '/user/kimyoungsun' },
  { ranking: 2, rankingname: '지수지듀', rankingdetails: '17inch 67m / 경력5+', rankingicon: '/path/to/jisujidu-icon.jpg', profilePage: '/user/jisujidu' },
  { ranking: 3, rankingname: '새운매우깡', rankingdetails: '27inch 87m / 경력2+', rankingicon: '/path/to/saeunmaeunggang-icon.jpg', profilePage: '/user/saeunmaeunggang' },
  { ranking: 4, rankingname: '깃신', rankingdetails: '8inch 3m / 경력6+', rankingicon: '/path/to/gitsin-icon.jpg', profilePage: '/user/gitsin' },
  { ranking: 5, rankingname: '지지베베', rankingdetails: '4inch 0m / 경력3+', rankingicon: '/path/to/jijibebe-icon.jpg', profilePage: '/user/jijibebe' }
];

// DOM 가져오기
const rankingContainer = document.getElementById('main-ranking-container');

// 랭킹 함수
function createRankingCard(data) {
  const card = document.createElement('div');
  card.classList.add('ranking-card');

  card.innerHTML = `
    <div class="ranking">${data.ranking}</div>
    <div class="info">
      <div class="name"><a href="${data.profilePage}" class="ranking-link">${data.rankingname}</a></div>
      <div class="details">${data.rankingdetails}</div>
    </div>
    <div class="icon"><img src="${data.rankingicon}" alt="${data.rankingname} icon" /></div>
  `;

  return card;
}

// 랭킹 데이터
function renderRanking() {
  rankingData.forEach(data => {
    const card = createRankingCard(data);
    rankingContainer.appendChild(card);
  });
}

// 초기 렌더링 실행
renderRanking();
