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
                <WordFrame v-for="(value, index) in stage.stageValue" :key=index :value="value"/>
            </div>
            <Keyboard />
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
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            },
            "stageValue": [{
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }, {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            }
            ]
        });
        let wordGuessValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let result: Array<ILetterFrame> = stage.currentStage.correctness.map((x, i) => {
                return {
                    "content": stage.currentStage.guess[i],
                    "state": x
                }
            });
            return result;
        });

        function handleInput(key: string): void {
            if (key === "{enter}" && stage.currentIndex < 6 && stage.currentStage.guess.length == 5) {
                stage.stageValue[stage.currentIndex] = stage.currentStage;
                stage.currentIndex++;
                stage.currentStage = {
                    guess: "",
                    correctness: [
                        LetterFrameState.None,
                        LetterFrameState.None,
                        LetterFrameState.None,
                        LetterFrameState.None,
                        LetterFrameState.None
                    ]
                };
            } else if (key === "{bksp}" && stage.currentStage.guess.length > 0) {
                stage.currentStage.guess = stage.currentStage.guess.slice(0, -1);
            } else if (stage.currentStage.guess.length < 5) {
                const alphaKeys = /[a-zA-Z]/;

                if (alphaKeys.test(key)) {
                    stage.currentStage.guess += key;
                }
            }
        }

        onMounted(() => {
            window.addEventListener("keyup", (e) => {
                e.preventDefault();
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
                handleInput(key);
            });
        });

        return {stage, wordGuessValue}
    }
})
</script>



