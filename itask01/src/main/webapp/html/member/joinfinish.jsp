<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>회원정보 입력</title>

<link rel="stylesheet" href="./../../assets/css/member/joinfinish.css">
<link rel="stylesheet" href="./../../assets/css/header.css">
<link rel="stylesheet" href="./../../assets/css/footer.css">

</head>



<body>
	<!-- 헤더 영역 -->
	<jsp:include page="../basic/header.jsp" />
	<!-- 공통 메인 영역 -->
	<main class="itAskBox">
		<!-- 이 영역 안에 자유롭게 작업하시면 됩니다 -->

		<a class="logo"> <img src="./../../assets/img/logo.png"
			alt="ITASK 로고">
		</a>
		<p>
			<%
				com.example.app.dto.UserDTO userInfo=(com.example.app.dto.UserDTO)session.getAttribute("userDTO");
          		String userNick = userInfo.getUserNick();
				out.println(userNick+"님");
			%>
		</p>
		<span>회원가입이 완료되었습니다</span><br> 
		<span>
			<%
          	String userId = userInfo.getUserId();
			out.println(userNick+"님의 회원 아이디 : "+userId);
			session.removeAttribute("userDTO");
			%>
		
		</span> <br>
		<br> <br>
		<!-- 로그인 버튼 -->
		<a href="./login.jsp" class="lsa-joinFinish-login">로그인</a>

	</main>
	<!-- 푸터 영역 -->
	<jsp:include page="../basic/footer.jsp" />
</body>

</html>

