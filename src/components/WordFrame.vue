<script lang="ts">
import { PropType, defineComponent } from 'vue';
import LetterFrame from './LetterFrame.vue';
import ILetterFrame from '../types/ILetterFrame';

export default defineComponent({
    components: { LetterFrame },
    props: {
        values: {
            required: true,
            type: Object as PropType<Array<ILetterFrame>>
        },
    }, setup(props) {
        console.log(props.values);

        return {

        }
    }
})

</script>

<template>
    <div class="grid max-w-full grid-cols-5 gap-x-px mb-0.5 justify-end">
        <LetterFrame v-for="(value, index) in values" :key=index :letterFrame="value" />
    </div>
</template>    