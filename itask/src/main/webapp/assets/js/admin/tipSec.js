// 텍스트 토글 함수
function toggleText(titleElement) {
    var tipsecList = titleElement.closest('.tipsecList');
    var textElement = tipsecList.querySelector('.tipsec-text');
    if (textElement) {
        if (textElement.style.display === "none" || textElement.style.display === "") {
            textElement.style.display = "block";
        } else {
            textElement.style.display = "none";
        }
    }
}

// 체크된 항목들 반환
function getSelectedItems() {
    var checkboxes = document.querySelectorAll('.item-checkbox:checked');
    var selectedItems = [];
    checkboxes.forEach(function (checkbox) {
        var tipsecList = checkbox.closest('.tipsecList');
        selectedItems.push(tipsecList);
    });
    return selectedItems;
}

// 전체 선택 체크박스 토글
function toggleSelectAll() {
    var selectAllCheckbox = document.getElementById('selectAll');
    var checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

// 수정 버튼 클릭 시
document.getElementById('editButton').addEventListener('click', function () {
    var selectedItems = getSelectedItems();
    if (selectedItems.length === 1) {
        var confirmEdit = confirm("해당 목록을 수정하시겠습니까?");
        if (confirmEdit) {
            var noticeId = selectedItems[0].getAttribute('data-id'); // data-id 추출
            location.href = '/workspace/webapp/html/admin/noticeDetail.html?id=' + noticeId; // 수정 페이지로 이동
        }
    } else {
        alert("수정할 항목을 하나만 선택해주세요.");
    }
});

// 삭제 버튼 클릭 시
document.getElementById('deleteButton').addEventListener('click', function () {
    var selectedItems = getSelectedItems();
    if (selectedItems.length > 0) {
        var confirmDelete = confirm("선택한 목록을 삭제하시겠습니까?");
        if (confirmDelete) {
            selectedItems.forEach(function (item) {
                item.remove(); // 선택된 항목 삭제
            });
        }
    } else {
        alert("삭제할 항목을 선택해주세요.");
    }
});
