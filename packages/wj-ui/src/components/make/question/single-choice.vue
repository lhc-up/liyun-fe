<template>
    <div :class="classes">单选题</div>
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