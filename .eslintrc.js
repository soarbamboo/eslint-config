module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {  //指定要使用其他那些语言对象
            experimentalObjectRestSpread: true, //启用对对象的扩展
            jsx: true //启用jsx语法
        },
        sourceType: "module", //指定源代码存在的位置，script | module，默认为script。
        ecmaVersion: 6 //ES的版本，默认为5
    },
    rules: {
        // 0 = off, 1 = warn, 2 = error
        // 数组和对象键值对最后一个逗号 
        //never 参数：不能带末尾的逗号, always 参数：必须带末尾的逗号,always-multiline：多行模式必须带逗号，单行模式不能带逗号, only-multiline 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
        // const foo = require("foo") is valid  禁止使用var进行包导入
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/explicit-module-boundary-types": 1,
        // function params or object props (a: boolean = true) is valid
        "@typescript-eslint/no-inferrable-types": [
            1,
            {
                ignoreProperties: true,
                ignoreParameters: true,
            },
        ],
        // function {} is valid
        "@typescript-eslint/no-empty-function": [
            1,
            {
                allow: ["arrowFunctions"],
            },
        ],
        "@typescript-eslint/no-unused-vars": [1], //不能有声明后未被使用的变量或参数
        "@typescript-eslint/no-empty-interface": [
            1,
            {
                allowSingleExtends: true,
            },
        ],
        "@typescript-eslint/ban-types": [
            1,
            {
                types: {
                    Function: "Don't use Foo because it is unsafe",
                    String: {
                        message: "Use string instead",
                        fixWith: "string",
                    },
                },
            },
        ],
        "@typescript-eslint/no-explicit-any": [
            1,
            {
                ignoreRestArgs: true,
            },
        ],
        "indent": [ //缩进风格
            1,
            "tab",
            {
                SwitchCase: 1
            }
        ],
        "no-empty": [  //块语句中的内容不能为空
            1,
            {
                allowEmptyCatch: true //允许空catch子句
            }
        ],
        "comma-dangle": [1, "only-multiline"],
        "no-mixed-spaces-and-tabs": [0, false], // 禁止混用tab和空格
        "guard-for-in": 0, //for in循环要用if语句过滤
        "radix": [0, "as-needed"], //parseInt必须指定第二个参数
        "no-shadow": [ //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
            0,
            {
                builtinGlobals: false,
                hoist: "functions", //在定义外部函数之前报告
                allow: []
            }
        ],
        "space-after-keywords": [0, "always"],//关键字后面是否要空一格
        "no-unused-expressions": [ //禁止无用的表达式
            0,
            {
                allowShortCircuit: false,
                allowTernary: false
            }
        ],
        "quotes": [1, "double"],  // 引号类型 ”“
        "semi": [1, "always"], // 语句强制分号结尾
        "semi-spacing": [0, { "before": false, "after": true }],//分号前后空格
        "max-len": [  //字符串最大长度
            0,
            {
                code: 1000,
                tabWidth: 4,
                ignoreUrls: true
            }
        ],
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
        "no-class-assign": 2,//禁止给类赋值
        "no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-extra-bind": 2,//禁止不必要的函数绑定
        "no-extra-parens": 0,//禁止非必要的括号, 这个强制了会自动fix成  (vEnd as Date).toUTCString() => vEnd as Date.toUTCString() 逻辑不对了
        "no-extra-semi": 2,//禁止多余的分号
        "no-func-assign": 2,//禁止重复的函数声明
        "no-return-assign": 1,//return 语句中不能有赋值表达式
        "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
        "default-case": 1,//switch语句最后必须有default
        "eqeqeq": 2,//必须使用全等
        "no-console": 1,
        "no-alert": 1, //禁止使用alert confirm prompt
        "no-mixed-operators": 0, //表达式中连续使用不含运算符的不同运算符时发出警告
        "import/no-unresolved": 0,
        "react/sort-comp": [0],
        "react/no-multi-comp": [0],
        "react/no-string-refs": [0],
        "one-var": 0, //连续声明
        "one-var-declaration-per-line": 0, //变量连续声明换行
        "react/jsx-indent": 0,
        "react/prop-types": 0,
        "react/jsx-no-bind": 0,
        "jsx-a11y/anchor-has-content": 0,
        "react/prefer-stateless-function": 0,
        "jsx-a11y/img-has-alt": 0,
        "react/jsx-indent-props": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-new": 1, //禁止在使用new构造一个实例后不赋值
        "import/no-extraneous-dependencies": 0,
        "import/extensions": 0, // 取消对文件扩展名的验证
        "react/jsx-filename-extension": 0,
        "new-cap": 1, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        "arrow-parens": [2, "as-needed"], //箭头函数用小括号括起来
        "no-else-return": 1, //如果if语句里面有return,后面不能跟else语句
        "prefer-const": 1,//首选const
        "no-plusplus": [
            1,
            {
                allowForLoopAfterthoughts: true
            }
        ],
        "max-lines": [1, 500],
        "max-depth": [1, 4], //嵌套块深度
        "react/no-array-index-key": 0,
        "no-case-declarations": 0, //禁止词法声明（let，const，function和class在）case/default内
        "import/prefer-default-export": 0,
        "no-lonely-if": 1, //禁止else语句内只有if语句
        "no-script-url": 0, //禁止使用javascript:void(0)
        "no-confusing-arrow": 0,
        "no-param-reassign": 0, //禁止给参数重新赋值
        "no-underscore-dangle": 0, //标识符不能以_开头或结尾
        "jsx-a11y/label-has-for": 0,
        "react/no-unknown-property": 0,
        "object-curly-spacing": [1, "never"], //大括号内是否允许不必要的空格
        "class-methods-use-this": 0, //将不使用类的this的方法转换为静态方法
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0,
    },
}