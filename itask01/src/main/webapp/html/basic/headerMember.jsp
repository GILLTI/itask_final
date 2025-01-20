<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!-- 로그인 성공 시 헤더 -->
<!-- 헤더 -->
  <header class="header-box">
    <div class="header-container">
      <!-- 로고 -->
      <a href="${pageContext.request.contextPath}/usermain.jsp" class="header-brand">
        <img src="${pageContext.request.contextPath}/assets/img/logo/logo_b.png" alt="iTask Logo" class="header-logo">
      </a>
      <!-- 검색 -->
      <div class="search-box">
        <div class="search-input-container">
          <input type="text" class="search-input" placeholder="검색어를 입력하세요">
          <button class="search-logo">
            <img src="${pageContext.request.contextPath}/assets/img/readingGlass.png" alt="search-icon">
          </button>
        </div>
        <!-- 검색상자 -->
        <a href="#" class="write-box">
          <img src="${pageContext.request.contextPath}/assets/img/File Plus 02.png" alt="fileplus2" class="icon"> 글쓰기
        </a>
      </div>
      <!-- 헤더 네비바 -->
      <nav class="header-nav">
        <ul class="head-container">
          <li class="head-item">
            <!-- 내정보 모니터 -->
            <a href="#" class="head-link">
              <span id="user-name">
              <%
				com.example.app.dto.UserDTO userInfo=(com.example.app.dto.UserDTO)session.getAttribute("userDTO");
              	String userNick = userInfo.getUserNick();
				out.println(userNick+"님");
			%>
              </span>
              <div class="monitor-box">
                <div class="monitor-level" id="monitor-levelup">
                	<%
                		int userInch = Integer.parseInt(userInfo.getUserMoniter())/100;
                		out.println(userInch+" inch");
                	%>
                </div>
                <img src="${pageContext.request.contextPath}/assets/img/monitor.png" alt="monitor" class="monitor-icon">
                <span id="monitor-level">
                	<%
                		String userMonitor = userInfo.getUserMoniter();
                		out.println(userMonitor);
                	%>
                </span>
              </div>
            </a>
          </li>
          <li class="head-item">
            <!-- 유저 아이콘 -->
            <a href="#" class="head-link">
              <div class="user-png">
                <img src="${pageContext.request.contextPath}/assets/img/user.png" alt="user" class="user-icon">
              </div>
            </a>
          </li>
          <li class="head-item">
            <!-- 로그아웃 -->
            <a href="${pageContext.request.contextPath}" class="head-link logout-box">
            	<%
            	session.removeAttribute("userDTO");
            	// 우열님이 추가하라고 주신 코드 
	            response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); 
	            response.setHeader("Pragma", "no-cache"); 
	            response.setHeader("Expires", "0");
           	 	%>
              <img src="${pageContext.request.contextPath}/assets/img/Logout.png" alt="logout" class="logout-top">
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- 네비게이션 바 -->
  <nav class="navbar-box">
    <div class="navbar-container">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a href="#" class="nav-link">ITASK란?</a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-link">소개글</a></li>
            <li><a href="#" class="dropdown-link">명예의 전당</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">공지사항</a></li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link">개발</a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-link">질문</a></li>
            <li><a href="#" class="dropdown-link">꿀팁</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="${pageContext.request.contextPath}/html/article/qual/guide/infoPro.jsp" class="nav-link">자격증</a>
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-link">시험안내</a></li>
            <li><a href="#" class="dropdown-link">질문</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>