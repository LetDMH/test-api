/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:02:08
 * @LastEditTime: 2021-09-28 14:08:29
 * @LastEditors: Please set LastEditors
 * @Description: 岗位角色
 * @FilePath: /api-server/src/models/positionRole.ts
 */
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from './db'

const PositionRoleModel = sequelize.define('_position_role', {
  id: {
    type: DataTypes.INET,
    primaryKey: true,
    // allowNull: false,
  },
  orgId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  positionId: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  roleId: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  roleName: {
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

export default PositionRoleModel;
