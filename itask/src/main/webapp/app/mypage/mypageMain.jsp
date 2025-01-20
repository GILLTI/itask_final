<!-- 마이페이지-일반회원 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/assets/css/mypage/mypageMain.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath }/assets/css/basic/header.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath }/assets/css/basic/footer.css">
  </head>
  <body>
    <main class="itAskBox">
      <!-- 마이페이지 페이지 제목 -->
      <h3>마이페이지</h3>
      <!-- 좌측 프로필사진 -->
      <section class="keh-mypageMain-profile-left">
        <!-- 프로필사진 - 내 정보 -->
        <ul>
          <li class="keh-mypageMain-pic">
            <div></div>
          </li>
          <!-- *************여기 데이터 베이스에서 가져와야함*********** -->
          <li class="keh-mypageMain-memType">일반회원<span><img src="" alt="ë©í ë±ì§"></span></li>
          <li class="keh-mypageMain-memNickName">보부상님</li>
          <li class="keh-mypageMain-myMonitor">
            <img src="${pageContext.request.contextPath }/assets/img/Monitor.png" alt="">
            <b>0</b>inch <b>0</b>m
          </li>
        </ul>
        
        <hr> <!-- 선 -->

        <!-- 프로필사진 - 수정/인증/전체글/댓글 메뉴 -->
        <ul class="keh-mypageMain-myMenu">
          <li><a href="${pageContext.request.contextPath }/app/mypage/infoEdit/pwCheck.jsp">내 정보 수정하기</a></li>
          <li><a href="${pageContext.request.contextPath }/app/mypage/mentoCheck.jsp">자격/멘토 뱃지 추가하기</a></li>
        </ul>
      </section>

      <!-- 우측 내 활동 -->
      
      <section class="keh-mypageMain-profile-right">
        <!-- 1. 내가 쓴 게시글 / 내가 쓴 답변 -->
        <!-- *************여기 데이터 베이스에서 가져와야함*********** -->
        <div class="keh-mypageMain-article">
          <ul>
            <li>
              내가 쓴 게시글
              <p>8개</p>
            </li>
            <li>
              내가 쓴 답변
              <p>132개</p>
            </li>
          </ul>
        </div>
        <!-- 2. 뱃지 -->
        <div class="keh-mypageMain-badge">
          <ul>
            <li>내가 획득한 뱃지<p>0개</p></li>
            <li>
              <!-- 뱃지 아이콘 목록 8개 -->
              <ul class="keh-mypageMain-badgeList">
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- 3. 경력 -->
        <div class="keh-mypageMain-career">
          <ul>
            <li>나의 경력</li>
            <li>현재 등록된 경력사항이 없습니다</li>
          </ul>
        </div>
      </section>
    </main>
  </body>
</html>
