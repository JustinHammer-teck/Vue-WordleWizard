<template>
    <div class="app">
      <div>
        
      </div>
      <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
        <div>
              <WordFrame v-for="(value, index) in stage.stageValue" :key=index  v-bind:letterFrames="value" />
            </div >
            <Keyboard @keyup.prevent="handleInput" @onKeyPress="handleInput"/>
        </div>
      </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import WordFrame from './components/WordFrame.vue';
import Keyboard from './components/Keyboard.vue';
import IWordleStage from './types/IWordleStage';
import LetterFrameState from './enums/LetterFrameState';

export default defineComponent({
  name: "App",
  components: { WordFrame, Keyboard },
  setup() {
    let stage: IWordleStage = reactive({
      "currentIndex": 0,
      "currentStage": {
        guesses: "CRANE",
        correctness: [
          LetterFrameState.Wrong,
          LetterFrameState.Wrong,
          LetterFrameState.Wrong,
          LetterFrameState.Wrong,
          LetterFrameState.Wrong
        ]
      },
      "stageValue": []
    });

    function handleInput(e: KeyboardEvent): void {
      let key: string = '';
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
        stage.stageValue.push(stage.currentStage);
        console.log(stage);
      } else if (key == "{bksp}") {
        stage.currentStage.guesses.slice(0, -1);
        stage.currentStage.correctness.slice(0, -1);
      } else if (stage.currentStage.guesses.length < 5) {
        alphaKeyHandler(key);
      }
    };

    function alphaKeyHandler(key: any): void {
      const alphaKeys = /[a-zA-Z]/;

      if (alphaKeys.test(key)) {
        console.log("pushed");
      }
    }

    // function processGuess(){

    // }

    return { stage, handleInput }
  }
})
</script>



