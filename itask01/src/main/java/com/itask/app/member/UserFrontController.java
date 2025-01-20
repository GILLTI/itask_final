package com.example.app.member;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.example.app.Result;

/**
 * Servlet implementation class UserFrontController
 */
public class UserFrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
      
    public UserFrontController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}
	
	protected void doProcess(HttpServletRequest request, HttpServletResponse response)
	         throws ServletException, IOException {
	      System.out.println("user 서블릿 실행");
	      
	      
	      System.out.println(request.getContextPath());
	      System.out.println(request.getRequestURI());

	      String target = request.getRequestURI().substring(request.getContextPath().length());
	      System.out.println(target);
	      
	      Result result = null;

	      switch (target) {
	      case "/html/member/joinOk.me":
	         System.out.println("joinOk!!");
	         //sqlSession을 이용한다
	         result = new JoinOkController().execute(request, response);
	         System.out.println(result); //com.example.app.Result@9b75736
	         System.out.println(result.getPath() + "==========");
//	         response.sendRedirect(request.getContextPath());
	         break;
	      case "/member/loginOk.me":
	    	  System.out.println("loginOk!!");
	    	  result = new LoginOkController().execute(request, response);
	    	  break;
	      case "/member/pwResettingOk.me":
	    	  System.out.println("pwResetOK!!");
	    	  result = new pwResetOkController().execute(request, response);
	    	  break;
	      }
	      
	      if(result != null) {
	         if(result.isRedirect()) {
	            response.sendRedirect(result.getPath());
	         }else {
	            request.getRequestDispatcher(result.getPath()).forward(request, response);
	         }
	      }

	   }

}
