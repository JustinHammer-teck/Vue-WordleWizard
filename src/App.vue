<script lang="ts">
import {defineComponent, onBeforeMount, onMounted, reactive} from 'vue';
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
            }]
        });

        const startWords = ["notes",
            "resin",
            "tares",
            "senor",
            "aloft",
            "clear",
            "guilt",
            "crane",
            "train",
            "slant",
            "crate",
            "trace",
            "print",
            "trice",
            "leant",
            "slate",
            "crone",
            "plant",
            "blast",
            "plate",
            "plant",
            "blast",
            "plate"];


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

        onBeforeMount(() => {
            //TODO: call api to render start word
        });

        return {stage, updateState, handleInput, startWords}
    }
})
</script>

<template>
    <div class="app bg-zinc-900 h-screen">
        <header class="w-full bg-zinc-800">
            <nav class="flex flex-col flex-wrap justify-between items-center p-4 mx-auto md:flex-row"
                 aria-label="Global">
                <div>
                    <a href="https://github.com/JustinHammer-teck/" target="_blank" rel="noreferrer">
                        <img src="https://github.com/JustinHammer-teck.png" style="border-radius: 50%;" width="40"
                             height="40" alt="github-image">
                    </a>
                </div>
                <div class="font-semibold text-zinc-300 text-2xl">WORDLE VVIZARD</div>
                <div>
                    <a href="https://github.com/JustinHammer-teck/Vue-WordleWizard" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                             width="30" height="25" alt="github logo"/>
                    </a>
                </div>
            </nav>
        </header>
        <div class="flex flex-col h-auto max-w-xl mx-auto justify-evenly items-center">
            <div class="grid grid-rows-4 grid-cols-5 gap-3 w-full max-h-fit p-5">
                <div class="row-span-3 col-span-2 drop-shadow-xl h-4/5 ">
                    <div class="border-2 border-slate-700/25 rounded-lg p-2 bg-zinc-900">
                        <div class="p-1">
                            <span class="font-semibold text-zinc-300">
                              Wordle Helper
                            </span>
                            <div class="flex justify-center px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold">
                                crane
                            </div>
                        </div>
                        <div class="p-1">
                            <span class="font-semibold text-zinc-300">
                              Wordle Words
                            </span>
                        </div>
                        <div class="flex flex-wrap items-stretch justify-center overflow-auto">
                            <div class="px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold"
                                 v-for="(value, index) in startWords" :key="index">{{ value }}
                            </div>
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
                <div class="row-span-1 col-span-5 drop-shadow-xl ">
                    <div class="border-2 border-slate-700/25 rounded-lg p-1 bg-zinc-900">
                        <Keyboard @OnKeyPress="handleInput" :input="stage.currentStage.guess"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

