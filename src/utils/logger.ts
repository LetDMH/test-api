/*
 * @Author: dingminghui
 * @Date: 2021-09-16 13:56:49
 * @LastEditTime: 2021-11-17 20:18:55
 * @LastEditors: Please set LastEditors
 * @Description: 日志配置
 * @FilePath: /api-server/logger.ts
 */
const log4js = require("log4js");
const path = require("path");

log4js.configure({
  appenders: {
    // 数据库查询日志
    sql: {
      // 定义一个sql日志出口
      type: "dateFile",
      filename: path.resolve(__dirname, "../", "logs", "sqlLogs", "sql.log"),
      maxLogSize: 1024 * 1024, // 配置文件的最大字节数
      keepFileExt: true,
      layout: {
        type: "pattern",
        pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
      },
    },
    // 接口请求日志
    access: {
      type: "dateFile",
      filename: path.resolve(__dirname, "../", "logs", "accessLogs", "access.log"),
      maxLogSize: 1024 * 1024, // 配置文件的最大字节数
      keepFileExt: true,
      layout: {
        type: "pattern",
        pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
      },
    },
    default: {
      type: "console",
    },
  },
  categories: {
    sql: {
      appenders: ["sql"], // 该分类使用出口sql的配置写入日志
      level: "all",
    },
    access: {
      appenders: ["access"],
      level: "all"
    },
    default: {
      appenders: ["default"],
      level: "all",
    },
  },
});

process.on("exit", () => {
  log4js.shutdown();
});

export const sqlLogger = log4js.getLogger("sql");
export const accessLogger = log4js.getLogger("access");
export const defaultLogger = log4js.getLogger();