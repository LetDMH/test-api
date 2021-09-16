/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:29:02
 * @LastEditTime: 2021-09-16 16:46:40
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/routes/userInfo.ts
 */
import express from "express";
import UserInfo from '../controllers/userInfo';
const router = express.Router();

router.get('/_user_info', UserInfo.getUserInfo);

export default router;