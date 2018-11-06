package com.lss.hrmsys.api;

import com.lss.hrmsys.entity.model.Admin;
import com.lss.hrmsys.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private Audience audience;

    // 自动注入 adminService
    @Resource
    private AdminService adminService;

    /** 处理登录请求
     *
     * @param admin
     * @param request
     * @param session
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "text/html;charset=UTF-8")
    @ResponseBody
    public String login(Admin admin, HttpServletRequest request, HttpSession session) {
        Admin resultAdmin = adminService.login(admin);
        // 如果该登录的管理员用户名或密码错误返回错误信息
        if (resultAdmin == null) {
            request.setAttribute("admin", admin);
            request.setAttribute("errorMsg",
                    "Please check your username and password!");
            return "login failed";
        } else {
            // 登录成功， Session 保存该管理员的信息
            session.setAttribute("currentAdmin", resultAdmin);
            session.setAttribute("username", resultAdmin.getUsername());
            //return "login success";
            String jwtToken = JwtHelper.createJWT(resultAdmin.getUsername(),
                    resultAdmin.getId().toString(),
                    resultAdmin.getRole_name(),
                    audience.getClientId(),
                    audience.getName(),
                    audience.getExpiresSecond()*1000,
                    audience.getBase64Secret());

            return "bearer;" + jwtToken;
        }
    }

    /** 处理登录请求
     *
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    @ResponseBody
    public String getLogin(HttpServletResponse response) {
        try {
            response.sendError(HttpStatus.FORBIDDEN.value(), "LOGIN_ERROR");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**处理退出请求
     *
     * @param session
     * @return
     * @throws Exception
     */
    @RequestMapping("/logout")
    public String logout(HttpSession session) throws Exception {
        session.invalidate();
        return "redirect:/login.jsp";
    }
}
