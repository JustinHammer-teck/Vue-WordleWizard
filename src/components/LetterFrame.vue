<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
  <div :class="{ 'bg-lime-500/70': isCrtPLace, 'bg-amber-400/75': isMissPlc, 'bg-sky-600/50': isWrong }" 
    class="col-span-1 flex items-center justify-center w-14 h-14 uppercase border-solid border-2 border-gray-700/25">
    <span class="text-2xl font-bold text-gray-100">{{ letterFrame.content }}</span>
  </div>
</template>


<style scoped>

</style>