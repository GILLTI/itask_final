const buttons = document.querySelectorAll(".write-button");
const fileUploadInput = document.getElementById("file-upload");
const uploadButton = document.querySelector(".upload-button");
const uploadBoxLabel = document.querySelector(".upload-box label");

// 버튼 클릭 시 스타일 변경
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.style.color = "#d96073";
            btn.style.backgroundColor = "#ffffff";
        });

        // 클릭한 버튼 스타일 변경
        button.style.color = "#ffffff";
        button.style.backgroundColor = "#d96073";
    });
});

// 파일 업로드
uploadButton.addEventListener("click", () => {
    fileUploadInput.click();
});

fileUploadInput.addEventListener("change", () => {
    if (fileUploadInput.files.length > 0) {
        uploadBoxLabel.textContent = fileUploadInput.files[0].name; // 선택된 파일명 표시
    } else {
        uploadBoxLabel.textContent = "첨부파일 선택"; // 파일 없을 경우 기본 텍스트 표시
    }
});
