/*
 * @Author: dingminghhui
 * @Date: 2021-11-29 17:45:44
 * @LastEditTime: 2022-01-10 18:49:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /api-server/src/controllers/test.ts
 */
import { NextFunction, Request, Response } from 'express';
import { historicData, fileData } from '../utils/mockData';
class TestApis {
  public static async getHistoricVersion(req: Request, res: Response, next: NextFunction) {
    const value = historicData;
    return value;
  }
  public static async getFileData(req: Request, res: Response, next: NextFunction) {
    const value = fileData;
    return value;
  }
}

export default TestApis;