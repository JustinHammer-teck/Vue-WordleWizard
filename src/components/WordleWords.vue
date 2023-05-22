<script setup lang="ts">
const props = defineProps({
    wordleGuessWords: {type: Array<string>, required: true},
})

</script>

<template>
    <div class="p-1">
        <span class="font-semibold text-zinc-300">
          Wordle Words
        </span>
    </div>
    <div class="flex flex-wrap items-stretch justify-center overflow-auto">
        <div class="px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold"
             v-for="(value, index) in props.wordleGuessWords" :key="index">{{ value }}
        </div>
    </div>
</template>

<style scoped>

</style>