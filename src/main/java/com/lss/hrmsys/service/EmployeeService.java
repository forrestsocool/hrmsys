package com.lss.hrmsys.service;

import com.lss.hrmsys.entity.model.Employee;
import com.lss.hrmsys.entity.model.Post;

import java.util.List;
import java.util.Map;

public interface EmployeeService {

    /** 根据条件查询员工
     *
     * @param map
     * @return
     */
    public List<Employee>findEmployees(Map<String, Object> map);

    /** 根据条件查询员工人数
     *
     * @param map
     * @return
     */
    public Integer getCount(Map<String, Object> map);

    /** 添加员工
     *
     * @param employee
     * @return
     */
    public Integer addEmployee(Employee employee);

    /** 修改员工
     *
     * @param employee
     * @return
     */
    public Integer updateEmployee(Employee employee);

    /** 删除员工
     *
     * @param id
     * @return
     */
    public Integer deleteEmployee(int id);
}