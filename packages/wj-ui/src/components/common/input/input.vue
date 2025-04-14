<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
            <i class="wj-icon" :class="['wj-icon-ios-close-circle', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']" v-if="clearable && currentValue && !itemDisabled" @click="handleClear" :style="clearableStyles"></i>
            <i class="wj-icon" :class="['wj-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-else-if="icon" @click="handleIconClick"></i>
            <i class="wj-icon wj-icon-ios-search" :class="[prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-search-icon']" v-else-if="search && enterButton === false" @click="handleSearch"></i>
            <span class="wj-input-suffix" v-else-if="showSuffix"><slot name="suffix"><i class="wj-icon" :class="['wj-icon-' + suffix]" v-if="suffix"></i></slot></span>
            <span class="wj-input-word-count" v-else-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</span>
            <span class="wj-input-suffix" v-else-if="password" @click="handleToggleShowPassword">
                <i class="wj-icon wj-icon-ios-eye-outline" v-if="showPassword"></i>
                <i class="wj-icon wj-icon-ios-eye-off-outline" v-else></i>
            </span>
            <transition name="fade">
                <i class="wj-icon wj-icon-ios-loading wj-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
            </transition>
            <input
                :id="elementId"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="inputRef"
                :type="currentType"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="itemDisabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :number="number"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput"
                @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
            <div :class="[prefixCls + '-group-append', prefixCls + '-search']" v-else-if="search && enterButton" @click="handleSearch">
                <i class="wj-icon wj-icon-ios-search" v-if="enterButton === true"></i>
                <template v-else>{{ enterButton }}</template>
            </div>
            <span class="wj-input-prefix" v-else-if="showPrefix"><slot name="prefix"><i class="wj-icon" :class="['wj-icon-' + prefix]" v-if="prefix"></i></slot></span>
        </template>
        <template v-else>
            <textarea
                :id="elementId"
                :wrap="wrap"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="textareaRef"
                :class="textareaClasses"
                :style="textareaStyles"
                :placeholder="placeholder"
                :disabled="itemDisabled"
                :rows="rows"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput">
            </textarea>
            <span class="wj-input-word-count" v-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</span>
        </template>
    </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, onUpdated, defineProps, defineEmits } from 'vue';
import { oneOf, findComponentUpward } from '../../utils/assist';
import calcTextareaHeight from '../../utils/calcTextareaHeight';
import { PREFIX_CLS } from '../../../utils/constant';
import Emitter from '../../mixins/emitter';
import mixinsForm from '../../mixins/form';

const props = defineProps({
    type: {
        validator (value) {
            return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
        },
        default: 'text'
    },
    value: {
        type: [String, Number],
        default: ''
    },
    size: {
        validator (value) {
            return oneOf(value, ['small', 'large', 'default']);
        },
        default () {
            return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
        }
    },
    placeholder: {
        type: String,
        default: ''
    },
    maxlength: {
        type: [String, Number]
    },
    disabled: {
        type: Boolean,
        default: false
    },
    icon: String,
    autosize: {
        type: [Boolean, Object],
        default: false
    },
    rows: {
        type: Number,
        default: 2
    },
    readonly: {
        type: Boolean,
        default: false
    },
    name: {
        type: String
    },
    number: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    },
    spellcheck: {
        type: Boolean,
        default: false
    },
    autocomplete: {
        type: String,
        default: 'off'
    },
    clearable: {
        type: Boolean,
        default: false
    },
    elementId: {
        type: String
    },
    wrap: {
        validator (value) {
            return oneOf(value, ['hard', 'soft']);
        },
        default: 'soft'
    },
    prefix: {
        type: String,
        default: ''
    },
    suffix: {
        type: String,
        default: ''
    },
    search: {
        type: Boolean,
        default: false
    },
    enterButton: {
        type: [Boolean, String],
        default: false
    },
    // 4.0.0
    showWordLimit: {
        type: Boolean,
        default: false
    },
    // 4.0.0
    password: {
        type: Boolean,
        default: false
    },
    // 4.5.0
    border: {
        type: Boolean,
        default: true
    }
});

const emits = defineEmits([
    'on-enter',
    'on-keydown',
    'on-keypress',
    'on-keyup',
    'on-click',
    'on-focus',
    'on-blur',
    'input',
    'on-change',
    'on-input-change',
    'on-clear',
    'on-search'
]);

const prefixCls = `${PREFIX_CLS}input`;
const currentValue = ref(props.value);
const slotReady = ref(false);
const textareaStyles = ref({});
const isOnComposition = ref(false);
const showPassword = ref(false);
const clearableIconOffset = ref(0);
const inputRef = ref(null);
const textareaRef = ref(null);

const currentType = computed(() => {
    let type = props.type;
    if (type === 'password' && props.password && showPassword.value) type = 'text';
    return type;
});

const prepend = computed(() => {
    let state = false;
    if (props.type !== 'textarea') state = !!$slots.prepend;
    return state;
});

const append = computed(() => {
    let state = false;
    if (props.type !== 'textarea') state = !!$slots.append;
    return state;
});

const showPrefix = computed(() => {
    let state = false;
    if (props.type !== 'textarea') state = props.prefix !== '' || !!$slots.prefix;
    return state;
});

const showSuffix = computed(() => {
    let state = false;
    if (props.type !== 'textarea') state = props.suffix !== '' || !!$slots.suffix;
    return state;
});

