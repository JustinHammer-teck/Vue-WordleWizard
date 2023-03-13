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