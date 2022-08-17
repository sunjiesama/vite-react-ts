module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 使用单引号
  singleQuote: true,
  // 行尾不需要分号
  semi: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 末尾需要有逗号
  trailingComma: 'all',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  plugins: [require.resolve('prettier-plugin-jsdoc')],
  // 开启tsdoc支持
  tsdoc: true,
  // 代码块使用反引号包裹
  jsdocPreferCodeFences: true,
  // 禁用首字母大写
  jsdocCapitalizeDescription: false,
}
