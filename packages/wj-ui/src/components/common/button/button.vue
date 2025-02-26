<template>
    <component
        :is="tagName"
        :class="classes"
        :disabled="disabled"
        @click="handleClickLink"
        v-bind="tagProps">
        <Icon class="wj-load-loop" type="ios-loading" v-if="loading" />
        <Icon
            :type="icon"
            :custom="customIcon"
            v-if="(icon || customIcon) && !loading" />
        <span v-if="showSlot">
            <slot></slot>
        </span>
    </component>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, onMounted, computed, useSlots, withDefaults } from 'vue-demi';
import { PREFIX_CLS } from '../../../utils/constant';
import Icon from '../icon';

// 定义 props 类型
const props = withDefaults(defineProps<{
    type?:
        | 'default'
        | 'primary'
        | 'dashed'
        | 'text'
        | 'info'
        | 'success'
        | 'warning'
        | 'error';
    shape?: 'circle' | 'circle-outline';
    size?: 'small' | 'large' | 'default';
    loading?: boolean;
    disabled?: boolean;
    htmlType?: 'button' | 'submit' | 'reset';
    icon?: string;
    customIcon?: string;
    long?: boolean;
    ghost?: boolean;
    to?: string;
    linkUrl?: string;
    target?: string;
}>(), {
    type: 'default',
    size: 'default',
});

// 定义 emits 类型
const emits = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

const prefixCls = `${PREFIX_CLS}btn`;
const showSlot = ref(true);

// 计算 classes
const classes = computed(() => {
    return [
        `${prefixCls}`,
        `${prefixCls}-${props.type}`,
        {
            [`${prefixCls}-long`]: props.long,
            [`${prefixCls}-${props.shape}`]: !!props.shape,
            [`${prefixCls}-${props.size}`]: props.size !== 'default',
            [`${prefixCls}-loading`]: props.loading != null && props.loading,
            [`${prefixCls}-icon-only`]:
                !showSlot.value &&
                (!!props.icon || !!props.customIcon || props.loading),
            [`${prefixCls}-ghost`]: props.ghost
        }
    ];
});

// 判断是否渲染为 <a> 标签
const isHrefPattern = computed(() => {
    return !!props.to;
});

// 计算 tagName
const tagName = computed(() => {
    return isHrefPattern.value ? 'a' : 'button';
});

// 计算 tagProps
const tagProps = computed(() => {
    if (isHrefPattern.value) {
        const { linkUrl, target } = props;
        return { href: linkUrl, target };
    } else {
        const { htmlType } = props;
        return { type: htmlType };
    }
});

// 处理点击事件
const handleClickLink = (event: MouseEvent) => {
    emits('click', event);
};

onMounted(() => {
    showSlot.value = !!useSlots().default;
});
</script>
