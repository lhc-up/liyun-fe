<template>
    <div :class="classes">
        <div v-for="menu in menuList"
            @click="onclick(menu)"
            :key="menu.value"
            :class="`${prefixCls}-item`"
            :disabled="disabled"
            :draggable="!disabled && dragable">
            <div :class="`${prefixCls}-item-icon`" :style="{
                background: `url(${require(`@/assets/question_type_icon_${menu.value}.png`)}) no-repeat center / contain`,
            }"></div>
            <div :class="`${prefixCls}-item-text`">{{ QuestionNameMap[menu.value] }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { QuestionTypeEnum, QuestionNameMap } from '@/enums/question';
import { enumToObjList } from '@/utils/utils';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    dragable: {
        type: Boolean,
        default: true,
    },
    clickable: {
        type: Boolean,
        default: true,
    }
});

const prefixCls: string = 'wj-menu';
const classes = computed(() => {
    return [
        prefixCls,
        {
            [`${prefixCls}-disabled`]: false,
        }
    ]
});

const menuList: any[] = enumToObjList(QuestionTypeEnum);

const onclick = (menu) => {
    if (props.disabled || !props.clickable) return;
    console.log(menu)
    emit('on-click');
}

const emit = defineEmits(['on-click']);
// @todo 参数，支持题型配置，自定义icon
// @todo 添加拖拽事件
</script>