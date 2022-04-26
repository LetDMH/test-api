/*
 * @Author: dingminghui
 * @Date: 2021-09-17 18:12:15
 * @LastEditTime: 2022-01-10 18:48:28
 * @LastEditors: Please set LastEditors
 * @Description: 相应处理
 * @FilePath: /api-server/src/utils/responceHandler.ts
 */
import { Request, Response, NextFunction } from 'express';
import { errorLogger } from './logger';

export default class ResponseHandler {
  /**
   * @description: 错误处理函数
   * @param {string} err 错误信息
   * @param {string} errcode 错误码
   * @param {Response} res 响应函数
   * @return {*}
   */
  public static errorHandler(error: string | string[], res: Response, errcode: number = 500) {
    let err: string;
    if (Array.isArray(error)) {
      err = error.join(";");
    }
    else {
      err = error;
    }
    errorLogger.error(err);
    // console.log(error);
    res.send({
      code: errcode,
      data: null,
      // msg: err
      msg: '网络异常'
    })
  }
  /**
   * @description: 数据响应函数
   * @param {any} data 响应数据
   * @param {Response} res 响应函数
   * @return {*}
   */
  // @ts-ignore
  public static resultHandler(data: any, res: Response) {
    res.send({
      code: 200,
      data,
      msg: '操作成功'
    })
  }
  /**
   * @description: 数据处理公共函数
   * @param {Function} handler 逻辑层处理函数
   * @return {*}
   */
  public static commonHandler(handler) {
    return async(req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await handler(req, res, next);
        this.resultHandler(result, res);
      } catch (err) {
        // next(err);
        this.errorHandler(err, res);
      }
    }
  }
}
