/*
 * @Author: dingminghui
 * @Date: 2021-09-27 21:10:47
 * @LastEditTime: 2021-09-28 11:06:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/models/position.ts
 */
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db'

const PositionModel = sequelize.define('_position', {
  id: {
    type: DataTypes.INET,
    primaryKey: true,
    // allowNull: false,
  },
  orgId: {
    type: DataTypes.STRING(255),
  },
  positionGroup: {
    type: DataTypes.STRING(255),
    // allowNull: false,
  },
  positionId: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  positionName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  _ctime: {
    type: DataTypes.DATE
  },
  _utime: {
    type: DataTypes.DATE,
    // defaultValue: new Date().toISOString()
  }
})

export default PositionModel;