package com.example.app.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.app.Execute;
import com.example.app.Result;
import com.example.app.dto.UserDTO;
import com.example.app.member.dao.UserDAO;

public class pwResetOkController implements Execute{

	@Override
	public Result execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		UserDAO userDAO = new UserDAO();
		UserDTO userDTO = new UserDTO();
		Result result = new Result();
		
		
		
		return null;
	}
	
}
