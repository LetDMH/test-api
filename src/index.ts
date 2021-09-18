/*
 * @Author: dingminghui
 * @Date: 2021-09-15 16:37:12
 * @LastEditTime: 2021-09-17 18:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/index.ts
 */
import express from 'express';
import ip from 'ip';
import { PORT } from './utils/constant';
import userInfoRouter from './routes/userInfo'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/sys', userInfoRouter);

app.listen(12306, () => {
  console.log(`serve is being on ${ip.address()}:${PORT}`);
})