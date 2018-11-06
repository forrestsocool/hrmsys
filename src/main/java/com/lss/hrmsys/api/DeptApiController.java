package com.lss.hrmsys.api;

import com.lss.hrmsys.entity.model.Department;
import com.lss.hrmsys.entity.model.Employee;
import com.lss.hrmsys.service.DepartmentService;
import com.lss.hrmsys.service.EmployeeService;
import com.lss.hrmsys.util.ResponseUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/dept")
public class DeptApiController {
    private DepartmentService deptService;

    @Autowired
    public DeptApiController(DepartmentService deptService) {
        this.deptService = deptService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Department> search(
            @RequestParam(defaultValue = "") String id_like,
            @RequestParam(required = false) String _end,
            @RequestParam(required = false) String _order,
            @RequestParam(required = false) String _sort,
            @RequestParam(required = false) String _start,
            HttpServletResponse response)  {
        Map<String, Object> map = new HashMap<String, Object>();

        List<Department> deptList = deptService.findDepartments(map);
        List<Department> result = deptList;

        //筛选
        if(!id_like.equals(""))
        {
            result = Filter(deptList,id_like);
        }

        //分页
        if(_order != null)
        {
            result = Sort(deptList, _order, _sort, Integer.parseInt(_start), Integer.parseInt(_end));
        }

        response.addHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addHeader("X-Total-Count", String.valueOf(result.size()));
        return result;
    }

    public List<Department> Filter(List<Department> deptList, String ids) {
        List<Department> result = new ArrayList<>();
        String[] myID ={};
        if(!ids.trim().equals(""))
        {
            myID = ids.split("|");
        }
        else
        {
            return deptList;
        }

        for(Department d:deptList)
        {
            for(String str : myID)
            {
                if(str.equals(d.getId().toString()))
                {
                    result.add(d);
                }
            }
        }
        return result;
    }

    public List<Department> Sort(List<Department> deptList, String order, String sort, int start, int end) {
        switch (sort) {
            case "id":
                deptList.sort(order.equals("ASC") ? Comparator.comparing(Department::getId) : Comparator.comparing(Department::getId).reversed());
                break;
            case "name":
                deptList.sort(order.equals("ASC") ? Comparator.comparing(Department::getName) : Comparator.comparing(Department::getName).reversed());
                break;
            case "description":
                deptList.sort(order.equals("ASC") ? Comparator.comparing(Department::getDescription) : Comparator.comparing(Department::getDescription).reversed());
                break;
        }
        List<Department> result = new ArrayList<>();
        for(int i=start; i<end; i++)
        {
            if(i < deptList.size()){
                result.add(deptList.get(i));
            }
            else break;
        }
        return result;
    }

    @RequestMapping(value = "/{dept_id}", method = RequestMethod.GET)
    public Department getdept(@PathVariable String dept_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", dept_id);
        List<Department> deptList = deptService.findDepartments(map);
        if(deptList.size() > 0)
            return deptList.get(0);
        else return null;
    }


    @RequestMapping(value = "", method = RequestMethod.POST)
    public Department create(@RequestBody Department department, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println(department.getDescription() + "   ---------------------------------------------------------------");
        int resultID = -1;
        // 如果 id 为空，则添加部门，否则修改部门
        if (department.getId() == null)
            resultID = deptService.addDepartment(department);
        else
            resultID = deptService.updateDepartment(department);
        if(department.getId() == null && resultID != -1)
        {
            department.setId(resultID);
        }
       // ResponseUtil.write(response, result);
        return department;
    }

    @RequestMapping(value = "/{dept_id}", method = RequestMethod.DELETE)
    public Department delete(@PathVariable String dept_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", dept_id);
        List<Department> listDept = deptService.findDepartments(map);

        if(listDept.size() == 0)
        {
            return null;
        }
        else
        {
            deptService.deleteDepartment(Integer.parseInt(dept_id));
            return listDept.get(0);
        }
    }

    @RequestMapping(value = "/{dept_id}", method = RequestMethod.PUT)
    public Department update(@RequestBody Department department, @PathVariable String dept_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", dept_id);
        List<Department> listDept = deptService.findDepartments(map);

        if(listDept.size() == 0)
        {
            return null;
        }
        else
        {
            deptService.updateDepartment(department);
            listDept = deptService.findDepartments(map);
            return listDept.get(0);
        }
    }
}