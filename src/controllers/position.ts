/*
 * @Author: dingminghui
 * @Date: 2021-09-27 21:10:28
 * @LastEditTime: 2021-09-28 14:13:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/src/controllers/position.ts
 */
import PositionModel from '../models/position';
import { Request, Response } from 'express';
import { getRandomNumber } from '../utils/utils';

class Position {
  public static async getAllPosition(req: Request, res: Response) {
    let value = await PositionModel.findAll({
      attributes: ['orgId', 'positionGroup', 'positionId', 'positionName']
    })
    return res.send({
      code: 200,
      msg: '操作成功！',
      data: value
    });
  }
  public static async addPosition(req: Request, res: Response) {
    console.log(res.req.body)
    let { orgId, positionName, positionGroup, positionId } = res.req.body;
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
      let ctime = new Date().toISOString();
      ins = await PositionModel.create({
        orgId,
        positionName,
        positionGroup,
        positionId: getRandomNumber(18),
        _ctime: ctime,
        _utime: ctime
      })
    }
    // console.log(ins)
    return res.send({
      code: 200,
      msg: "操作成功！",
      data: ins,
    });
  }
  public static async deletePosition(req: Request, res: Response) {
    let { orgId, positionId } = res.req.body;
    let ins = await PositionModel.destroy({
      where: {
        orgId,
        positionId
      }
    })
    return res.send({
      code: 200,
      msg: "操作成功！",
      data: ins,
    });
  }
}

export default Position;
