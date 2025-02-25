<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue-demi';
import { PREFIX_CLS } from '../../../utils/constant';

const prefixCls = `${PREFIX_CLS}group`;

// 定义 props 的类型
const props = defineProps<{
    size?: 'small' | 'large' | 'default';
    shape?: 'circle' | 'circle-outline';
    vertical?: boolean;
}>();

// 计算 classes
const classes = computed(() => {
    return [
        `${prefixCls}`,
        {
            [`${prefixCls}-${props.size}`]: props.size,
            [`${prefixCls}-${props.shape}`]: props.shape,
            [`${prefixCls}-vertical`]: props.vertical
        }
    ];
});
</script>
