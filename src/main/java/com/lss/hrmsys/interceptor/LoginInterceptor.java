package com.lss.hrmsys.interceptor;

import javax.security.auth.login.LoginException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.lss.hrmsys.api.Audience;
import com.lss.hrmsys.api.JwtHelper;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Autowired
    private Audience audience;

    // 不拦截 "/login" 请求
    private static final String[] IGNORE_URI = { "/login" };

    @Override
    public void afterCompletion(HttpServletRequest arg0,
                                HttpServletResponse arg1, Object arg2, Exception arg3)
            throws Exception {

    }

    @Override
    public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
                           Object arg2, ModelAndView arg3) throws Exception {

    }

    // 该方法将在 Controller 处理前进行调用
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
        //等到请求头信息authorization信息
        final String authHeader = request.getHeader("authorization");

        // flag 表示是否登录
        boolean flag = false;
        // 获取请求的 URL
        String url = request.getServletPath();
        for (String s : IGNORE_URI) {
            if (url.contains(s)) {
                flag = true;
                break;
            }
        }
        if(request.getMethod().equals("GET") && url.contains("/api/empl")){
            flag = true;
        }
        if (!flag) {
            //对非restful应用
            if(!url.contains("/api/"))
            {
                // 获取 Session 并判断是否登录
                String username = (String) request.getSession().getAttribute("username");
                if (username == null) {

                        request.setAttribute("message", "Please log in first!");
                        // 如果未登录，进行拦截，跳转到登录页面
                        request.getRequestDispatcher("/login.jsp")
                                .forward(request, response);

                } else {
                    flag = true;
                }
            }
            else{
                if (authHeader == null || !authHeader.startsWith("bearer;")) {
                    //throw new LoginException("no valid token found");
                    response.sendError(HttpStatus.FORBIDDEN.value(), "no valid token found");
                    return false;
                }

                final String token = authHeader.substring(7);

                try {
                    if(audience == null){
                        BeanFactory factory = WebApplicationContextUtils.getRequiredWebApplicationContext(request.getServletContext());
                        audience = (Audience) factory.getBean("audience");
                    }
                    final Claims claims = JwtHelper.parseJWT(token,audience.getBase64Secret());
                    if(claims == null){
                        //throw new LoginException(ResultEnum.LOGIN_ERROR);
                        response.sendError(HttpStatus.FORBIDDEN.value(), "LOGIN_ERROR");
                        return false;
                    }
                    //request.setAttribute(Constants.CLAIMS, claims);
                    flag = true;
                } catch (final Exception e) {
                    //throw new LoginException(ResultEnum.LOGIN_ERROR);
                    response.sendError(HttpStatus.FORBIDDEN.value(), "LOGIN_ERROR");
                    return false;
                }
            }
        }
        return flag;
    }

}