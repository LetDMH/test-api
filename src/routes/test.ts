/*
 * @Author: dingminghui
 * @Date: 2021-11-29 17:47:03
 * @LastEditTime: 2022-01-10 18:07:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /api-server/src/routes/test.ts
 */
import express from "express";
import TestApis from '../controllers/test';
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.get('/test_data/histroy', ResponseHandler.commonHandler(TestApis.getHistoricVersion));
router.get('/test_data/report', ResponseHandler.commonHandler(TestApis.getFileData));

export default router;