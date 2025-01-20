package com.itask.app.dao;

import org.apache.ibatis.session.SqlSession;

import com.itask.app.dto.UserDTO;
import com.mybatis.config.MyBatisConfig;

public class MypageDAO {
	public SqlSession sqlSession;
	
	// 선언한 참조변수에 DB에 접근할 수 있는 Session을 만든다.
	public MypageDAO() {
		sqlSession = MyBatisConfig.getSqlSessionFactory().openSession(true);
	}

	// 마이페이지 진입시 비밀번호 확인
	// 1이면 존재한다는 것임
	public boolean pwCheck(String userId, String inputPw) {
		UserDTO userDTO = new UserDTO();
		
		userDTO.setUserId(userId);
		userDTO.setUserPw(inputPw);
		
		return (Integer)sqlSession.selectOne("mypage.pwCheck", userDTO) == 1;
	}
	
	// 닉네임 수정시 중복 확인
	// return 결과가 0이면 중복 없는 것 => true
	public boolean nickCheck(String nickName) {
		return (Integer)sqlSession.selectOne("member.nickCheck", nickName) == 0; 
	}

	// 닉네임 수정 버튼 클릭시 해당 회원 업데이트
	public boolean nickUpdate(String nickName) {
		return (Integer)sqlSession.update("member.nickUpdate", nickName) == 0;
	}
	
	// 비밀번호 수정하기에서 비밀번호 클릭시
	public boolean pwUpdate(String password) {
		return (Integer)sqlSession.update("member.pwUpdate", password) == 0;
	}
	
	// 핸드폰번호 수정하기에서 변경된 정보 저장하기 클릭시
	public int phoneUpdate(String phoneNumber) {
		return sqlSession.update("member.phoneUpdate", phoneNumber);
	}

	// 회원탈퇴하기 버튼 클릭시
	public int delete(UserDTO userDTO) {
		return sqlSession.delete("member.delete", userDTO);
	}
	
//	// 마이페이지 메인 해야함
//	public 리턴타입 method7() {
//		
//	}
	
	
}

