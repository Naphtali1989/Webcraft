<template>
    <section class="editors-container">
        <h1>{{ editorName }} editor</h1>
        <component :is="currEditorName" :cmpToEdit="cmpToEdit" />
    </section>
</template>

<script>
import txtEditor from '@/cmps/editor/editors/txt-editor.cmp.vue';
import sectionEditor from '@/cmps/editor/editors/section-editor.cmp.vue';
export default {
    name: 'editors-container',
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    data() {
        return {
            currEditor: 'txt'
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
    created() {
        if(this.cmpToEdit) this.currEditor=this.cmpToEdit.type;
    },
    components: {
        txtEditor,
        sectionEditor,
    }
}
</script>