<template>
    <div :class="prefixCls">
        <div v-for="menu in menuList"
            @click="onclick(menu)"
            @dragstart="onDragstart(menu, $event)"
            @dragend="onDragend"
            :key="menu.value"
            :class="`${prefixCls}-c`"
            :disabled="disabled"
            :draggable="!disabled && dragable">
            <div :class="[`${prefixCls}-c-icon`, `${prefixCls}-c-icon-${menu.value}`]"></div>
            <div :class="`${prefixCls}-c-text`">{{ QuestionNameMap[menu.value] }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { QuestionTypeEnum, QuestionNameMap } from '../../../enums/question';
import { enumToObjList } from '../../../utils/utils';
import { DragTypeEnum } from '../../../enums/event';
import { DRAG_DATA_KEY, PREFIX_CLS } from '../../../utils/constant';
// 类名前缀
const prefixCls: string = `${PREFIX_CLS}menu`;

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

const menuList: any[] = enumToObjList(QuestionTypeEnum);

const onclick = (menu) => {
    if (props.disabled || !props.clickable) return;
    console.log(menu)
    emit('on-click');
}

const onDragstart = (menu, e) => {
    if (props.disabled || !props.dragable) return;
    e.dataTransfer.setData(DRAG_DATA_KEY, JSON.stringify({
        type: DragTypeEnum.QuestionMenu,
        ...menu,
    }));
}
const onDragend = () => {
    if (props.disabled || !props.dragable) return;
}

const emit = defineEmits(['on-click']);
// @todo 参数，支持题型配置，自定义icon
// @todo 添加拖拽事件
</script>