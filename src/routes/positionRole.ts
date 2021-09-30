/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:19:52
 * @LastEditTime: 2021-09-28 14:28:28
 * @LastEditors: Please set LastEditors
 * @Description: 岗位角色
 * @FilePath: /api-server/src/routes/positionRole.ts
 */
import express from "express";
import PositionRole from '../controllers/positionRole';
const router = express.Router();

router.post('/position_role', PositionRole.getPositionRole);
router.post('/position_role', PositionRole.addPositionRole);

export default router;
