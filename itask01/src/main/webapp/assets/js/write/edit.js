/*
const categoryButtons = document.querySelectorAll(".write-button");
const subcategoryContainer = document.querySelector(".write-subcategory");
const subsubcategoryContainer = document.querySelector(".write-subsubcategory");
categoryButtons: HTML의 .write-button 클래스를 가진 카테고리 버튼들을 가져옵니다.
subcategoryContainer: 하위 카테고리를 표시할 컨테이너입니다.
subsubcategoryContainer: 세부 항목을 표시할 컨테이너입니다.

const subcategories = {
    개발: ["개발질문", "개발꿀팁"],
    보안: ["보안질문", "보안꿀팁"],
    자격증: ["자격증질문", "자격증꿀팁"],
};

const subsubcategories = {
    개발질문: ["Java", "CSS", "HTML"],
    개발꿀팁: ["기사", "기능사"],
    보안질문: ["JavaScript", "CSS", "HTML"],
    보안꿀팁: ["산업기사", "기사"],
    자격증질문: ["Java", "CSS", "jsp"],
    자격증꿀팁: ["시험", "공지사항"],
};
subcategories: 상위 카테고리(예: "개발")와 연결된 하위 카테고리의 리스트.
subsubcategories: 하위 카테고리(예: "개발질문")와 연결된 세부 항목의 리스트.
카테고리 버튼 클릭 이벤트

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        displaySubcategories(category);
    });
});
각 .write-button(카테고리 버튼)에 대해 click 이벤트 리스너를 추가.
버튼 클릭 시 해당 버튼의 data-category 속성을 가져와서, displaySubcategories() 함수에 전달.
하위 카테고리 표시 함수

function displaySubcategories(category) {
    subcategoryContainer.innerHTML = ""; // 기존 하위 버튼 제거
    subsubcategoryContainer.innerHTML = ""; // 기존 세부 항목 제거

    const subcategoryList = subcategories[category] || [];
    subcategoryList.forEach((subcategory) => {
        const subcategoryButton = document.createElement("div");
        subcategoryButton.classList.add("subcategory-button");
        subcategoryButton.textContent = subcategory;
        subcategoryButton.addEventListener("click", () => {
            displaySubsubcategories(subcategory);
        });
        subcategoryContainer.appendChild(subcategoryButton);
    });3
}
기존의 하위 카테고리 및 세부 항목 버튼들을 초기화.
선택된 상위 카테고리(category)에 해당하는 하위 카테고리 리스트(subcategoryList)를 가져옵니다.
각 하위 카테고리에 대해 버튼을 생성하고, 클릭 시 displaySubsubcategories()를 호출하도록 이벤트 리스너를 추가합니다.
세부 항목 표시 함수

function displaySubsubcategories(subcategory) {
    subsubcategoryContainer.innerHTML = ""; // 기존 세부 항목 제거

    const subsubcategoryList = subsubcategories[subcategory] || [];
    subsubcategoryList.forEach((subsubcategory) => {
        const subsubcategoryButton = document.createElement("div");
        subsubcategoryButton.classList.add("subsubcategory-button");
        subsubcategoryButton.textContent = subsubcategory;
        subsubcategoryButton.addEventListener("click", () => {
            alert(`"${subcategory} > ${subsubcategory}" 글쓰기 페이지로 이동합니다.`);
            // 페이지 이동
            // window.location.href = `/write?subcategory=${subcategory}&subsubcategory=${subsubcategory}`;
        });
        subsubcategoryContainer.appendChild(subsubcategoryButton);
    });
}
기존의 세부 항목 버튼들을 초기화.
선택된 하위 카테고리(subcategory)에 해당하는 세부 항목 리스트(subsubcategoryList)를 가져옵니다.
각 세부 항목에 대해 버튼을 생성하고, 클릭 시 경고창을 띄운 뒤 페이지 이동을 수행합니다.
페이지 이동 로직: window.location.href를 사용하여 해당 세부 항목에 맞는 URL로 이동합니다.
동작 흐름
카테고리 클릭:
예: "개발" 버튼 클릭 → 하위 카테고리 "개발질문", "개발꿀팁" 버튼 생성.
하위 카테고리 클릭:
예: "개발질문" 클릭 → 세부 항목 "Java", "CSS", "HTML" 버튼 생성.
세부 항목 클릭:
예: "Java" 클릭 → 경고창 출력 및 글쓰기 페이지로 이동.
주의점
데이터 유효성 검증:
subcategories[category]와 subsubcategories[subcategory]에서 값이 없는 경우 빈 배열을 반환하도록 설계.
페이지 이동:
window.location.href를 적절히 수정하여 실제 동작할 URL을 설정해야 함.
이 코드는 동적으로 버튼을 생성하며, 다단계 선택 로직에 적합한 구조로 설계되었습니다.
*/