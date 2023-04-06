<script lang="ts">
import { reactive, computed, PropType, defineComponent } from 'vue';
import LetterFrame from './LetterFrame.vue';
import ILetterFrame from '../types/ILetterFrame';
import IStage from '../types/IStage';
import LetterFrameState from '../enums/LetterFrameState';

export default defineComponent({
    components: { LetterFrame },
    props: {
        letterFrames: {
            required: true,
            type: Object as PropType<IStage>
        },
    },
    setup(props) {
        let stage = reactive({
            guesses: props.letterFrames.guesses,
            correctness: props.letterFrames.correctness
        })

        console.log(stage);
        const letterFrames = computed(() => {
            var guessLetters: Array<string> = stage.guesses.split('');
            var result : Array<ILetterFrame> = guessLetters.map((x, i) => {
                return {
                    "content": x,
                    "state": stage.correctness[i]
                }
            });

            return result;
        });

        return {
            stage,
            letterFrames
        }
    }
})


</script>

<template>
        <div class="grid max-w-xs grid-cols-5 gap-1 mx-auto mb-1">
            <LetterFrame v-for="(value, index) in letterFrames" :key=index :letterFrame="value" />
    </div>
</template>    