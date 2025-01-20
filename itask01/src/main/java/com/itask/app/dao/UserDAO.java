package com.example.app.member.dao;

import org.apache.ibatis.session.SqlSession;

import com.example.app.dto.UserDTO;
import com.mybatis.config.MyBatisConfig;

public class UserDAO {
   public SqlSession sqlSession;

   public UserDAO() {
      sqlSession = MyBatisConfig.getSqlSessionFactory().openSession(true);
   }
   
   // 회원가입
   public void join(UserDTO userDTO) {
      sqlSession.insert("user.join", userDTO);
   }
   
   // 로그인
   public UserDTO login(String userId, String userPw) {
	   UserDTO userDTO = new UserDTO();
	   userDTO.setUserId(userId);
	   userDTO.setUserPw(userPw);
	   return sqlSession.selectOne("user.login", userDTO);
   }
   
}
