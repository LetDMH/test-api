/*
 * @Author: dingminghhui
 * @Date: 2021-11-29 17:45:44
 * @LastEditTime: 2021-11-29 17:49:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /api-server/src/controllers/test.ts
 */
import { NextFunction, Request, Response } from 'express';

class TestApis {
  public static async getHistoricVersion(req: Request, res: Response, next: NextFunction) {
    const value = {
      "code": 200,
      "msg": "操作成功",
      "data": {
        "pageSize": 10,
        "currentPage": 1,
        "totalSize": 6,
        "format": true,
        "orgId": "dev-dhs",
        "zoneId": null,
        "modelName": "dhs-core_goods_his",
        "viewId": null,
        "opId": null,
        "version": null,
        "appId": null,
        "conditionList": [
          {
            "opType": "eq",
            "value": "0ACqAfg1X3tqWgmeMrS",
            "fieldName": "old_id",
            "conn": null,
            "children": []
          }
        ],
        "filterList": [],
        "fieldNames": null,
        "esKeywordField": null,
        "keyWord": null,
        "modelDataCases": [
          {
            "id": "526399347164708865",
            "compareFieldList": [],
            "version": "V0",
            "updateUser": null,
            "updateTime": 1605669850.022,
            "curVersion": 0
          },
          {
            "id": "580438280365932544",
            "compareFieldList": [
              {
                "fieldChName": "批准文号",
                "oldData": "京械注准20152401042",
                "newData": null
              },
              {
                "fieldChName": "批准文号有效期",
                "oldData": 1603814400000,
                "newData": null
              },
              {
                "fieldChName": "最小赋码单位所含最小计价单位数量",
                "oldData": null,
                "newData": 1
              },
              {
                "fieldChName": "上市许可持有人名称",
                "oldData": null,
                "newData": "2222"
              },
              {
                "fieldChName": "有效期",
                "oldData": 12,
                "newData": 22222
              },
              {
                "fieldChName": "药品本位码",
                "oldData": null,
                "newData": "33333"
              },
              {
                "fieldChName": "包装转换比",
                "oldData": null,
                "newData": 2222
              },
              {
                "fieldChName": "商品名称",
                "oldData": "甲状腺球蛋白（TG）测定试剂盒（化学发光免疫分析法",
                "newData": null
              },
              {
                "fieldChName": "最小计价单位",
                "oldData": "盒",
                "newData": "333"
              },
              {
                "fieldChName": "国家药品标识码",
                "oldData": null,
                "newData": "2222"
              },
              {
                "fieldChName": "有效期单位",
                "oldData": "月",
                "newData": null
              },
              {
                "fieldChName": "生产企业ID",
                "oldData": "科美诊断技术股份有限公司",
                "newData": null
              },
              {
                "fieldChName": "处方药标识",
                "oldData": "非处方药",
                "newData": null
              }
            ],
            "version": "V1",
            "updateUser": "超级管理员",
            "updateTime": 1618553735.664,
            "curVersion": 0
          },
          {
            "id": "580441808182444032",
            "compareFieldList": [
              {
                "fieldChName": "上市许可持有人名称",
                "oldData": "2222",
                "newData": "1"
              },
              {
                "fieldChName": "有效期",
                "oldData": 22222,
                "newData": 12
              },
              {
                "fieldChName": "药品本位码",
                "oldData": "33333",
                "newData": "1"
              },
              {
                "fieldChName": "包装转换比",
                "oldData": 2222,
                "newData": 1
              },
              {
                "fieldChName": "最小计价单位",
                "oldData": "333",
                "newData": "1"
              }
            ],
            "version": "V2",
            "updateUser": "超级管理员",
            "updateTime": 1618554576.757,
            "curVersion": 0
          },
          {
            "id": "580441958632128512",
            "compareFieldList": [
              {
                "fieldChName": "上市许可持有人名称",
                "oldData": "1",
                "newData": "kkk"
              },
              {
                "fieldChName": "有效期",
                "oldData": 12,
                "newData": 8
              },
              {
                "fieldChName": "药品本位码",
                "oldData": "1",
                "newData": "888"
              },
              {
                "fieldChName": "包装转换比",
                "oldData": 1,
                "newData": 999
              },
              {
                "fieldChName": "最小计价单位",
                "oldData": "1",
                "newData": "9"
              }
            ],
            "version": "V3",
            "updateUser": "超级管理员",
            "updateTime": 1618554612.631,
            "curVersion": 0
          },
          {
            "id": "580443416131796992",
            "compareFieldList": [
              {
                "fieldChName": "上市许可持有人名称",
                "oldData": "kkk",
                "newData": "2222"
              },
              {
                "fieldChName": "有效期",
                "oldData": 8,
                "newData": 3
              },
              {
                "fieldChName": "药品本位码",
                "oldData": "888",
                "newData": "3333"
              },
              {
                "fieldChName": "包装转换比",
                "oldData": 999,
                "newData": 3
              },
              {
                "fieldChName": "最小计价单位",
                "oldData": "9",
                "newData": "3"
              }
            ],
            "version": "V4",
            "updateUser": "超级管理员",
            "updateTime": 1618554960.125,
            "curVersion": 0
          },
          {
            "id": "645630387485147136",
            "compareFieldList": [
              {
                "fieldChName": "生产企业名称",
                "oldData": "北京科美生物技术有限公司",
                "newData": "长春祈健生物制品有限公司"
              },
              {
                "fieldChName": "生产企业ID",
                "oldData": null,
                "newData": "长春祈健生物制品有限公司"
              }
            ],
            "version": "V5",
            "updateUser": "张程浩",
            "updateTime": 1634096745.198,
            "curVersion": 1
          }
        ],
        "allCondition": [
          {
            "opType": "eq",
            "value": "0ACqAfg1X3tqWgmeMrS",
            "fieldName": "old_id",
            "conn": null,
            "children": []
          }
        ]
      }
    }
    return value;
  }
}

export default TestApis;