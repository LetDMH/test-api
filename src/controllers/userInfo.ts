/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:43:52
 * @LastEditTime: 2021-11-20 17:00:57
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/controllers/userInfo.ts
 */
import UserInfoModel from '../models/userInfo';
import { NextFunction, Request, Response } from 'express';
import { getRandomNumber } from '../utils/utils';

class UserInfo {
  public static async getUserInfo(req: Request, res: Response, next: NextFunction) {
    const value = await UserInfoModel.findAll()
    return value;
  }
  public static async modifyUserInfo(req: Request, res: Response, next: NextFunction) {
    console.log(res.req)
    const { _user_name, _user_id, _mobile, _email } = res.req.body;
    const ins = await UserInfoModel.update({
      _user_name,
      _mobile,
      _email,
      _utime: new Date().toISOString()
    }, {
      where: {
        _user_id
      }
    })
    console.log(ins)
    return ins;
  }
  public static async createUser(req: Request, res: Response, next: NextFunction) {
    const {_user_name, _mobile, _email} = res.req.body;
    const ctime = new Date().toISOString();
    const ins = await UserInfoModel.create({
      _user_id: getRandomNumber(),
      _user_name,
      _mobile,
      _email,
      _ctime: ctime,
      _utime: ctime
    })
  }
}

export default UserInfo;