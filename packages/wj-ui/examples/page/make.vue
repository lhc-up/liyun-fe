<template>
    <div class="make">
        <div class="menu">
            <Menu></Menu>
        </div>
        <div class="main"></div>
    </div>
</template>
<script setup lang="ts">
import { Menu } from '@liyun/wj-ui';
</script>
<style lang="less" scoped>
.make {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    background-color: #cdcdcd;
    .menu {
        width: 100px;
        padding: 10px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 6px;
    }
    .main {
        flex: 1;
        background-color: #fff;
        border-radius: 6px;
    }
}
</style>