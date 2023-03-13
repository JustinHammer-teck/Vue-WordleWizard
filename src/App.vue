<template>
  <main class="app bg-slate-900">
    <div class="flex max-w-xl mx-auto my-auto p-2 h-screen items-center justify-center min-h-screen">
      <div class="grid grid-rows-4 grid-cols-5 gap-3 w-full max-h-fit p-5">
        <div class="row-span-1 col-span-5 drop-shadow-xl ">
          <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-slate-800">
            <div class="p-1">
              <span class="font-semibold text-gray-200">                  
                Next Word To Play
              </span>
            </div>
          </div> 
        </div>
        <div class="row-span-2 col-span-2 drop-shadow-xl">
          <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-slate-800">
            <div class="p-1">
              <span class="font-semibold text-gray-200">                  
                Magic Wand
              </span>
            </div>

            <div class="p-1">
              <span class="font-semibold text-gray-200">                  
                Wordle Words
              </span>
            </div>

          </div>
        </div>
        <div class="row-span-2 col-span-3 max-h-fit drop-shadow-xl">
          <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-slate-800">
            <div class="p-1">
              <span class="font-semibold text-gray-200">                  
                Word Guesses
              </span>
            </div>
            <div class="flex flex-col h-fit mx-auto justify-around">
              <WordFrame v-for="(guess, i) in stage.guesses" v-bind:values="letterFrames" />
            </div>
          </div>
        </div>
        <div class="row-span-1 col-span-5 drop-shadow-xl">
          <div class="border-2 border-slate-700/25 rounded-lg p-1 bg-slate-800">
            <div class="p-1">
              <span class="font-semibold text-gray-200">                  
                Alpha 
              </span>
            </div>
            <Keyboard onKeyPress="handleInput" />
          </div>
        </div>
      </div>
    </div>
  </main>
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
      "guesses": ["", "", "", "", "", ""],
      "currentIndex": 0
    });

    const letterFrames = ref<Array<ILetterFrame>>([{
      content: 'C',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'R',
      state: LetterFrameState.MissPlc,
      disable: true
    }, {
      content: 'A',
      state: LetterFrameState.Wrong,
      disable: true
    }, {
      content: 'N',
      state: LetterFrameState.CorrectPlc,
      disable: true
    }, {
      content: 'E',
      state: LetterFrameState.Wrong,
      disable: true
    },
    ]);

    function handleInput(key: any) {
      console.log(key);
    }

    function createGuess(guess: String, correctness: Array<LetterFrameState>){

    }

    onMounted(() => {
      window.addEventListener("keyup", (e) => {
        e.preventDefault();
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
        handleInput(key);
      });
    });


    return { letterFrames, stage }
  }
})
</script>



