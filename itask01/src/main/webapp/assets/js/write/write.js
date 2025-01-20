document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".write-button");
  const subcategoryContainer = document.querySelector(".write-subcategory");
  const subsubcategoryContainer = document.querySelector(".write-subsubcategory");

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

  // 카테고리 버튼 클릭 시
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      displaySubcategories(category);
    });
  });

  // 하위 카테고리 버튼 표시
  function displaySubcategories(category) {
    subcategoryContainer.innerHTML = ""; // 기존 하위 버튼 제거
    subsubcategoryContainer.innerHTML = ""; // 기존 하위 버튼 제거

    const subcategoryList = subcategories[category] || [];
    subcategoryList.forEach((subcategory) => {
      const subcategoryButton = document.createElement("div");
      subcategoryButton.classList.add("subcategory-button");
      subcategoryButton.textContent = subcategory;
      subcategoryButton.addEventListener("click", () => {
        displaySubsubcategories(subcategory);
      });
      subcategoryContainer.appendChild(subcategoryButton);
    });
  }

  // 하위 카테고리의 세부 항목 버튼 표시
  function displaySubsubcategories(subcategory) {
    subsubcategoryContainer.innerHTML = ""; // 기존 하위 버튼 제거

    const subsubcategoryList = subsubcategories[subcategory] || [];
    subsubcategoryList.forEach((subsubcategory) => {
      const subsubcategoryButton = document.createElement("div");
      subsubcategoryButton.classList.add("subsubcategory-button");
      subsubcategoryButton.textContent = subsubcategory;
      subsubcategoryButton.addEventListener("click", () => {
        alert(`"${subcategory} > ${subsubcategory}" 글쓰기 페이지로 이동합니다.`);
        // 페이지 이동 (수정 필요)
        // window.location.href = `/write?subcategory=${subcategory}&subsubcategory=${subsubcategory}`;
      });
      subsubcategoryContainer.appendChild(subsubcategoryButton);
    });
  }
});