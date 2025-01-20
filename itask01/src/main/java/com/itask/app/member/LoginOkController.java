package com.example.app.member;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.app.Execute;
import com.example.app.Result;
import com.example.app.dto.UserDTO;
import com.example.app.member.dao.UserDAO;

public class LoginOkController implements Execute{

	@Override
	public Result execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		UserDAO userDAO = new UserDAO();
		UserDTO userDTO = new UserDTO();
		Result result = new Result();
		
		String userId = request.getParameter("userId");
		String userPw = request.getParameter("userPw");
		userDTO = userDAO.login(userId, userPw);
		
		
		//로그인 성공 시 
		if(userDTO != null) {
			System.out.println(userDTO);
			//세션에 해당 사용자 정보를 저장
			HttpSession session = request.getSession();
			session.setAttribute("userDTO", userDTO);
			
			// 회원 메인 페이지로 이동 (회원 메인페이지로 연결해줘야됨 수정필요)
			result.setPath(request.getContextPath()+"/usermain.jsp");
			result.setRedirect(true);
		}else {
			//로그인 실패시 로그인 페이지로 이동
			result.setPath(request.getContextPath()+"/html/member/login.jsp");
			result.setRedirect(true);
		}
		
		return result;
	}
	
}
