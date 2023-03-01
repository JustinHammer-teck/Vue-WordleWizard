<template>
  <div class="w-10 h-10 max-w-10 max-h-10 flex justify-center items-center pointer-events-auto border border-slate-400 " >
    <span class="text-center text-xl font-bold mb-px">{{ letterFrame.content }}</span>
  </div>
</template>

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

      return {
      }
    }
})
</script>

<style scoped>

</style>