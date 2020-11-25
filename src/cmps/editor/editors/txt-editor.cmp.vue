<template>
    <section class="text-editor">
        <div class="editor-link-container" v-if="showLink">
            <p class="editor-txt">Attach a link to this button:</p>
            <input type="text" placeholder="Insert a link" v-model="cmpToEdit.href" />
            <i class="fas fa-link"></i>
        </div>
        <my-select :options="fonts" />
        <p class="editor-txt">Font Size</p>
        <my-range :options="{ initVal: 16, min: 1, max: 72 }" />
        <p class="editor-txt">Line Height</p>
        <my-range :options="{ initVal: 4, min: 1, max: 15 }" />
        <p class="editor-txt">Letter Spacing</p>
        <my-range :options="{ initVal: 10, min: 1, max: 30 }" />
        <div class="align-controls">
            <button class="btn align-btn">
                <i class="fas fa-align-left"></i>
            </button>
            <button class="btn align-btn">
                <i class="fas fa-align-center"></i>
            </button>
            <button class="btn align-btn">
                <i class="fas fa-align-right"></i>
            </button>
        </div>
        <div class="decoration-controls">
            <button class="btn align-btn">
                <i class="fas fa-underline"></i>
            </button>
            <button class="btn align-btn">
                <i class="fas fa-italic"></i>
            </button>
            <button class="btn align-btn">
                <i class="fas fa-bold"></i>
            </button>
        </div>
        <p class="editor-txt">Background Color</p>
        <color-picker />
    </section>
</template>

<script>
import mySelect from '@/cmps/custum-cmps/my-select.cmp.vue';
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import colorPicker from '@/cmps/editor/color-picker.cmp.vue';
export default {
    props: {
        cmpToEdit: {
            type: Object
        }
    },
    name: 'text-editor',
    data() {
        return {
            fonts: [{
                label: 'Arial',
                value: 'Arial'
            },{
                label: 'Helvetica',
                value: 'Helvetica'
            },{
                label: 'Georgia',
                value: 'Georgia'
            },{
                label: 'Monospace',
                value: 'Monospace'
            },{
                label: 'Cursive',
                value: 'Cursive'
            },],
            // cmp: null
        }
    },
    computed: {
        showLink() {
            return this.cmpToEdit.type==='link'
        }
    },
    // created() {
    //     this.cmp=this.cmpToEdit;
    // },
    components: {
        mySelect,
        myRange,
        colorPicker
    }
}
</script>