<script lang="ts">
import {defineComponent, ref, onMounted, defineEmits, watch} from 'vue';
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

        function OnKeyPress(button: any) {
            ctx.emit('onKeyPress', button);
            console.log("on press : " + button);
        }

        function OnChange(input: string) {
            if (input.length < 6) {
                ctx.emit('onChange', input);
            }
            console.log("on change : " + input);
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
                theme: "hg-theme-default",
                onChange: OnChange,
                onKeyPress: OnKeyPress
            });
        });

    }
})
</script>

<template>
    <div class="simple-keyboard"></div>
</template>