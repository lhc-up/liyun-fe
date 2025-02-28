<!--  by: hlwang 2018年11月08日
    name: 入口路由
    notes: 登录后根据路由进行分发
-->
<template>
    <div class="frameWrap">
        <router-link :to="{ name: '/make.html' }">出题</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    
};
</script>
<style lang="less">
@import '~@/libs/css/theme/theme.less';
.frameWrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
