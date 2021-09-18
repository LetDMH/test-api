/*
 * @Author: dingminghui
 * @Date: 2021-09-16 16:43:52
 * @LastEditTime: 2021-09-18 11:56:29
 * @LastEditors: Please set LastEditors
 * @Description: 用户信息
 * @FilePath: /api-server/src/controllers/userInfo.ts
 */
import UserInfoModel from '../models/userInfo';
import { Request, Response } from 'express';

class UserInfo {
  public static async getUserInfo(req: Request, res: Response) {
    let value = await UserInfoModel.findAll()
    return res.send({
      code: 200,
      msg: '操作成功！',
      data: value
    });
  }
  public static async modifyUserInfo(req: Request, res: Response) {
    console.log(res.req)
    let { _user_name, _user_id, _mobile, _email } = res.req.body;
    let ins = await UserInfoModel.update({
      _user_name,
      _mobile,
      _email
    }, {
      where: {
        _user_id
      }
    })
    return res.send({
      code: 200,
      msg: "操作成功！",
      data: ins,
    });
  }
}

export default UserInfo;