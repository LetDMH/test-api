/*
 * @Author: dingminghui
 * @Date: 2021-09-15 16:37:12
 * @LastEditTime: 2021-09-16 16:48:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/index.ts
 */
import express from 'express';
import userInfoRouter from './routes/userInfo'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('api/sys/', userInfoRouter);