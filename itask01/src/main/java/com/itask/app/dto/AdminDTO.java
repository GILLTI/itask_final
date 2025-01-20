package com.itask.app.dto;

public class AdminDTO {
//	CREATE TABLE TBL_ADMIN(
//		    ADMIN_NUM NUMBER,
//		    ADMIN_NICK VARCHAR2(100) NOT NULL,
//		    ADMIN_ID VARCHAR2(100) NOT NULL,
//		    ADMIN_PW VARCHAR2(100) NOT NULL,
//		    CONSTRAINT PK_ADMIN PRIMARY KEY(ADMIN_NUM)
//		);
	
	private int adminNum;
	private String adminNick;
	private String adminId;
	private String adminPw;
	
	
	public int getAdminNum() {
		return adminNum;
	}
	public void setAdminNum(int adminNum) {
		this.adminNum = adminNum;
	}
	public String getAdminNick() {
		return adminNick;
	}
	public void setAdminNick(String adminNick) {
		this.adminNick = adminNick;
	}
	public String getAdminId() {
		return adminId;
	}
	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}
	public String getAdminPw() {
		return adminPw;
	}
	public void setAdminPw(String adminPw) {
		this.adminPw = adminPw;
	}
	
	
	@Override
	public String toString() {
		return "AdminDTO [adminNum=" + adminNum + ", adminNick=" + adminNick + ", adminId=" + adminId + ", adminPw="
				+ adminPw + "]";
	}
	
	
	
}

