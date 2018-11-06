package com.lss.hrmsys.api;

import com.lss.hrmsys.entity.model.Department;
import com.lss.hrmsys.entity.model.Employee;
import com.lss.hrmsys.service.EmployeeService;
import com.lss.hrmsys.util.IntegrateObject;
import com.lss.hrmsys.util.JsonDateValueProcessor;
import com.lss.hrmsys.util.ResponseUtil;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping("/api/empl")
public class EmployeeApiController {
    private EmployeeService employeeService;

    @Autowired
    public EmployeeApiController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Employee> search(@RequestParam(required = false) String _end,
                                 @RequestParam(required = false) String _order,
                                 @RequestParam(required = false) String _sort,
                                 @RequestParam(required = false) String _start,
                                 @RequestParam(defaultValue = "") String q,
                                 @RequestParam(defaultValue = "") String id_like,
                                 @RequestParam(defaultValue = "") String pos_id,
                                 @RequestParam(defaultValue = "") String dept_id,
                                 @RequestParam(defaultValue = "") String nation,
                                 @RequestParam(defaultValue = "") String party,
                                 @RequestParam(defaultValue = "") String sex,
                                 HttpServletResponse response) {
        //return employeeService.findEmployees(new HashMap<>());
        Map<String, Object> map = new HashMap<String, Object>();
        if(!pos_id.equals(""))
        {
            map.put("pos_id", Integer.parseInt(pos_id));
        }
        if(!dept_id.equals(""))
        {
            map.put("dept_id", Integer.parseInt(dept_id));
        }
        if(!nation.equals(""))
        {
            map.put("nation", nation);
        }
        if(!party.equals(""))
        {
            map.put("party", party);
        }
        if(!sex.equals(""))
        {
            map.put("sex", sex);
        }
        List<Employee> employeeList = employeeService.findEmployees(map);

        //搜索过滤
        List<Employee> result;
        employeeList = Filter(employeeList, q, id_like);

        //分页数据
        if(_order != null){
            result = Sort(employeeList, _order, _sort, Integer.parseInt(_start), Integer.parseInt(_end));
        }
        else{
            result = employeeList;
        }
        response.addHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addHeader("X-Total-Count", String.valueOf(employeeList.size()));
        return result;
    }

    public List<Employee> Filter(List<Employee> deptList, String q, String ids) {
        List<Employee> result = new ArrayList<>();
        String[] myID = {};
        if(!ids.trim().equals(""))
        {
            myID = ids.split("|");
        }
        for(Employee d:deptList)
        {
            if(!q.trim().equals("") && !d.toString().contains(q))
            {
                continue;
            }

            if(myID.length > 0) {
                for (String str : myID) {
                    if (str.equals(d.getId().toString())) {
                        result.add(d);
                    }
                }
            }
            else result.add(d);
        }
        return result;
    }

    public List<Employee> Sort(List<Employee> employeeList, String order, String sort, int start, int end)
    {
        switch (sort){
            case "id":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getId) : Comparator.comparing(Employee::getId).reversed());
                break;
            case "name":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getName) : Comparator.comparing(Employee::getName).reversed());
                break;
            case "sex":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getSex) : Comparator.comparing(Employee::getSex).reversed());
                break;
            case "birthday":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getBirthday) : Comparator.comparing(Employee::getBirthday).reversed());
                break;
            case "nation":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getNation) : Comparator.comparing(Employee::getNation).reversed());
                break;
            case "party":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getParty) : Comparator.comparing(Employee::getParty).reversed());
                break;
            case "location":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getLocation) : Comparator.comparing(Employee::getLocation).reversed());
                break;
            case "armyday":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getArmyday) : Comparator.comparing(Employee::getArmyday).reversed());
                break;
            case "workday":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getWorkday) : Comparator.comparing(Employee::getWorkday).reversed());
                break;
            case "dept_id":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getDept_id) : Comparator.comparing(Employee::getDept_id).reversed());
                break;
            case "pos_id":
                employeeList.sort(order.equals("ASC") ? Comparator.comparing(Employee::getPos_id) : Comparator.comparing(Employee::getPos_id).reversed());
                break;
        }
        List<Employee> result = new ArrayList<>();
        for(int i=start; i<end; i++)
        {
            if(i < employeeList.size()){
                result.add(employeeList.get(i));
            }
            else break;
        }
        return result;
    }

    //新增
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Employee create(@RequestBody Employee employee, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println(department.getDescription() + "   ---------------------------------------------------------------");
        int resultID = -1;
        // 完成 Department 和 Position 在 Employee 中的关联映射
        IntegrateObject.genericAssociation(employee.getDept_id(), employee.getPos_id(), employee);
        resultID = employeeService.addEmployee(employee);
        employee.setId(resultID);
        return employee;
    }

    @RequestMapping(value = "/{empl_id}", method = RequestMethod.PUT)
    public Employee update(@RequestBody Employee employee, @PathVariable String empl_id, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", empl_id);
        List<Employee> listEmpl = employeeService.findEmployees(map);

        if(listEmpl.size() == 0)
        {
            return null;
        }
        else
        {
            // 完成 Department 和 Position 在 Employee 中的关联映射
            IntegrateObject.genericAssociation(employee.getDept_id(), employee.getPos_id(), employee);
            employeeService.updateEmployee(employee);
            listEmpl = employeeService.findEmployees(map);
            return listEmpl.get(0);
        }
    }

    @RequestMapping(value = "/{empl_id}", method = RequestMethod.GET)
    public Employee findone(@PathVariable String empl_id, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", empl_id);
        List<Employee> listEmpl = employeeService.findEmployees(map);

        if(listEmpl.size() == 0)
        {
            return null;
        }
        else
        {
            return listEmpl.get(0);
        }
    }

    @RequestMapping(value = "/{empl_id}", method = RequestMethod.DELETE)
    public Employee delete(@PathVariable String empl_id, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", empl_id);
        List<Employee> listEmpl = employeeService.findEmployees(map);

        if(listEmpl.size() == 0)
        {
            return null;
        }
        else
        {
            employeeService.deleteEmployee(listEmpl.get(0).getId());
            return listEmpl.get(0);
        }
    }

}