<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed, withDefaults } from 'vue-demi';
import { PREFIX_CLS } from '../../../utils/constant';

const prefixCls = `${PREFIX_CLS}icon`;

// 定义 props 的类型
const props = withDefaults(defineProps<{
    type?: string;
    size?: number | string;
    color?: string;
    custom?: string;
}>(), {
    custom: '',
});

// 定义 emits 的类型
const emits = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

// 计算 classes
const classes = computed(() => {
    return [
        `${prefixCls}`,
        {
            [`${prefixCls}-${props.type}`]: props.type !== '',
            [`${props.custom}`]: props.custom !== ''
        }
    ];
});

// 计算 styles
const styles = computed(() => {
    const style: Record<string, string> = {};
    if (props.size) {
        style['font-size'] = `${props.size}px`;
    }
    if (props.color) {
        style.color = props.color;
    }
    return style;
});

// 处理点击事件
const handleClick = (event: MouseEvent) => {
    emits('click', event);
};
</script>