package com.example.demo.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value= {"","/"})
public class HomeController {
	
	@GetMapping("home")
	public String requestMethodName() {
		System.out.println("home controller start");
		return "/home/home";
	}
	
	@GetMapping("homeInfo")
	public String requestHomeInfo() {
		System.out.println("home controller start");
		return "/common/homeInfo";
	}
	
	@GetMapping("homeInfo/hyun")
	public String hyunjunPage() {
		return "/common/hyunjun/hyun";
	}
	
}	
