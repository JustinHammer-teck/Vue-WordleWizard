<script lang="ts">
import {reactive, computed, PropType, defineComponent, ComputedRef} from 'vue';
import LetterFrame from './LetterFrame.vue';
import ILetterFrame from '../types/ILetterFrame';
import IWordGuess from '../types/IWordGuess';

export default defineComponent({
    components: {LetterFrame},
    props: {
        letterFrames: {
            required: true,
            type: Object as PropType<IWordGuess>
        },
    },
    setup(props) {
        let stage : IWordGuess = reactive({
            guess: props.letterFrames.guess,
            correctness: props.letterFrames.correctness
        })

        const letterFrameValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let guessLetters: Array<string> = stage.guess.split('');
            let result: Array<ILetterFrame> = guessLetters.map((x, i) => {
                return {
                    "content": x ,
                    "state": stage.correctness[i]
                }
            });

            return result;
        });

        return {
            stage,
            letterFrameValue
        }
    }
})


</script>

<template>
    <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
        <LetterFrame v-for="(value, index) in letterFrameValue" :key=index :letterFrame="value"/>
    </div>
</template>    