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