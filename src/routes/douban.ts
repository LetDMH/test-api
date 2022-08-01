import express from "express";
import getLatest from '../service/douban'
import ResponseHandler from '../utils/responceHandler';

const router = express.Router();

router.get('/douban/latest', ResponseHandler.commonHandler(getLatest));

export default router;
