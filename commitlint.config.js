/*
 * @Author: 丁铭晖
 * @Date: 2021-09-30 10:47:26
 * @LastEditTime: 2021-09-30 10:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api-server/commitlint.config.ts
 */

// build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交或打前端包
// docs：文档更新
// feat：新增功能
// merge：分支合并 Merge branch ? of ?
// fix：bug 修复
// pref：性能, 体验优化
// refactor：重构代码(既没有新增功能，也没有修复 bug)
// style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
// test：新增测试用例或是更新现有测试
// revert：回滚某个更早之前的提交
// chore：不属于以上类型的其他类型

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      "build", "docs", "feat", "merge", "fix", "pref", "refactor", "style", "test", "revert", "chore"
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
