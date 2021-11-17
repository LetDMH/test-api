/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:08:52
 * @LastEditTime: 2021-11-17 20:12:00
 * @LastEditors: Please set LastEditors
 * @Description: 岗位角色
 * @FilePath: /api-server/src/controllers/positionRole.ts
 */
import PositionRoleModel from '../models/positionRole';
import { Request, Response } from 'express';
import { getRandomNumber } from '../utils/utils';

class PositionRole {
  public static async getPositionRole(req: Request, res: Response) {
    const { orgId, positionId } = res.req.body;
    const ins = await PositionRoleModel.findAll({
      where: {
        orgId,
        positionId
      }
    })
    console.log(ins)
    return ins;
  }
  public static async addPositionRole(req: Request, res: Response) {
    const { orgId, userId, positionId, roleName } = res.req.body;
    const ctime = new Date().toISOString();
    const ins = PositionRoleModel.create({
      orgId,
      userId,
      positionId,
      roleId: getRandomNumber(18),
      roleName,
      _ctime: ctime,
      _utime: ctime
    })
    return ins;
  }
}

export default PositionRole