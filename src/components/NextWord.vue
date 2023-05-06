<script lang="ts">
import {PropType, defineComponent, reactive, ComputedRef, computed} from 'vue';
import LetterFrame from './LetterFrame.vue';
import ILetterFrame from '../types/ILetterFrame';
import IWordGuess from "../types/IWordGuess";

export default defineComponent({
    components: {LetterFrame},
    props: {
        values: {
            required: true,
            type: Object as PropType<IWordGuess>
        },
    }, setup(props) {
        let wordGuess = reactive({
            guesses: props.values.guess,
            correctness: props.values.correctness
        })

        const wordGuessValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let guessLetters: Array<string> = wordGuess.guesses.split('');
            let result: Array<ILetterFrame> = guessLetters.map((x, i) => {
                return {
                    "content": x,
                    "state": wordGuess.correctness[i]
                }
            });

            return result;
        });

        return {wordGuessValue}
    }
})

</script>
<template>
    <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
        <LetterFrame v-for="(value, index) in wordGuessValue" :key=index :letterFrame="value"/>
    </div>
</template>