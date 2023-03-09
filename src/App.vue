<template>
  <div class="app">
    <LetterFrame :letterFrame="letterFrame" />
    <Keyboard />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import LetterFrame from './components/LetterFrame.vue';
import ILetterFrame from './types/ILetterFrame';
import LetterFrameState from './enums/LetterFrameState';
import Keyboard from './components/Keyboard.vue';

export default defineComponent({
  name: "App",
  components: { LetterFrame, Keyboard },
  setup() {
    const letterFrame = ref<ILetterFrame>({
      content: 'A',
      state: LetterFrameState.Wrong,
      disable: true
    });

    return { letterFrame }
  }
})
</script>



