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
.simple-keyboard.myTheme1 {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}

.simple-keyboard.myTheme1 .hg-button {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5) !important;
    color: rgba(0, 0, 0, 0.4);
}

.simple-keyboard.myTheme1 .hg-button:active {
    background: #1c4995;
    color: white;
}

#root .simple-keyboard.myTheme1 + .simple-keyboard-preview {
    background: #1c4995;
}
</style>

<template>
    <div class="simple-keyboard"></div>
</template>