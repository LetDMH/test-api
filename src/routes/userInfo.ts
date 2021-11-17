/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:29:02
 * @LastEditTime: 2021-11-17 10:33:32
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/routes/userInfo.ts
 */
import express from "express";
import UserInfo from '../controllers/userInfo';
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.get('/_user_info', ResponseHandler.commonHandler(UserInfo.getUserInfo));
router.post('/_user_info', ResponseHandler.commonHandler(UserInfo.modifyUserInfo));

export default router;