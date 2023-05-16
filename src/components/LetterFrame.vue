<script lang="ts">
import {defineComponent, PropType, toRef} from 'vue';
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
        const state = toRef(props.letterFrame, "state");


        let isCrtPLace = state.value === LetterFrameState.CorrectPlc;
        let isMissPlc = state.value === LetterFrameState.MissPlc;
        let isWrong = state.value === LetterFrameState.Wrong;

        return {
            props,
            isCrtPLace,
            isMissPlc,
            isWrong
        }
    }
})
</script>

<template>
        <div class="col-span-1 flex items-center justify-center h-14 uppercase border-2 border-zinc-700"
            :class="{ 'cursor-pointer': clickAble && props.letterFrame.content, 'bg-green-600': isCrtPLace, 'bg-amber-600': isMissPlc, 'bg-sky-600': isWrong }">
            <span class="text-2xl font-bold text-zinc-200">{{ letterFrame.content }}</span> 
    </div>
</template>


<style scoped>

</style>