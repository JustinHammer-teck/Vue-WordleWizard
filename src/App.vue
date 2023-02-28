<template>
  <div class="app">
    <LetterFrame :letterFrame="data" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import LetterFrame from './components/LetterFrame.vue';
import ILetterFrame from './types/ILetterFrame';
  export default defineComponent({
    name: "App",
    components: { LetterFrame },
    data: () =>  {
      return {
        data: {} as ILetterFrame,
      }
    }
  })
</script>



