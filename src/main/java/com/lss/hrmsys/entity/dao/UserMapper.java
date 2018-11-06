package com.lss.hrmsys.entity.dao;

import com.lss.hrmsys.entity.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

//@Mapper
public interface UserMapper {

    /*
     * 新增用戶
     * @param user  复制java对象要么别注解直接在xml里使用属性，要么注解为XXX后在xml里使用XXX.properties， 多参数要注解
     * @return
     * @throws Exception
     */
    public int insertUser(User user) throws Exception;

    /*
     * 修改用戶
     * @param user
     * @param id
     * @return
     * @throws Exception
     */
    public int updateUser(@Param("user") User user) throws Exception;

    /*
     * 刪除用戶
     * @param id
     * @return
     * @throws Exception
     */
    public int deleteUser(@Param("id") Integer id) throws Exception;

    /*
     * 根据id查询用户信息
     * @param id
     * @return
     * @throws Exception
     */
    public User selectUserById(@Param("id") Integer id) throws Exception;

    /*
     * 查询所有的用户信息
     * @return
     * @throws Exception
     */
    public List<User> selectAllUser() throws Exception;
}
