<template>
    <section class="text-editor">
        <div class="editor-link-container" v-if="showLink">
            <p class="editor-txt">Attach a link to this button:</p>
            <input type="text" placeholder="Insert a link" v-model="cmpToEdit.href" />
            <i class="fas fa-link"></i>
        </div>
        <my-select :options="fonts" @change="setFontFamily" />
        <p class="editor-txt">Font Size</p>
        <my-range :options="{ initVal: fontSize, min: 1, max: 72 }" @change="setFontSize" />
        <p class="editor-txt">Line Height</p>
        <my-range :options="{ initVal: +cmpToEdit.style.lineHeight, min: 1, max: 15 }" @change="setLineHeight" />
        <p class="editor-txt">Letter Spacing</p>
        <my-range :options="{ initVal:letterSpacing , min: 1, max: 30 }" @change="setLetterSpacing" />
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
            <button class="btn align-btn" @click="toggleTxtDecoration('underline')">
                <i class="fas fa-underline"></i>
            </button>
            <button class="btn align-btn" @click="toggleFontStyle('italic')">
                <i class="fas fa-italic"></i>
            </button>
            <button class="btn align-btn" @click="toggleFontStyle('bold')">
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

        }
    },
    methods: {
        setFontFamily(font) {
            this.cmpToEdit.style.fontFamily=font;
        },
        setFontSize(size) {
            this.cmpToEdit.style.fontSize=size+'px';
        },
        setLineHeight(size) {
            this.cmpToEdit.style.lineHeight=size;
        },
        setLetterSpacing(size) {
            this.cmpToEdit.style.letterSpacing=size+'px';
        },
        toggleTxtDecoration(decoration) {
            console.log('decoration:',decoration);
            //style object
            const { style }=this.cmpToEdit;
            const { textDecoration,fontStyle }=style;
            if(style.textDecoration===decoration) this.cmpToEdit.style.textDecoration='revert'
            else this.cmpToEdit.style.textDecoration=decoration
        },
        toggleFontStyle(txtStyle) {
            const { fontStyle }=this.cmpToEdit.style;
            if(fontStyle===txtStyle) this.cmpToEdit.style.fontStyle='revert'
            else this.cmpToEdit.style.fontStyle=fontStyle
            // if(fontStyle===decoration) this.cmpToEdit.style.fontStyle='revret'
            // else this.cmpToEdit.fontStyle=decoration
        }
    },
    computed: {
        showLink() {
            return this.cmpToEdit.type==='link'
        },
        fontSize() {
            const { fontSize }=this.cmpToEdit.style;
            return parseInt(fontSize,10);
        },
        letterSpacing() {
            const { letterSpacing }=this.cmpToEdit.style;
            return parseInt(letterSpacing,10);
        }
        // lineHeight() {
        //     const { lineHeight }=this.cmpToEdit.style;
        //     return parseInt(lineHeight,10);
        // },

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