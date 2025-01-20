<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 로그인페이지 -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>로그인</title>
<link rel="stylesheet" href="./../../assets/css/member/login.css">
<link rel="stylesheet" href="./../../assets/css/header.css">
<link rel="stylesheet" href="./../../assets/css/footer.css">
</head>
<body>
	<jsp:include page="../basic/header.jsp" />
	<main class="itAskBox">
		<a href="#"> <img src="./../../assets/img/logo.png" alt="ITASK 로고">
		</a>

		<!-- 로그인 폼 -->
		<form action="${pageContext.request.contextPath }/member/loginOk.me" name="keh-login-loginForm" class="keh-login-loginForm"
			method="post">
			<!-- 아이디입력칸 -->
			<input type="text" name="userId" class="keh-login-id"
				placeholder="ID">
			<!-- 비번입력칸 -->
			<div>
				<input type="password" name="userPw" class="keh-login-pw"
					placeholder="비밀번호"> <img
					src="./../../assets/img/hidden 4.png" alt="비밀번호 숨김" class="mark">
			</div>
			<!-- 로그인버튼 -->
			<button class="keh-login-loginBtn">로그인</button>
		</form>
		<p>
			<a href="${pageContext.request.contextPath }/html/member/pwfind.jsp" class="keh-login-pwBtn">비밀번호 찾기</a> <a
				href="${pageContext.request.contextPath }/html/member/join.jsp" class="keh-login-joinBtn">회원가입</a>
		</p>

	</main>
	<jsp:include page="../basic/footer.jsp" />
</body>
</html>
