package com.collections.collections;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.collections.collections.DevelopmentBucket;

@SpringBootApplication
public class CollectionsApplication {
	@Autowired
	private DevelopmentBucket developmentBucket;

	public static void main(String[] args) {
		SpringApplication.run(CollectionsApplication.class, args);
	}

	@PostConstruct
	public void runAfterStartup() {
		developmentBucket.runDevelopmentBucket();
	}
}
