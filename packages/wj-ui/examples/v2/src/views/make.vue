<template>
    <div class="make">
        <div class="menu">
            <Menu></Menu>
        </div>
    </div>
</template>
<script>
import { Menu } from 'liyun-wj-ui';
export default {
    name: 'make',
    data() {
        return {};
    },
    components: {
        Menu
    }
};
</script>
<style lang="less" scoped>
.make {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    .menu {
        width: 100px;
        padding: 10px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 6px;
    }
    .main {
        flex: 1;
        position: relative;
        background-color: #fff;
        border-radius: 6px;
    }
}
</style>
