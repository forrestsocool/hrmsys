package com.lss.hrmsys;

import com.lss.hrmsys.config.PictureUploadProperties;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

@SpringBootApplication
@MapperScan("com.lss.hrmsys.entity.dao")
@EnableConfigurationProperties({PictureUploadProperties.class})
public class hrmsysApplication {

    public static void main(String[] args) {
        SpringApplication.run(hrmsysApplication.class, args);
    }
}
