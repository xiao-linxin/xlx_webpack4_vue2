module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "no-multiple-empty-lines": 0, // 空行最多不能超过?行
    "no-tabs": "off", // allow async-await
    "generator-star-spacing": 0,  //生成器函数*的前后空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
    "space-before-function-paren": ["off", "always"], // 禁止重复 import
    'camelcase': 0, // 强制驼峰法命名
    'eol-last': 0, // 文件以单一的换行符结束
    "no-trailing-spaces": 0, // 一行结束后面不要有空格
    "padded-blocks": 0, // 块语句内行首行尾是否要空行
    "eqeqeq": 0, // 必须使用全等
    "quotes": [0, "single"], //引号类型 `` "" ''
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "indent": 0, //缩进风格
    "no-return-assign": 0,
  }
}
