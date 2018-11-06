package com.lss.hrmsys.api;

import com.lss.hrmsys.entity.model.Department;
import com.lss.hrmsys.entity.model.Position;
import com.lss.hrmsys.service.DepartmentService;
import com.lss.hrmsys.service.PositionService;
import javafx.geometry.Pos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping("/api/posi")
public class PosiApiController {
    private PositionService positionService;

    @Autowired
    public PosiApiController(PositionService positionService) {
        this.positionService = positionService;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Position> search(
            @RequestParam(defaultValue = "") String id_like,
            @RequestParam(required = false) String _end,
            @RequestParam(required = false) String _order,
            @RequestParam(required = false) String _sort,
            @RequestParam(required = false) String _start,
            HttpServletResponse response) {
        Map<String, Object> map = new HashMap<String, Object>();

        List<Position> posiList = positionService.findPositions(map);

        List<Position> result = posiList;

        //筛选
        if(!id_like.equals("")) {
            result = Filter(result, id_like);
        }

        //分页
        if(_order != null) {
            result = Sort(posiList, _order, _sort, Integer.parseInt(_start), Integer.parseInt(_end));
        }
        response.addHeader("Access-Control-Expose-Headers", "X-Total-Count");
        response.addHeader("X-Total-Count", String.valueOf(result.size()));
        return result;
    }

    public List<Position> Filter(List<Position> posList, String ids) {
        List<Position> result = new ArrayList<>();
        String[] myID = {};
        if(!ids.trim().equals("")){
            myID = ids.split("|");
        }
        else
        {
            return posList;
        }
        for(Position d:posList)
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

    public List<Position> Sort(List<Position> posList, String order, String sort, int start, int end) {
        switch (sort) {
            case "id":
                posList.sort(order.equals("ASC") ? Comparator.comparing(Position::getId) : Comparator.comparing(Position::getId).reversed());
                break;
            case "name":
                posList.sort(order.equals("ASC") ? Comparator.comparing(Position::getName) : Comparator.comparing(Position::getName).reversed());
                break;
            case "description":
                posList.sort(order.equals("ASC") ? Comparator.comparing(Position::getDescription) : Comparator.comparing(Position::getDescription).reversed());
                break;
        }
        List<Position> result = new ArrayList<>();
        for(int i=start; i<end; i++)
        {
            if(i < posList.size()){
                result.add(posList.get(i));
            }
            else break;
        }
        return result;
    }

    @RequestMapping(value = "/{posi_id}", method = RequestMethod.GET)
    public Position getposi(@PathVariable String posi_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", posi_id);
        List<Position> posiList = positionService.findPositions(map);
        if(posiList.size() > 0)
            return posiList.get(0);
        else return null;
    }


    @RequestMapping(value = "", method = RequestMethod.POST)
    public Position create(@RequestBody Position position, HttpServletRequest request, HttpServletResponse response) {
        //System.out.println(department.getDescription() + "   ---------------------------------------------------------------");
        int resultID = -1;
        // 如果 id 为空，则添加部门，否则修改部门
        if (position.getId() == null)
            resultID = positionService.addPosition(position);
        else
            resultID = positionService.updatePosition(position);
        if(position.getId() == null && resultID != -1)
        {
            position.setId(resultID);
        }
       // ResponseUtil.write(response, result);
        return position;
    }

    @RequestMapping(value = "/{posi_id}", method = RequestMethod.DELETE)
    public Position delete(@PathVariable String posi_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", posi_id);
        List<Position> listPosi = positionService.findPositions(map);

        if(listPosi.size() == 0)
        {
            return null;
        }
        else
        {
            positionService.deletePosition(Integer.parseInt(posi_id));
            return listPosi.get(0);
        }
    }

    @RequestMapping(value = "/{posi_id}", method = RequestMethod.PUT)
    public Position update(@RequestBody Position position, @PathVariable String posi_id) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("id", posi_id);
        List<Position> listPosi = positionService.findPositions(map);

        if(listPosi.size() == 0)
        {
            return null;
        }
        else
        {
            positionService.updatePosition(position);
            listPosi = positionService.findPositions(map);
            return listPosi.get(0);
        }
    }
}