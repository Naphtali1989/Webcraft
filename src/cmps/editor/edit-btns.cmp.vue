<template>
    <section class="edit-btns">
        <h1>{{ currEditor }} editor</h1>
        <component :is="editorName" />
    </section>
</template>

<script>
import textControls from '@/cmps/editor/controls/text-controls.cmp.vue'
import sectionControls from '@/cmps/editor/controls/section-controls.cmp.vue'
export default {
    name: 'add-btns',
    data() {
        return {
            currEditor: 'section',
            editors: [
                'text',
                'section',
                'img',
                'button'
            ]
        }
    },
    computed: {
        editorName() {
            return this.currEditor + '-controls'
        }
    },
    components: {
        textControls,
        sectionControls
    }
}
</script>