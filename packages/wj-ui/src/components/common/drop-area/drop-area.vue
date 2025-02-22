<template>
    <div
        :class="classes"
        @dragover.prevent="onDragover"
        @dragleave="onDragleave"
        @drop="onDrop"></div>
</template>
<script setup lang="ts">
import { computed } from 'vue-demi';
import { DRAG_DATA_KEY, PREFIX_CLS } from '../../../utils/constant';
import { ensureJson } from '../../../utils/utils';
// 类名前缀
const prefixCls: string = `${PREFIX_CLS}drop-area`;

const props = defineProps({
    disabled: Boolean,
    // 设置为绝对定位，尺寸为父元素的100%
    fixed: Boolean,
    // 获取拖拽传递的数据：const data = event.datatransfer.getData();
    // 取出数据的类型：const type = data.type;
    dataType: String,
});

const classes = computed(() => {
    return [
        prefixCls,
        {
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-fixed`]: props.fixed,
        }
    ]
});

const onDragover = () => {
    emit('on-dragover');
}
const onDragleave = () => {
    emit('on-dragleave');
}
const onDrop = e => {
    const str = e.dataTransfer.getData(DRAG_DATA_KEY);
    const data = ensureJson(str);
    if (data?.type == props.dataType) {
        emit('on-drop', data);   
    }
}

const emit = defineEmits(['on-dragover', 'on-dragleave', 'on-drop']);
</script>