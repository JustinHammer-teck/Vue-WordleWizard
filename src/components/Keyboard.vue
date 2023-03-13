<script lang="ts">
import { defineComponent, ref, onMounted, defineEmits } from 'vue';
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
            console.log(button);
        }

        function OnChange(input: string) {
            ctx.emit('onChange', input);
            console.log(input);
        }

        onMounted(() => {
            keyboard.value = new Keyboard(props.keyboardClass, {
                layout: {
                    default: [
                        "Q W E R T Y U I O P",
                        "A S D F G H J K L",
                        "{enter} Z X C V B N M {bksp}"
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