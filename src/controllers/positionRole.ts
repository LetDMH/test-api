/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:08:52
 * @LastEditTime: 2021-09-28 14:53:44
 * @LastEditors: Please set LastEditors
 * @Description: 岗位角色
 * @FilePath: /api-server/src/controllers/positionRole.ts
 */
import PositionRoleModel from '../models/positionRole';
import { Request, Response } from 'express';
import { getRandomNumber } from '../utils/utils';

class PositionRole {
  public static async getPositionRole(req: Request, res: Response) {
    let { orgId, positionId } = res.req.body;
    let ins = await PositionRoleModel.findAll({
      where: {
        orgId,
        positionId
      }
    })
    console.log(ins)
    return res.send({
      code: 200,
      msg: "操作成功！",
      data: ins,
    });
  }
  public static async addPositionRole(req: Request, res: Response) {
    let { orgId, userId, positionId, roleName } = res.req.body;
    let ctime = new Date().toISOString();
    let ins = PositionRoleModel.create({
      orgId,
      userId,
      positionId,
      roleId: getRandomNumber(18),
      roleName,
      _ctime: ctime,
      _utime: ctime
    })
    return res.send({
      code: 200,
      msg: "操作成功！",
      data: ins,
    });
  }
}

export default PositionRole