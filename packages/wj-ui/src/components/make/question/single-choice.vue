<template>
    <div :class="classes">
        <div :class="`${prefixCls}-row`">
            <div class="w-1/3">
                <span>题号：</span>
                <input placeholder="请输入题号" />
            </div>
            <div class="w-1/3">
                <span>每行显示列数：</span>
                <input placeholder="请输入题号" />
            </div>
            <div class="w-1/3">
                <span>必填：</span>
                <input placeholder="请输入题号" />
            </div>
        </div>
    </div>
    <!-- header组件封装？ -->
</template>
<script setup lang="ts">
import { computed } from 'vue-demi';
import { PREFIX_CLS } from '../../../utils/constant';

const prefixCls: string = `${PREFIX_CLS}question`;
const classes = computed(() => {
    return [
        prefixCls,
        `${prefixCls}-single-choice`,
    ]
});
</script>