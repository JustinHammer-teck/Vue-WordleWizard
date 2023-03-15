<template>
    <div class="app">
      <div>
        
      </div>
      <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
        <div>
          <WordFrame v-for="(guess, i) in stage.guesses" v-bind:values="letterFrames" />
        </div>
          <Keyboard @keyup.prevent="handleInput" />
        </div>
      </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import WordFrame from './components/WordFrame.vue';
import ILetterFrame from './types/ILetterFrame';
import LetterFrameState from './enums/LetterFrameState';
import Keyboard from './components/Keyboard.vue';

export default defineComponent({
  name: "App",
  components: { WordFrame, Keyboard },
  setup() {
    const stage = reactive({
      "guesses": [],
      "currentIndex": 0
    });

    const letterFrames = ref<Array<ILetterFrame>>([{
      content: 'C',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'R',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'A',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'N',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'E',
      state: LetterFrameState.Wrong,
      disable: true
    },
    ]);

    const handleInput = (e: any) => {
      let key: any = '';
      switch (e.key) {
        case "Backspace":
          key = "{bksp}";
          break;
        case "Enter":
          key = "{enter}";
          break;
        default:
          key = e.key;
          break;
      }

      if (key == "{enter}") {
        //Send to API 
      } else if (key == "{bksp}") {
        stage.guesses.slice(0, -1);
      } else if (stage.guesses.length < 5) {
        alphaKeyHandler(key);
      }
    };

    function alphaKeyHandler(key: any) {
      const alphaKeys = /[a-zA-Z]/;
      
      if(alphaKeys.test(key)){
        console.log(key);
      }
    }

    // function createGuess(guess: String, correctness: Array<LetterFrameState>){

    // }

    return { letterFrames, stage, handleInput }
  }
})
</script>



