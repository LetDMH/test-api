/*
 * @Author: dingminghui
 * @Date: 2021-09-27 21:24:30
 * @LastEditTime: 2021-11-17 20:11:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/routes/position.ts
 */
import express from "express";
import Position from '../controllers/position';
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.get('/position', ResponseHandler.commonHandler(Position.getAllPosition));
router.post('/position', ResponseHandler.commonHandler(Position.addPosition));
router.delete('/position', ResponseHandler.commonHandler(Position.deletePosition));

export default router;