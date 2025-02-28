<template>
    <div class="make">
        <div class="menu">
            <Menu></Menu>
        </div>
        <div class="main">
            <DropArea fixed>
                <!-- 单题预览 -->
                <!-- 多题预览，支持拖拽排序、插入 -->
            </DropArea>
        </div>
        <!-- 出题抽屉 -->
        <Drawer>
            <AddQuestion></AddQuestion>
        </Drawer>
    </div>
</template>
<script setup lang="ts">
import { Menu, DropArea, AddQuestion } from '@liyun/wj-ui';
import Drawer from '../components/drawer.vue';
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