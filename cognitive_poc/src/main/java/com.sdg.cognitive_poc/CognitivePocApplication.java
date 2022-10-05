package com.sdg.cognitive_poc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication(scanBasePackages={"com.sdg.cognitive_poc"})
public class CognitivePocApplication  extends SpringBootServletInitializer {

    public static void main(String[] args)  {

        SpringApplication.run(CognitivePocApplication.class, args);
    }

}
