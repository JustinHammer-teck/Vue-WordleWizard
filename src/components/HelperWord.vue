<script setup lang="ts">
import {computed} from "vue";

let props = defineProps({
    helperWord: {type: String, required: true},
})

const emit = defineEmits<{
    (event: 'guessWord', value: string): void,
}>()

const castHelperWord = () => {
    emit('guessWord', props.helperWord);
}
</script>


<template>
    <div class="p-1">
        <span class="font-semibold text-zinc-300">
            Helper
        </span>
    </div>
    <div @click="castHelperWord"
         class="flex justify-center px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold">
        {{ props.helperWord }}
    </div>
</template>

<style scoped>

</style>