/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:19:52
 * @LastEditTime: 2021-11-17 20:13:23
 * @LastEditors: Please set LastEditors
 * @Description: 岗位角色
 * @FilePath: /api-server/src/routes/positionRole.ts
 */
import express from "express";
import PositionRole from '../controllers/positionRole';
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.post('/position_role', ResponseHandler.commonHandler(PositionRole.getPositionRole));
router.post('/position_role', ResponseHandler.commonHandler(PositionRole.addPositionRole));

export default router;
