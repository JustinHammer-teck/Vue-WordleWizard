<script setup lang="ts">

const props = defineProps({
    wordleGuessWords: {type: Array<string>, required: true},
})

const emit = defineEmits<{
    (event: 'guessWord', value: string): void,
}>()

const castHelperWord = (value : string) => {
    emit('guessWord', value);
}

</script>

<template>
    <div class="p-1">
        <span class="font-semibold text-zinc-300">
          Guess
        </span>
    </div>
    <div class="flex flex-wrap items-stretch justify-center max-h-96 overflow-auto overflow-x-hidden">
        <div class="px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold"
             @click="castHelperWord(value)" v-for="(value, index) in props.wordleGuessWords" :key="index">{{ value }}
        </div>
    </div>
</template>

<style scoped>

</style>