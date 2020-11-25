<template>
    <section class="edit-btns">
        <h1>{{ controlsName }} editor</h1>
        <component :is="editorName" />
    </section>
</template>

<script>
import textControls from '@/cmps/editor/controls/text-controls.cmp.vue';
import sectionControls from '@/cmps/editor/controls/section-controls.cmp.vue';
import buttonControls from '@/cmps/editor/controls/button-controls.cmp.vue';
import imgControls from '@/cmps/editor/controls/img-controls.cmp.vue';
export default {
    name: 'add-btns',
    data() {
        return {
            currEditor: 'button',
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
            return this.currEditor + '-controls';
        },
        controlsName(){
            if(this.currEditor==='img') return 'Image';
            return this.currEditor;
        }
    },
    components: {
        textControls,
        sectionControls,
        buttonControls,
        imgControls
    }
}
</script>