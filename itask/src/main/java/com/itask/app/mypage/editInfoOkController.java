package com.itask.app.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itask.app.Execute;
import com.itask.app.Result;
import com.itask.app.dao.MypageDAO;
import com.itask.app.dto.UserDTO;

public class editInfoOkController implements Execute{

	@Override
	public Result execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		Result result = new Result();
		MypageDAO mypageDAO = new MypageDAO();
		UserDTO userDTO = new UserDTO();
		
		//사용자가 입력한 닉네임 저장
		String nickName = request.getParameter("userNick");
 
		// d쿼리문 실행
		mypageDAO.nickCheck("nickName");
		
		
		
		
		
		
		return result;
	}

	
	
	
	
}
