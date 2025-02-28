<!--  by: hlwang 2018年11月08日
    name: 入口路由
    notes: 登录后根据路由进行分发
-->
<template>
    <div class="frameWrap">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: {
        firstRouter: {
            type: Object
        }
    },
    methods: {
        async init() {
            if (this.firstRouter.path !== '/' && this.firstRouter.name) {
                if (!this.hasMenuAuth(this.firstRouter, authList)) {
                    this.$router.replace({ name: '/index.html' });
                } else {
                    this.$router.replace(Object.assign({}, this.firstRouter));
                }
            } else {
                this.$router.replace({ name: '/index.html' });
            }
        }
    },
    mounted() {
        this.init();
    }
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
