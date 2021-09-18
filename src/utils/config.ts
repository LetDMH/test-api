/*
 * @Author: dingming
 * @Date: 2021-09-17 17:48:27
 * @LastEditTime: 2021-09-17 18:05:05
 * @LastEditors: Please set LastEditors
 * @Description: 基本配置
 * @FilePath: /api-server/src/utils/config.ts
 */
import { Dialect } from 'sequelize';
interface Database {
  databaseName: string,
  userName: string,
  password: string,
  host: string,
  dialect: Dialect,
}

export const dbInfo: Database = {
  databaseName: 'apis',
  userName: 'root',
  password: 'edisonchen',
  host: 'localhost',
  dialect: 'mysql'
}