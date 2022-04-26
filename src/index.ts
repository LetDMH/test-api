/*
 * @Author: dingminghui
 * @Date: 2021-09-15 16:37:12
 * @LastEditTime: 2021-11-29 17:50:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/index.ts
 */
import express, { NextFunction, Request, Response } from 'express';
import ip from 'ip';
import { PORT } from './utils/constant';
import { accessLogger, defaultLogger as logger } from './utils/logger'
import userInfoRouter from './routes/userInfo';
import positionRouter from './routes/position';
import positionRoleRouter from './routes/positionRole';
import TestApisRouter from './routes/test';
import log4js from 'log4js';
const path = require('path');
const app = express();

const proxy   = require('express-http-proxy')

const proxyTable = proxy('http://192.168.2.107:8088', {
//   proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
//     // console.log(proxyReqOpts, srcReq);

//     proxyReqOpts.headers['Referer'] = 'http://192.168.2.107:8088';
//  },
})

app.use('/', proxyTable);

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(async (req: Request, res: Response, next: NextFunction) => {
//   logger.debug({
//     headers: req.headers,
//     body: req.body,
//     query: req.query,
//     params: req.query,
//   });
//   next();
// })
app.use(log4js.connectLogger(accessLogger, {
  // level: 'auto',
  // 获取上下文中的数据:res[]、req[header]
  format: `":method" ":status" ":url" "HTTP/http-version" ":response-timems" ":remote-addr" ":user-agent"`,
  statusRules: [
    {from: 200, to: 299, level: 'info'},
    {codes: [304], level: 'info'},
    {codes: [404, 500], level: 'error'},
  ]
}))

// routes
app.use('/api/sys', userInfoRouter);
app.use('/api/sys', positionRouter);
app.use('/api/sys', positionRoleRouter);

app.use('/api/tc', TestApisRouter);

app.get("/test", (req, res) => {
  res.send("Hello Docker!")
});

app.listen(12306, () => {
  console.log(`serve is being on ${ip.address()}:${PORT}`);
})