const id = "admin";
const pw = "1234";
let inputid = document.querySelector('.id');
let inputpw = document.querySelector('.pw');
document.querySelector('.login-button').addEventListener('click', function (event) {
    event.preventDefault();
    if (id === inputid.value && pw === inputpw.value) {
        location.href = "/workspace/webapp/html/admin/basic/totalMember.html";
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다");
    }
});