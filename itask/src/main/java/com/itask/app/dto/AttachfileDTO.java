package com.itask.app.dto;

public class AttachfileDTO {
//	CREATE TABLE TBL_ATTACHFILE(
//			ATTACHFILE_NUM NUMBER PRIMARY KEY,
//			ARTICLE_NUM NUMBER NOT NULL,
//			ATTACHFILE_NAME VARCHAR2(1000) NOT NULL,
//			CONSTRAINT FK_ARTICLE FOREIGN KEY (ARTICLE_NUM) REFERENCES TBL_ARTICLE(ARTICLE_NUM) ON DELETE CASCADE
//		);
	private int attachfileNum;
	private int articleNum;
	private String attatchfileName;
	
	public int getAttachfileNum() {
		return attachfileNum;
	}
	public void setAttachfileNum(int attachfileNum) {
		this.attachfileNum = attachfileNum;
	}
	public int getArticleNum() {
		return articleNum;
	}
	public void setArticleNum(int articleNum) {
		this.articleNum = articleNum;
	}
	public String getAttactchfileName() {
		return attatchfileName;
	}
	public void setAttactchfileName(String attatchfileName) {
		this.attatchfileName = attatchfileName;
	}
	
	
	@Override
	public String toString() {
		return "AttachfileDTO [attachfileNum=" + attachfileNum + ", articleNum=" + articleNum + ", attatchfileName="
				+ attatchfileName + "]";
	}
	
	
	
}
