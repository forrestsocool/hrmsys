package com.lss.hrmsys.entity.model;

import java.io.Serializable;
import java.util.Date;

public class Employee implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;  // 员工编号
    private String name;  // 姓名
    private String sex;  // 性别
    private String nation;  // 民族
    private String location;  // 籍贯
    private String party;  // 政治面貌
    private Date armyday;  // 入伍年月
    private Date birthday;  // 生日
    private Date workday;  // 调入本单位时间
    private Department department;  // 部门
    private Position position;  // 职位
    private Integer dept_id;
    private Integer pos_id;

    public Integer getDept_id() {
        return dept_id;
    }

    public void setDept_id(Integer dept_id) {
        this.dept_id = dept_id;
    }

    public Integer getPos_id() {
        return pos_id;
    }

    public void setPos_id(Integer pos_id) {
        this.pos_id = pos_id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public Date getArmyday() {
        return armyday;
    }

    public void setArmyday(Date armyday) {
        this.armyday = armyday;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Date getWorkday() {
        return workday;
    }

    public void setWorkday(Date workday) {
        this.workday = workday;
    }

    @Override
    public String toString() {
        return "Employee:[id=" + id + ",name=" + name + ",sex=" + sex
                + ",nation=" + nation + ",location=" + location + ",party=" + party
                + ",armyday=" + armyday + ",birthday=" + birthday + ",workday=" + workday
                + ",department=" + department + ",position=" + position + "]";
    }
}