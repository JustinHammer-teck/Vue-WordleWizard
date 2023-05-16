<script lang="ts">
import {computed, defineComponent, PropType} from 'vue';
import LetterFrameState from '../enums/LetterFrameState';
import ILetterFrame from '../types/ILetterFrame';

export default defineComponent({
    props: {
        clickAble: {
            required: true,
            type: Boolean
        },
        letterFrame: {
            required: true,
            type: Object as PropType<ILetterFrame>
        }
    },
    setup(props) {
        let isCrtPLace = computed(() => {
            return props.letterFrame.state === LetterFrameState.CorrectPlc
        });
        let isMissPlc = computed(() => {
            return props.letterFrame.state === LetterFrameState.MissPlc
        });
        let isWrong = computed(() => {
            return props.letterFrame.state === LetterFrameState.Wrong
        });

        return {
            props,
            isCrtPLace,
            isMissPlc,
            isWrong,
        }
    },
})
</script>

<template>
    <div class="col-span-1 flex items-center justify-center h-14 uppercase border-2 border-zinc-700"
         :class="{ 'cursor-pointer': clickAble && props.letterFrame.content, 'bg-green-600': isCrtPLace, 'bg-amber-600': isMissPlc, 'bg-sky-600': isWrong }">
        <span class="text-2xl font-bold text-zinc-200">{{ letterFrame.content }}</span>
    </div>
</template>
