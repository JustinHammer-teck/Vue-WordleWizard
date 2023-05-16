<script lang="ts">
import {computed, PropType, defineComponent, ComputedRef} from 'vue';
import LetterFrame from './LetterFrame.vue';
import ILetterFrame from '../types/ILetterFrame';
import IWordGuess from '../types/IWordGuess';

export default defineComponent({
    components: {LetterFrame},
    props: {
        value: {
            required: true,
            type: Object as PropType<IWordGuess>
        },
    },
    setup(props) {
        const letterFrameValue: ComputedRef<Array<ILetterFrame>> = computed(() => {
            let result: Array<ILetterFrame> = props.value.correctness.map((x, i) => {
                return {
                    "content": props.value.guess[i],
                    "state": x == 3 ? 2 : x
                }
            });

            return result;
        });
        return {
            letterFrameValue
        }
    }
})
</script>

<template>
    <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
        <LetterFrame v-for="(value, index) in letterFrameValue" :key=index :clickAble="false" :letterFrame="value"/>
    </div>
</template>    