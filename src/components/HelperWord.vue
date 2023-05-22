<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    helperWord: {type: String, required: true},
})

function castHelperWord() {
    props.helperWord.value = computed(() => {

    });
}
</script>

<template>
    <div class="p-1">
        <span class="font-semibold text-zinc-300">
          Wordle Helper
        </span>
    </div>
    <div @click="castHelperWord"
         class="flex justify-center px-4 py-3 cursor-pointer text-zinc-300 text-xl font-semibold">
        {{ props.helperWord }}
    </div>
</template>

<style scoped>

</style>