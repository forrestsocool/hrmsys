package com.lss.hrmsys.interceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfiguration implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 注册拦截器
        //InterceptorRegistration ir = registry.addInterceptor(new LoginInterceptor());
        // 配置拦截的路径
        //ir.addPathPatterns("/*");
        // 配置不拦截的路径
        //ir.excludePathPatterns("/**.html");

        // 还可以在这里注册其它的拦截器
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/avatar/**.jpg")
                .excludePathPatterns("/api/avatar/**.png");

//        registry.addInterceptor(authenticationInterceptor())
//                .addPathPatterns("/**");    // 拦截所有请求，通过判断是否有 @LoginRequired 注解 决定是否需要登录
//        super.addInterceptors(registry);
    }
}