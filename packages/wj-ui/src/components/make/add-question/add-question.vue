<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-header`">
            <span>单选题</span>
            <div :class="`${prefixCls}-header-btns`">
                <Button size="small" type="primary" ghost>切换题型</Button>
                <Button icon="md-close"></Button>
            </div>
        </div>
        <div :class="`${prefixCls}-main`">
            <SingleChoice></SingleChoice>
        </div>
        <div :class="`${prefixCls}-footer`">
            <Button @click="cancel">取消</Button>
            <Button @click="ok" type="primary">保存</Button>
            <Button @click="next" type="primary" ghost>保存并录入下一题</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PREFIX_CLS } from '../../../utils/constant';
import { SingleChoice } from '../question';
import Button from '../../common/button';
import Icon from '../../common/icon';

const prefixCls: string = `${PREFIX_CLS}add-question`;

const cancel = () => {
    console.log('cancel');
    close();
};
const ok = () => {
    console.log('ok');
};
const next = () => {
    console.log('next');
};
// 切换题型
const switchType = () => {
    console.log('switchType');
};
const close = () => {
    console.log('close');
};
const reset = () => {
    console.log('reset');
};
</script>