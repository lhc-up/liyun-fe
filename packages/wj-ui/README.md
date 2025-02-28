- monorepo，turbo+pnpm
- npm scope
- npm私服
- 技术选型，vue3+ts+less+webpack+gulp
- 兼容vue2、vue3，使用vue-demi
- 组件库设计（参考antd、iview、element）
- 基础组件（使用大模型，把iview的语法转一下，不直接引入外部组件）
- 字体图标，一部分使用iview，另一部分使用iconfont图标
- 分包发布，引入本地包

## vue语法
**所有从vue引入的方法、对象，都改为从vue-demi引入**
**为保证此组件库兼容vue2、vue3，不允许使用外部组件库**


## 字体图标

## 多个版本依赖
pnpm add vue2@npm:vue@2.6 -D
pnpm add vue2.7@npm:vue@2.7 -D
pnpm add vue3@npm:vue@3 -D
pnpm add vue-loader2@npm:vue-loader@15 -D
pnpm add vue-loader3@npm:vue-loader@17 -D

- [x] 分别打包出v2和v3版本，使用方按需引入

- [x] 修改package.json，暴露v2、v3，方便使用时引入

导出类型？

- [x] 规整依赖

包名scope？

example工程


### v2.7项目中
`ModuleDependencyError: Can't import the named export 'getCurrentInstance' from non EcmaScript module (only default export is available):undefined`
在webpack配置文件中增加：
```js
{
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
        ],
    },
}
```

### 语法注意
- `Fragment、Transition、TransitionGroup、Teleport、Suspense、KeepAlive、hasInjectionContext` ???

#### 模版语法
- `v-model:value`