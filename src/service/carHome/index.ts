import axios from 'axios'
import iconv from 'iconv-lite'
import type { Request, Response } from 'express'

/**
 * @description 获取车型分类
 * @returns {Promise<[]>} 响应数据
 */
export async function getModels(): Promise<[]> {
    // const resp = await axios.get('https://www.autohome.com.cn/ashx/AjaxIndexHotCarByDsj.ashx')
    const resp = await axios({
        baseURL: 'https://www.autohome.com.cn/ashx/AjaxIndexHotCarByDsj.ashx',
        responseType: 'arraybuffer'
    })
    return JSON.parse(iconv.decode(resp.data, 'gbk'))
}

/**
 * @description 获取车型详情
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @returns {Promise<[]>} 响应数据
 */
export async function getModelDetail(req: Request, res: Response): Promise<[]> {
    if (!req?.params.id) return []
    const resp = await axios({
        baseURL: 'https://www.autohome.com.cn/ashx/index/GetHomeFindCar.ashx',
        responseType: 'arraybuffer',
        params: {
            type: 2, // 0,1,2
            seriesid: req.params.id, // 对应车型Id
            format: 'json',
            v: 1
        }
    })
    return JSON.parse(iconv.decode(resp.data, 'gbk'))
}
