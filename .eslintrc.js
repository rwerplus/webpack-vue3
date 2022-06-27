module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'prettier/prettier': 'off',

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    /**
     * 代码中可能的错误或逻辑错误
     */
    'no-cond-assign': ['error', 'always'], // 禁止条件表达式中出现赋值操作符
    'no-constant-condition': ['error', { checkLoops: true }], // 禁止在条件中使用常量表达式
    'no-control-regex': ['error'], // 禁止在正则表达式中使用控制字符
    'no-dupe-args': ['error'], // 禁止 function 定义中出现重名参数
    'no-dupe-keys': ['error'], // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': ['error'], // 禁止出现重复的 case 标签
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止出现空语句块
    'no-empty-character-class': ['error'], // 禁止在正则表达式中使用空字符集
    'no-ex-assign': ['error'], // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': ['error'], // 禁止不必要的布尔转换
    'no-extra-semi': ['error'], // 禁止不必要的分号
    'no-func-assign': ['warn'], // 禁止对 function 声明重新赋值
    'no-inner-declarations': ['error'], // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }], // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': ['error'], // 禁止在字符串和注释之外不规则的空白
    'no-obj-calls': ['error'], // 禁止把全局对象作为函数调用
    'no-regex-spaces': ['error'], // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': ['error'], // 禁用稀疏数组
    'no-unexpected-multiline': ['error'], // 禁止出现令人困惑的多行表达式
    'no-unsafe-finally': ['error'], // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': ['error'], // 禁止对关系运算符的左操作数使用否定操作符
    'use-isnan': ['error'], // 要求使用 isNaN() 检查 NaN
    semi: 'off',
    'no-trailing-spaces': ['off'],
    'space-before-function-paren': ['off'],
    'comma-dangle': 'off',

    /**
     * 最佳实践
     */
    'default-case': ['error'], // 要求 switch 语句中有 default 分支
    'dot-notation': ['error'], // 强制尽可能地使用点号
    eqeqeq: ['warn'], // 要求使用 === 和 !==
    'no-caller': ['error'], // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': ['error'], // 不允许在 case 子句中使用词法声明
    'no-empty-function': ['error'], // 禁止出现空函数
    'no-empty-pattern': ['error'], // 禁止使用空解构模式
    'no-eval': ['error'], // 禁用 eval()
    'no-global-assign': ['error'], // 禁止对原生对象或只读的全局对象进行赋值
    'no-redeclare': ['error', { builtinGlobals: true }], // 禁止重新声明变量
    'no-self-assign': ['error', { props: true }], // 禁止自我赋值
    'no-unused-labels': ['error'], // 禁用出现未使用过的标
    'no-useless-escape': ['error'], // 禁用不必要的转义字符
    radix: ['error'], // 强制在parseInt()使用基数参数

    /**
     * 变量声明
     */
    'no-delete-var': ['error'], // 禁止删除变量
    'no-undef': ['error'], // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-unused-vars': ['error'], // 禁止出现未使用过的变量
    'no-use-before-define': ['error'], // 禁止在变量定义之前使用它们

    /**
     * ECMAScript 6
     */
    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用一致的空格
    'no-var': ['error'], // 要求使用 let 或 const 而不是 var
    'object-shorthand': ['error', 'always'], // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }] // 要求回调函数使用箭头函数
  }
}
