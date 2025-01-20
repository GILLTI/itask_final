package com.itask.app.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.itask.app.Execute;
import com.itask.app.Result;
import com.itask.app.dao.MypageDAO;
import com.itask.app.dto.UserDTO;

public class pwCheckOkController implements Execute{

	@Override
	public Result execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
//		UserDTO userDTO = new UserDTO();
		MypageDAO mypageDAO = new MypageDAO();
		Result result = new Result();
		
		HttpSession session = request.getSession();
		
		// 로그인한 유저는 session에 유저정보가 저장되는데 이렇게하면 가져올 수 있나요?
		UserDTO thisUser = (UserDTO)session.getAttribute("UserDTO");
		
		//사용자의 아이디와 form에서 입력한 비밀번호를 저장
		String userId = thisUser.getUserId();
		String userPw = request.getParameter("userPw");
		
		//회원정보가 있다면 -> infoEdit 페이지 출력
		if(mypageDAO.pwCheck(userId, userPw)) {
			result.setPath(request.getContextPath() + "/app/mypage/infoEdit/editInfo.jsp");
			result.setRedirect(true); // 리다이렉트가 맞는가?
		}else {
			//pw 인증 실패시 다시 그 페이지
			result.setPath(request.getContextPath() + "/app/mypage/infoEdit/pwCheck.jsp");
			result.setRedirect(true); 
		}
		
		return result;
	}
}
