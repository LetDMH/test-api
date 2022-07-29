/*
 * @Author: dingminghui
 * @Date: 2021-09-16 13:51:17
 * @LastEditTime: 2021-09-17 18:03:51
 * @LastEditors: Please set LastEditors
 * @Description: db
 * @FilePath: /api-server/src/DB/db.ts
 */
import { Sequelize} from 'sequelize';
import { sqlLogger } from '../utils/logger';
import { dbInfo } from '../utils/config';

const { databaseName, userName, password, host, dialect } = dbInfo;
const sequelize = new Sequelize(databaseName, userName, password, {
  host,
  dialect,
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
