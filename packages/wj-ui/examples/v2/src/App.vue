<template>
<div class="page">
    <header>wj-ui</header>
    <main>
        <router-view></router-view>
    </main>
</div>
</template>
<script>
export default {
   name: 'app',
   data() {
       return {}
   },
   props: {
        firstRouter: {
            type: Object
        }
    },
    methods: {
        async init() {
            if (this.firstRouter.path !== '/' && this.firstRouter.name) {
                this.$router.replace(Object.assign({}, this.firstRouter));
            } else {
                this.$router.replace({ name: '/' });
            }
        }
    },
    mounted() {
        this.init();
    }
}
</script>
<style lang="less" scoped>
.page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f0f2f5;
}
header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    background-color: #fff;
    box-shadow:  0 1px 6px rgba(0, 0, 0, 0.2);
}
main {
    flex: 1;
    width: 100%;
    position: relative;
}
</style>