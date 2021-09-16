/*
 * @Author: dingminghui
 * @Date: 2021-09-16 13:51:17
 * @LastEditTime: 2021-09-16 15:36:25
 * @LastEditors: Please set LastEditors
 * @Description: db
 * @FilePath: /api-server/src/DB/db.ts
 */
import { Sequelize } from 'sequelize';
const { sqlLogger } = require('../utils/logger');

const sequelize = new Sequelize('testApis', 'root', 'edisonchen', {
  host: 'localhost',
  dialect: 'mysql',
  logging: (msg) => {
    sqlLogger.debug(msg);
  },
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;