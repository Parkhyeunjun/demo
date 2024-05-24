package com.example.demo.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value= {"","/"})
public class HomeController {
	
	@GetMapping("home")
	public String requestMethodName() {
		return "/home/home";
	}
	
	@PostMapping("home/logId")
	@ResponseBody
	public void logId(@RequestParam("strId") String id , @RequestParam("strPw") String pw ) {
		// service 단에서 처리해야 하지만 귀찮으므로 controller 에서 처리 
		try {
			System.out.println("================================ 아이디 ================================> \n"+ id);
			System.out.println("================================ 비밀번호 ================================> \n"+ pw);
		} catch (Exception e) {
			System.out.println("================================ 에러 발생 ================================> \n"+e);
		}
	}
	
	@GetMapping("homeInfo")
	public String requestHomeInfo() {
		return "/common/homeInfo";
	}
	
	@GetMapping("homeInfo/hyun")
	public String hyunjunPage() {
		return "/common/hyunjun/hyun";
	}
	
}	
