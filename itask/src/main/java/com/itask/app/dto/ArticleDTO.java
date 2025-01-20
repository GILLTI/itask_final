package com.itask.app.dto;

public class ArticleDTO {
//	CREATE TABLE TBL_ARTICLE (
//		    ARTICLE_NUM NUMBER NOT NULL,
//		    USER_NUM NUMBER NOT NULL,
//		    ARTICLE_TOPCATE VARCHAR2(100) CHECK (UPPER(ARTICLE_TOPCATE) IN ('개발', '보안', '자격증')),
//		    ARTICLE_BOTCATE VARCHAR2(100) CHECK (UPPER(ARTICLE_BOTCATE) IN ('질문', '꿀팁')),
//		    ARTICLE_TAGNAME VARCHAR2(100) CHECK (UPPER(ARTICLE_TAGNAME) IN ('JAVA', 'HTML', 'CSS', 'JAVASCRIPT', 'ORACLE', 
//		        'NETWORK', 'WEB', 'MOBILE', '포렌식', '악성코드', 
//		        '정보보안', '정보처리', '네트워크관리사', '리눅스마스터', 'SQLD')),
//		    ARTICLE_TITLE VARCHAR2(100) NOT NULL,
//		    ARTICLE_TEXT VARCHAR2(3000) NOT NULL,
//		    ARTICLE_DATE DATE NOT NULL,
//		    ARTICLE_MODIFY_DATE DATE NULL,
//		    ARTICLE_VIEW NUMBER DEFAULT 0 NOT NULL,
//		    ARTICLE_MONITER_NUM NUMBER DEFAULT 0 NOT NULL,
//		    CONSTRAINT TBL_ARTICLE_PK PRIMARY KEY (ARTICLE_NUM),
//		    CONSTRAINT TBL_USER_FK FOREIGN KEY (USER_NUM) REFERENCES TBL_USER (USER_NUM) ON DELETE CASCADE
//		);
	
	private int userNum;
	private int articleNum;
	private String articleTopcate;
	private String articleBotcate;
	private String articleTagname;
	private String articleTitle;
	private String articleText;
	private String articledate;
	private String articleModifyDate;
	private int articleView;
	private int articleMoniter;
	
	
	public int getUserNum() {
		return userNum;
	}
	public void setUserNum(int userNum) {
		this.userNum = userNum;
	}
	public int getArticleNum() {
		return articleNum;
	}
	public void setArticleNum(int articleNum) {
		this.articleNum = articleNum;
	}
	public String getArticleTopcate() {
		return articleTopcate;
	}
	public void setArticleTopcate(String articleTopcate) {
		this.articleTopcate = articleTopcate;
	}
	public String getArticleBotcate() {
		return articleBotcate;
	}
	public void setArticleBotcate(String articleBotcate) {
		this.articleBotcate = articleBotcate;
	}
	public String getArticleTagname() {
		return articleTagname;
	}
	public void setArticleTagname(String articleTagname) {
		this.articleTagname = articleTagname;
	}
	public String getArticleTitle() {
		return articleTitle;
	}
	public void setArticleTitle(String articleTitle) {
		this.articleTitle = articleTitle;
	}
	public String getArticleText() {
		return articleText;
	}
	public void setArticleText(String articleText) {
		this.articleText = articleText;
	}
	public String getArticledate() {
		return articledate;
	}
	public void setArticledate(String articledate) {
		this.articledate = articledate;
	}
	public String getArticleModifyDate() {
		return articleModifyDate;
	}
	public void setArticleModifyDate(String articleModifyDate) {
		this.articleModifyDate = articleModifyDate;
	}
	public int getArticleView() {
		return articleView;
	}
	public void setArticleView(int articleView) {
		this.articleView = articleView;
	}
	public int getArticleMoniter() {
		return articleMoniter;
	}
	public void setArticleMoniter(int articleMoniter) {
		this.articleMoniter = articleMoniter;
	}
	
	
	@Override
	public String toString() {
		return "ArticleDTO [userNum=" + userNum + ", articleNum=" + articleNum + ", articleTopcate="
				+ articleTopcate + ", articleBotcate=" + articleBotcate + ", articleTagname=" + articleTagname
				+ ", articleTitle=" + articleTitle + ", articleText=" + articleText + ", articledate=" + articledate
				+ ", articleModifyDate=" + articleModifyDate + ", articleView=" + articleView + ", articleMoniter="
				+ articleMoniter + "]";
	}

}
