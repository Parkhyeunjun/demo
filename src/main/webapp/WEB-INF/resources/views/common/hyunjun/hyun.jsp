<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    
<!-- js 파일 연결시 필요함 -->
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	<!-- js 파일에서 jquery 쓰려면 jsp 에 선언 -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>    


<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
박현준 페이지
<input type="button" id="btn_test" value="눌러보세요1"/>
<input type="button" class="btn_test" value="눌러보세요2"/>
</body>
</html>


<!-- js 파일 연결 -->
<script src="<c:url value="/resources/home/js/hyun.js" />"></script>