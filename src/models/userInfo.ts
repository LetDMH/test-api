/*
 * @Author: dingminghui
 * @Date: 2021-09-16 15:39:24
 * @LastEditTime: 2021-11-20 17:01:47
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/models/userInfo.ts
 */
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db'

const UserInfoModel = sequelize.define('_user_info', {
  _id: {
    type: DataTypes.INET,
    primaryKey: true,
    // allowNull: false,
  },
  _user_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  _user_id: {
    type: DataTypes.STRING(18),
    allowNull: false
  },
  _mobile: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  _email: {
    type: DataTypes.STRING(255),
  },
  _ctime: {
    type: DataTypes.DATE
  },
  _utime: {
    type: DataTypes.DATE,
    defaultValue: new Date().toISOString()
  }
})

export default UserInfoModel;