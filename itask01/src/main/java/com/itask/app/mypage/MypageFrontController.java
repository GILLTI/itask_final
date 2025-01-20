package com.itask.app.mypage;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.itask.app.Result;

/**
 * Servlet implementation class UserFrontController
 */
//@WebServlet("/UserFrontController")
public class MypageFrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MypageFrontController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}
	
	protected void doProcess(HttpServletRequest request, HttpServletResponse response)
	         throws ServletException, IOException {
		System.out.println("mypage 서블릿 실행");
		
		//필요한 Path만 남기기
		String target = request.getRequestURI().substring(request.getContextPath().length());
		
		Result result = new Result();
		
		switch(target) {
			case "/mypage/pwCheck.my": // 내정보 수정하기 클릭 후 비밀번호 입력하고 클릭시
			System.out.println("pwCheck 실행!");
			
			result = new pwCheckOkController().execute(request, response); // 여기 구현해야함 처리할 컨트롤러생성 
			
			break;
			
			case "/mypage/editInfo.my": // 닉네임 변경하기 클릭시
			System.out.println("editInfo 실행!");
			
			result = new editInfoOkController().execute(request, response); // 여기 구현해야함 처리할 컨트롤러 생성
			
			break;
			
			case "/mypage/editPw.my":
			System.out.println("editPw 실행!"); // 비밀번호 변경하기 클릭시
			
			result = new editPwOKController().execute(request, response);
			
			break;
			
			case "/mypage/editPhoneNum.my":
			System.out.println("editPhoneNum 실행!"); // 핸드폰번호 변경하기 클릭시
			
			result = new editPhoneNumOKController().execute(request, response);
			
			break;
		}
	
	// 말단처리
	if(result != null) {
		if(result.isRedirect()) {
			response.sendRedirect(result.getPath());
			System.out.println(request.getAttribute("userId"));
		}else {
			request.getRequestDispatcher(result.getPath()).forward(request, response);
		}
	}
	
	
	
	}
	

}
