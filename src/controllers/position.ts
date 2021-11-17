/*
 * @Author: dingminghui
 * @Date: 2021-09-27 21:10:28
 * @LastEditTime: 2021-11-17 20:10:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/controllers/position.ts
 */
import PositionModel from '../models/position';
import { Request, Response } from 'express';
import { getRandomNumber } from '../utils/utils';

class Position {
  public static async getAllPosition(req: Request, res: Response) {
    const value = await PositionModel.findAll({
      attributes: ['orgId', 'positionGroup', 'positionId', 'positionName']
    })
    return value;
  }
  public static async addPosition(req: Request, res: Response) {
    console.log(res.req.body)
    const { orgId, positionName, positionGroup, positionId } = res.req.body;
    let ins;
    if (positionId) {
      ins = await PositionModel.update({
        positionName,
        _utime: new Date().toISOString()
      }, {
        where: {
          orgId,
          positionId
        }
      })
    } else {
      const ctime = new Date().toISOString();
      ins = await PositionModel.create({
        orgId,
        positionName,
        positionGroup,
        positionId: getRandomNumber(18),
        _ctime: ctime,
        _utime: ctime
      })
    }
    return ins;
  }
  public static async deletePosition(req: Request, res: Response) {
    const { orgId, positionId } = res.req.body;
    const ins = await PositionModel.destroy({
      where: {
        orgId,
        positionId
      }
    })
    return ins;
  }
}

export default Position;
