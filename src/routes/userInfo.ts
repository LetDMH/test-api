/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:29:02
 * @LastEditTime: 2021-11-26 18:35:57
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/routes/userInfo.ts
 */
import express from "express";
import UserInfo from '../controllers/userInfo';
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.get('/_user_info', ResponseHandler.commonHandler(UserInfo.getUserInfo));
router.put('/_user_info', ResponseHandler.commonHandler(UserInfo.modifyUserInfo));
router.post('/_user_info', ResponseHandler.commonHandler(UserInfo.createUser));

export default router;