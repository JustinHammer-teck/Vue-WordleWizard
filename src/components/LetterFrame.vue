<script lang="ts">
import {defineComponent, PropType} from 'vue';
import LetterFrameState from '../enums/LetterFrameState';
import ILetterFrame from '../types/ILetterFrame';

export default defineComponent({
    props: {
        letterFrame: {
            required: true,
            type: Object as PropType<ILetterFrame>
        }
    },
    setup(props) {
        let isCrtPLace = props.letterFrame.state === LetterFrameState.CorrectPlc;
        let isMissPlc = props.letterFrame.state === LetterFrameState.MissPlc;
        let isWrong = props.letterFrame.state === LetterFrameState.Wrong;

        return {
            isCrtPLace,
            isMissPlc,
            isWrong
        }
    }
})
</script>

<template>
    <div class="col-span-1 flex items-center justify-center h-14 uppercase border-2 border-gray-200"
         :class="{ 'bg-green-600': isCrtPLace, 'bg-amber-600': isMissPlc, 'bg-sky-600': isWrong }">
        <span class="text-2xl font-bold text-gray-200">{{ letterFrame.content }}</span>
    </div>
</template>


<style scoped>

</style>