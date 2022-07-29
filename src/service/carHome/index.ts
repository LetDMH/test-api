import axios from 'axios'
import iconv from 'iconv-lite'

/**
 * @description 获取所有车型
 * @returns
 */
async function getAllTypes() {
    // const resp = await axios.get('https://www.autohome.com.cn/ashx/AjaxIndexHotCarByDsj.ashx')
    const resp = await axios({
        baseURL: 'https://www.autohome.com.cn/ashx/AjaxIndexHotCarByDsj.ashx',
        responseType: 'arraybuffer'
    })
    console.log(iconv.decode(resp.data, 'gbk'))
}

// getAllTypes()
