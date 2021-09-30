/*
 * @Author: 丁铭晖
 * @Date: 2021-09-28 14:12:04
 * @LastEditTime: 2021-09-28 14:12:04
 * @LastEditors: Please set LastEditors
 * @Description: 工具函数
 * @FilePath: /api-server/src/utils/utils.ts
 */
export function getRandomNumber(n: number) {  
  let arr = new Array(n); //用于存放随机数
  let randomNumber = ''; //存放随机数
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(String(Math.random() * 10));
    if (i === 0 && num === 0) {
      arr[i] = num + 1;
    } else {
      arr[i] = num;
    }
  } 
  let flag = 0;  
  for (let i = 0; i < arr.length - 1; i++) {   
      for (let j = i + 1; j < arr.length; j++) {     
          if (arr[i] == arr[j]) {
              flag = 1;
              break;
          }   
      }   
      if (flag) break;  
  }  
  for (let i = 0; i < arr.length; i++) {   
      randomNumber += arr[i];  
  }  
  return randomNumber; 
}