const wrapClasses = computed(() => {
    return [
        `${prefixCls}-wrapper`,
        {
            [`${prefixCls}-wrapper-${props.size}`]: !!props.size,
            [`${prefixCls}-type-${props.type}`]: props.type,
            [`${prefixCls}-group`]: prepend.value || append.value || (props.search && props.enterButton),
            [`${prefixCls}-group-${props.size}`]: (prepend.value || append.value || (props.search && props.enterButton)) && !!props.size,
            [`${prefixCls}-group-with-prepend`]: prepend.value,
            [`${prefixCls}-group-with-append`]: append.value || (props.search && props.enterButton),
            [`${prefixCls}-hide-icon`]: append.value,  // #554
            [`${prefixCls}-with-search`]: (props.search && props.enterButton),
            [`${prefixCls}-wrapper-disabled`]: props.disabled // #685
        }
    ];
});

const inputClasses = computed(() => {
    return [
        `${prefixCls}`,
        {
            [`${prefixCls}-${props.size}`]: !!props.size,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-no-border`]: !props.border,
            [`${prefixCls}-with-prefix`]: showPrefix.value,
            [`${prefixCls}-with-suffix`]: showSuffix.value || (props.search && props.enterButton === false)
        }
    ];
});

const textareaClasses = computed(() => {
    return [
        `${prefixCls}`,
        {
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-no-border`]: !props.border
        }
    ];
});

const upperLimit = computed(() => {
    return props.maxlength;
});

const textLength = computed(() => {
    if (typeof props.value === 'number') {
        return String(props.value).length;
    }

    return (props.value || '').length;
});

const clearableStyles = computed(() => {
    const style = {};
    let offset = clearableIconOffset.value;
    if (offset) style.transform = `translateX(-${offset}px)`;
    return style;
});

const handleEnter = (event) => {
    emits('on-enter', event);
    if (props.search) emits('on-search', currentValue.value);
};

const handleKeydown = (event) => {
    emits('on-keydown', event);
};

const handleKeypress = (event) => {
    emits('on-keypress', event);
};

const handleKeyup = (event) => {
    emits('on-keyup', event);
};

const handleIconClick = (event) => {
    emits('on-click', event);
};

const handleFocus = (event) => {
    emits('on-focus', event);
};

const handleBlur = (event) => {
    emits('on-blur', event);
    if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        dispatch('FormItem', 'on-form-blur', currentValue.value);
    }
};

const handleComposition = (event) => {
    if (event.type === 'compositionstart') {
        isOnComposition.value = true;
    }
    if (event.type === 'compositionend') {
        isOnComposition.value = false;
        handleInput(event);
    }
};

const handleInput = (event) => {
    if (isOnComposition.value) return;

    let value = event.target.value;
    if (props.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
    emits('input', value);
    setCurrentValue(value);
    emits('on-change', event);
};

const handleChange = (event) => {
    emits('on-input-change', event);
};

const setCurrentValue = (value) => {
    if (value === currentValue.value) return;
    nextTick(() => {
        resizeTextarea();
    });
    currentValue.value = value;
    if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
        dispatch('FormItem', 'on-form-change', value);
    }
};

const resizeTextarea = () => {
    const autosize = props.autosize;
    if (!autosize || props.type !== 'textarea') {
        return false;
    }

    const minRows = autosize.minRows;
    const maxRows = autosize.maxRows;

    textareaStyles.value = calcTextareaHeight(textareaRef.value, minRows, maxRows);
};

const focus = (option) => {
    const $el = props.type === 'textarea' ? textareaRef.value : inputRef.value;
    $el.focus(option);
    const { cursor } = option || {};
    if (cursor) {
        const len = $el.value.length;

        switch (cursor) {
            case 'start':
                $el.setSelectionRange(0, 0);
                break;
            case 'end':
                $el.setSelectionRange(len, len);
                break;
            default:
                $el.setSelectionRange(0, len);
        }
    }
};

const blur = () => {
    if (props.type === 'textarea') {
        textareaRef.value.blur();
    } else {
        inputRef.value.blur();
    }
};

const handleClear = () => {
    const e = { target: { value: '' } };
    emits('input', '');
    setCurrentValue('');
    emits('on-change', e);
    emits('on-clear');
};

const handleSearch = () => {
    if (props.disabled) return false;
    inputRef.value.focus();
    emits('on-search', currentValue.value);
};

const handleToggleShowPassword = () => {
    if (props.disabled) return false;
    showPassword.value = !showPassword.value;
    focus();
    const len = currentValue.value.length;
    setTimeout(() => {
        inputRef.value.setSelectionRange(len, len);
    }, 0);
};

const handleCalcIconOffset = () => {
    const $el = $el.querySelectorAll('.wj-input-group-append')[0];
    if ($el) {
        clearableIconOffset.value = $el.offsetWidth;
    } else {
        clearableIconOffset.value = 0;
    }
};

watch(() => props.value, (val) => {
    setCurrentValue(val);
});

watch(() => props.type, () => {
    nextTick(handleCalcIconOffset);
});

onMounted(() => {
    slotReady.value = true;
    resizeTextarea();
    handleCalcIconOffset();
});

onUpdated(() => {
    nextTick(handleCalcIconOffset);
});
</script>
