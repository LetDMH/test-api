/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:29:02
 * @LastEditTime: 2021-09-18 11:46:10
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/routes/userInfo.ts
 */
import express from "express";
import UserInfo from '../controllers/userInfo';
const router = express.Router();

router.get('/_user_info', UserInfo.getUserInfo);
router.post('/_user_info', UserInfo.modifyUserInfo);

export default router;