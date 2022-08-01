import axios from 'axios'
import * as cheerio from 'cheerio'

/**
 * @description 获取豆瓣读书网页的源代码
 * @returns {string} html字符串
 */
async function getBooksHTML() {
    const resp = await axios.get("https://book.douban.com/latest")
    return resp.data
}

/**
 * @description 从豆瓣读书中得到一个完整的网页，并从网页中分析出书籍的基本信息，然后得到一个书籍的详情页链接数组
 * @returns {string[]} 书籍详情链接数组
 */
async function getBookLinks(): Promise<string[]> {
    const html = await getBooksHTML()
    const $ = cheerio.load(html)
    const achorElements = $('#content li a.fleft')
    const links = achorElements
        .map((i, ele) => {
            const href = ele.attribs.href
            return href
        })
        .get()
    return links
}

/**
 * @description 根据书籍详情页的地址，得到该书籍的详细信息
 * @param {string} detailUrl 详情链接地址
 * @returns {Object} 书籍信息
 */
async function getBookDetail(detailUrl: string): Promise<object> {
    const resp = await axios.get(detailUrl)
    const $ = cheerio.load(resp.data)
    const name = $("h1").text().trim()
    const imgUrl = $("#mainpic .nbg img").attr("src")
    const spans = $("#info span.pl")
    const authorSpan = spans.filter((i, ele) => {
        return $(ele).text().includes("作者")
    })
    const author = authorSpan.next("a").text()
    const publishSpan = spans.filter((i, ele) => {
        return $(ele).text().includes("出版年")
    })
    // @ts-ignore
    const publishDate = publishSpan[0].nextSibling.nodeValue.trim()
    return {
        name,
        imgUrl,
        publishDate,
        author
    }
}

/**
 * @description 获取所有的书籍信息
 * @returns {Promise} 所有书籍信息
 */
async function fetchAll(): Promise<object[]> {
    const links = await getBookLinks() // 得到书籍的详情页地址
    const proms = links.map((link) => {
        return getBookDetail(link)
    })
    return Promise.all(proms)
}

export default fetchAll


