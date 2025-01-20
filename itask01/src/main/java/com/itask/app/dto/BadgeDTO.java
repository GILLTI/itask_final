package com.itask.app.dto;

public class BadgeDTO {
//	CREATE TABLE TBL_BADGE (
//			BADGE_NUM NUMBER,
//			BADGE_NAME VARCHAR2(100) NOT NULL,
//		CONSTRAINT TBL_BADGE_PK PRIMARY KEY (BADGE_NUM)
//		);
	
	private int badgeNum;
	private String badgeName;
	
	
	public int getBadgeNum() {
		return badgeNum;
	}
	public void setBadgeNum(int badgeNum) {
		this.badgeNum = badgeNum;
	}
	public String getBadgeName() {
		return badgeName;
	}
	public void setBadgeName(String badgeName) {
		this.badgeName = badgeName;
	}
	
	
	@Override
	public String toString() {
		return "BadgeDTO [badgeNum=" + badgeNum + ", badgeName=" + badgeName + ", getBadgeNum()=" + getBadgeNum()
				+ ", getBadgeName()=" + getBadgeName() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
	
}

