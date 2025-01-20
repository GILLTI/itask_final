package com.itask.app.dto;

public class OwnDTO {
//	CREATE TABLE TBL_OWN (
//			OWN_BADGE_NUM NUMBER,
//			BADGE_NUM NUMBER,
//			USER_NUM NUMBER,
//		CONSTRAINT OWN_BADGE_NUM_PK PRIMARY KEY (OWN_BADGE_NUM),
//		CONSTRAINT TBL_BADGE_FK FOREIGN KEY (BADGE_NUM) REFERENCES TBL_BADGE (BADGE_NUM) ON DELETE CASCADE,
//		CONSTRAINT TBL_USER_FK2 FOREIGN KEY (USER_NUM) REFERENCES TBL_USER (USER_NUM) ON DELETE CASCADE
//		);
	
	private int ownBadgeNum;
	private int badgeNum;
	private int userNum;
	
	public int getOwnBadgeNum() {
		return ownBadgeNum;
	}
	public void setOwnBadgeNum(int ownBadgeNum) {
		this.ownBadgeNum = ownBadgeNum;
	}
	public int getBadgeNum() {
		return badgeNum;
	}
	public void setBadgeNum(int badgeNum) {
		this.badgeNum = badgeNum;
	}
	public int getUserNum() {
		return userNum;
	}
	public void setUserNum(int userNum) {
		this.userNum = userNum;
	}
	
	
	@Override
	public String toString() {
		return "OwnDTO [ownBadgeNum=" + ownBadgeNum + ", badgeNum=" + badgeNum + ", userNum=" + userNum + "]";
	}
	
	
	
}
