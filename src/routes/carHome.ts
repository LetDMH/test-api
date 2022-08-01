import express from "express";
import { getModels, getModelDetail } from '../service/carHome'
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

// 获取车型分类
router.get('/carHome/models', ResponseHandler.commonHandler(getModels));
// 获取品牌的车型
router.get('/carHome/modelDetail/:id', ResponseHandler.commonHandler(getModelDetail));

export default router;
