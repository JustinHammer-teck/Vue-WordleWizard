<template>
    <div class="app">
        <div>

        </div>
        <div class="flex flex-col h-max max-w-md mx-auto justify-evenly">
            <div>
                <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
                    <div v-for="(value,index) in wordGuessValue" :key="index"
                         class="col-span-1 flex items-center justify-center h-16 uppercase border-2 border-gray-200">
                        <span class="text-2xl font-bold">{{ value.content }}</span>
                    </div>
                </div>
            </div>
            <div>
                <WordFrame v-for="(value, index) in stage.stageValue" :key=index v-bind:letterFrames="value"/>
            </div>
            <Keyboard @keyup.prevent="handleInput"/>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref, onMounted, reactive, ComputedRef, computed} from 'vue';
import WordFrame from './components/WordFrame.vue';
import Keyboard from './components/Keyboard.vue';
import IWordleStage from './types/IWordleStage';
import LetterFrameState from './enums/LetterFrameState';
import ILetterFrame from "./types/ILetterFrame";

export default defineComponent({
    name: "App",
    components: {WordFrame, Keyboard},
    setup() {
        let stage: IWordleStage = reactive({
            "currentIndex": 0,
            "currentStage": {
                guess: "cran",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            },
            "stageValue": [{
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong,
                    LetterFrameState.Wrong
                ]
            }
            ]
        });
        let wordGuessValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let guessLetters: Array<string> = stage.currentStage.guess.split('');
            let result: Array<ILetterFrame> = guessLetters.map((x, i) => {
                return {
                    "content": x,
                    "state": stage.currentStage.correctness[i]
                }
            });

            return result;
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

            if (key == "{enter}" && stage.currentIndex < 6 && stage.currentStage.guess.length == 5) {
                stage.stageValue[stage.currentIndex] = stage.currentStage;
                stage.currentIndex++;
            } else if (key == "{bksp}" && stage.currentStage.guess.length > 0) {
                console.log(stage.currentStage.guess.slice(0, -1));
                stage.currentStage.guess = stage.currentStage.guess.slice(0, -1);
            } else if (stage.currentStage.guess.length < 5) {
                alphaKeyHandler(key);
            }
        }

        function alphaKeyHandler(key: any): void {
            const alphaKeys = /[a-zA-Z]/;

            if (alphaKeys.test(key)) {
                stage.currentStage.guess += key;
            }
        }

        onMounted(() => {
            window.addEventListener("keyup", (e) => {
                e.preventDefault();
                handleInput(e);
            });
        });

        return {stage, handleInput, wordGuessValue}
    }
})
</script>



