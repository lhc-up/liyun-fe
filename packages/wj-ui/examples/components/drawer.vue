<template>
    <div class="drawer">
        <div class="drawer-content">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.drawer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    background: rgba(0, 0, 0, 0.25);
    &-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        width: 70%;
        min-width: 900px;
        max-width: 1280px;
        background: #ffffff;
        -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }
}
</style>
