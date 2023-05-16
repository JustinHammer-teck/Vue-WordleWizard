<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default defineComponent({
    props: {
        keyboardClass: {
            default: "simple-keyboard",
            type: String
        },
        input: {
            type: String
        }
    },
    setup(props, ctx) {
        const keyboard = ref<Keyboard>();

        function OnKeyPress(button: string) {
            ctx.emit('OnKeyPress', button);
        }

        onMounted(() => {
            keyboard.value = new Keyboard(props.keyboardClass, {
                layout: {
                    default: [
                        "q w e r t y u i o p",
                        "a s d f g h j k l",
                        "{enter} z x c v b n m {bksp}"
                    ]
                },
                theme: "hg-theme-default myTheme1",
                onKeyPress: OnKeyPress
            });
        });

    }, emits : ["OnKeyPress"]
})
</script>

<style scoped>

</style>

<template>
    <div class="simple-keyboard"></div>
</template>