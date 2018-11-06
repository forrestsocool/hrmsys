package com.lss.hrmsys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import com.lss.hrmsys.entity.dao.EmployeeDao;
import com.lss.hrmsys.entity.model.Employee;
import com.lss.hrmsys.entity.model.Post;
import com.lss.hrmsys.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

    // 自动注入 DAO 对象
    @Resource
    private EmployeeDao employeeDao;

    // 实现接口中的方法

    @Override
    public List<Employee> findEmployees(Map<String, Object> map) {

        return employeeDao.findEmployees(map);
    }

    @Override
    public Integer getCount(Map<String, Object> map) {

        return employeeDao.getCount(map);
    }

    @Override
    public Integer addEmployee(Employee employee) {
        Integer flag = null;
        // 如果插入记录主键重复，抛出异常
        try {
            flag =  employeeDao.addEmployee(employee);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }

        return flag;
    }

    @Override
    public Integer updateEmployee(Employee employee) {

        return employeeDao.updateEmployee(employee);
    }

    @Override
    public Integer deleteEmployee(int id) {

        return employeeDao.deleteEmployee(id);
    }

}