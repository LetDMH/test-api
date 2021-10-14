/*
 * @Author: dingminghui
 * @Date: 2021-09-15 16:37:12
 * @LastEditTime: 2021-10-14 17:58:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/index.ts
 */
import express from 'express';
import ip from 'ip';
import { PORT } from './utils/constant';
import userInfoRouter from './routes/userInfo';
import positionRouter from './routes/position';
import positionRoleRouter from './routes/positionRole';
const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/sys', userInfoRouter);
app.use('/api/sys', positionRouter);
app.use('/api/sys', positionRoleRouter);

app.get("/test", (req, res) => {
  res.send("Hello Docker!")
});

app.listen(12306, () => {
  console.log(`serve is being on ${ip.address()}:${PORT}`);
})