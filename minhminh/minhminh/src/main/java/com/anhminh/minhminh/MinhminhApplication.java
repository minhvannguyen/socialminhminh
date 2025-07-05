package com.anhminh.minhminh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan(basePackages = "com.anhminh.minhminh")
@EnableScheduling
public class MinhminhApplication {

	public static void main(String[] args) {
		SpringApplication.run(MinhminhApplication.class, args);
	}

}
