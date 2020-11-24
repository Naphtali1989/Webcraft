<template>
    <section class="edit-btns">
        <h1>{{ currEditor }} editor</h1>
        <component :is="editorName" />
    </section>
</template>

<script>
import textEditor from '@/cmps/editor/text-editor.cmp.vue'
export default {
    name: 'add-btns',
    data() {
        return {
            currEditor: 'text',
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
            return this.currEditor + '-editor'
        }
    },
    components: {
        textEditor
    }
}
</script>