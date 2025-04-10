<template>
    <div :class="classes">
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label for="questionTitle">题目</label>
                    <input type="text" class="form-control" id="questionTitle" placeholder="请输入题目">
                </div>
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