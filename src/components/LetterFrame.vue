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

<template>
  <div class="col-span-1 flex items-center justify-center h-16 uppercase border-2 border-gray-200">
    <span class="text-2xl font-bold">{{ letterFrame.content }}</span>
  </div>
</template>


<style scoped>

</style>