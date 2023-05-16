<script lang="ts">
import {defineComponent, onMounted, reactive} from 'vue';
import WordFrame from './components/WordFrame.vue';
import Keyboard from './components/Keyboard.vue';
import IWordleStage from './types/IWordleStage';
import LetterFrameState from './enums/LetterFrameState';
import NextWord from "./components/NextWord.vue";

export default defineComponent({
    name: "App",
    components: {WordFrame, NextWord, Keyboard},
    setup() {
        let stage: IWordleStage = reactive<IWordleStage>({
            currentIndex: 0,
            currentStage: {
                guess: "",
                correctness: [
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None,
                    LetterFrameState.None
                ]
            },
            stageValue: [{
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

        function handleInput(key: string): void {
            if (key == "{enter}") {
                if (stage.currentStage.guess.length < 5) {
                    return;
                }
                if (stage.currentStage.guess.length == 5) {
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
                }
            } else if (key === "{bksp}") {
                stage.currentStage.guess = stage.currentStage.guess.slice(0, -1);
                let stateIndex = stage.currentStage.guess.length === 0 ? 0 : stage.currentStage.guess.length;
                stage.currentStage.correctness[stateIndex] = LetterFrameState.None;
            } else if (stage.currentStage.guess.length < 5) {
                const alphaKeys = /[a-zA-Z]/;

                if (alphaKeys.test(key)) {
                    stage.currentStage.guess += key;
                }
            }
        }

        const updateState = (newStateIndex: number) => {
            if (stage.currentStage.correctness[newStateIndex] < 3) {
                stage.currentStage.correctness[newStateIndex] = stage.currentStage.correctness[newStateIndex] + 1;
            } else if (stage.currentStage.correctness[newStateIndex] == 3) {
                stage.currentStage.correctness[newStateIndex] = 0;
            }
        }

        onMounted(() => {
            window.addEventListener("keyup", (e) => {
                e.preventDefault();
                let key: string = "";
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

        return {stage, updateState, handleInput}
    }
})
</script>

<template>
    <div class="app bg-zinc-900 h-screen">
        <header class="bg-zinc-800">
            <nav class="mx-auto flex max-w-7xl justify-center p-4 " aria-label="Global">
                <div class="font-semibold text-zinc-300 text-2xl">WORDLE VVIZARD</div>
            </nav>
        </header>
        <div class="flex flex-col h-auto max-w-xl mx-auto justify-evenly items-center">
            <div class="grid grid-rows-4 grid-cols-5 gap-3 w-full max-h-fit p-5">
                <div class="row-span-3 col-span-2 drop-shadow-xl h-16">
                    <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-zinc-900">
                        <div class="p-1">
                            <span class="font-semibold text-zinc-300">
                              Wordle Helper
                            </span>
                        </div>
                        <div class="p-1">
                            <span class="font-semibold text-zinc-300">
                              Wordle Words
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row-span-1 col-end-6 col-span-3  drop-shadow-xl ">
                    <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-zinc-900">
                        <NextWord @newStateIndex="updateState" :values="stage.currentStage"/>
                    </div>
                </div>
                <div class="row-span-2 col-span-3 max-h-fit drop-shadow-xl">
                    <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-zinc-900">
                        <WordFrame v-for="(value, index) in stage.stageValue" :key=index :value="value"/>
                    </div>
                </div>
                <div class="row-span-1 col-span-5 drop-shadow-xl">
                    <div class="border-2 border-slate-700/25 rounded-lg p-1 bg-zinc-900">
                        <Keyboard @OnKeyPress="handleInput" :input="stage.currentStage.guess"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

