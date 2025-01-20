package com.example.app.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.app.Execute;
import com.example.app.Result;
import com.example.app.dto.UserDTO;
import com.example.app.member.dao.UserDAO;

public class JoinOkController implements Execute{

	@Override
	public Result execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		UserDAO userDAO = new UserDAO();
		UserDTO userDTO = new UserDTO();
		Result result = new Result();
		
		System.out.println(userDTO);
//		userMoniter
		userDTO.setUserMoniter("0");
		
		userDTO.setUserId(request.getParameter("userId"));
		userDTO.setUserPw(request.getParameter("userPw"));
		userDTO.setUserName(request.getParameter("userName"));
		userDTO.setUserNick(request.getParameter("userNick"));
		userDTO.setUserPhone(request.getParameter("userPhone"));
		userDTO.setUserMail(request.getParameter("userMail"));
		
		
		userDAO.join(userDTO);
		
		HttpSession session = request.getSession();
		session.setAttribute("userDTO", userDTO);
		
		result.setRedirect(true);
		result.setPath(request.getContextPath()+"/html/member/joinfinish.jsp");
		
		return result;
	}
	
}
