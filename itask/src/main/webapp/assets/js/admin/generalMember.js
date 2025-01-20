 // 전체 선택 체크박스
 function toggleSelectAll() {
    const selectAll = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(checkbox => checkbox.checked = selectAll.checked);
}

// 경고 버튼 클릭 이벤트
document.getElementById('warnButton').addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('.item-checkbox:checked');
    if (selectedItems.length === 0) {
        alert("경고를 줄 대상을 선택해주세요.");
        return;
    }
    selectedItems.forEach(item => {
        const userId = item.closest('.memColumn').querySelector('.user-id').innerText;
        const confirmWarn = confirm(`${userId} 아이디에 경고를 주시겠습니까?`);
        if (confirmWarn) {
            const reason = prompt("사유를 입력해주세요:");
            if (reason) {
                alert(`${userId} 아이디에 "${reason}" 사유로 경고를 주었습니다.`);
            } else {
                alert("경고 사유를 입력하지 않아 취소되었습니다.");
            }
        }
    });
});

// 삭제 버튼 클릭 이벤트
document.getElementById('deleteButton').addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('.item-checkbox:checked');
    if (selectedItems.length === 0) {
        alert("삭제할 대상을 선택해주세요.");
        return;
    }
    selectedItems.forEach(item => {
        const userId = item.closest('.memColumn').querySelector('.user-id').innerText;
        const confirmDelete = confirm(`${userId} 아이디를 삭제하시겠습니까?`);
        if (confirmDelete) {
            item.closest('.memColumn').remove();
            alert(`${userId} 아이디를 삭제했습니다.`);
        }
    });
});

// 전체 선택 이벤트 연결
document.getElementById('selectAll').addEventListener('change', toggleSelectAll);