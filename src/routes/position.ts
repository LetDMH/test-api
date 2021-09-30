/*
 * @Author: dingminghui
 * @Date: 2021-09-27 21:24:30
 * @LastEditTime: 2021-09-28 13:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/routes/position.ts
 */
import express from "express";
import Position from '../controllers/position';
const router = express.Router();

router.get('/position', Position.getAllPosition);
router.post('/position', Position.addPosition);
router.delete('/position', Position.deletePosition);

export default router;