<template>
    <section class="editors-container">
        <h1>{{ editorName }} editor</h1>
        <component :is="currEditorName" />
    </section>
</template>

<script>
import textEditor from '@/cmps/editor/editors/text-editor.cmp.vue';
import sectionEditor from '@/cmps/editor/editors/section-editor.cmp.vue';
export default {
    name: 'editors-container',
    data() {
        return {
            currEditor: 'text',
        }
    },
    computed: {
        currEditorName() {
            return this.currEditor+'-editor';
        },
        editorName() {
            if(this.currEditor==='img') return 'Image';
            return this.currEditor;
        }
    },
    components: {
        textEditor,
        sectionEditor,
    }
}
</script>