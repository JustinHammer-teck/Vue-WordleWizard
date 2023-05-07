<script lang="ts">
import {PropType, defineComponent, ComputedRef, computed} from 'vue';
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
        let wordGuessValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let result: Array<ILetterFrame> = props.values.correctness.map((x, i) => {
                return {
                    "content": props.values.guess[i],
                    "state": x
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