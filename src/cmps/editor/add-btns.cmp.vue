<template>
    <section class="add-btns">
        <h1>This is add mode</h1>
        <div class="element-picker-container" v-if="!selectedElem">
            <button v-for="elem in elements" :key="elem" @click="togglePicker(elem)">
                {{elem}}
            </button>
        </div>
        <keep-alive>

            <component :is="selectedElem" v-if="selectedElem">
                <slot><span><i class="fas fa-arrow-left" @click="selectedElem = ''"></i></span></slot>
            </component>
        </keep-alive>
    </section>
</template>

<script>
import footerPicker from '@/cmps/editor/pickers/footer-picker.cmp.vue';
import headerPicker from '@/cmps/editor/pickers/header-picker.cmp.vue';
import textPicker from '@/cmps/editor/pickers/text-picker.cmp.vue';
import cardsPicker from '@/cmps/editor/pickers/cards-picker.cmp.vue';
import formPicker from '@/cmps/editor/pickers/form-picker.cmp.vue';
import galleryPicker from '@/cmps/editor/pickers/gallery-picker.cmp.vue';
import videoPicker from '@/cmps/editor/pickers/video-picker.cmp.vue';
import mapPicker from '@/cmps/editor/pickers/map-picker.cmp.vue';

export default {
    name: 'edit-btns',
    data() {
        return {
            elements: ['header','cards','footer','text','form','gallery','map','video'],
            selectedElem: ''
        }
    },
    methods: {
        togglePicker(elem) {
            console.log('picked:',elem);
            this.selectedElem=elem+'-picker';
        }
    },
    computed: {
        currPicker() {
            return this.selectedElem;
        }
    },
    components: {
        headerPicker,
        footerPicker,
        textPicker,
        cardsPicker,
        formPicker,
        galleryPicker,
        mapPicker,
        videoPicker
    }
}
</script>

<style lang="scss">
.element-picker-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 100px);
    justify-content: center;
    button {
        font-family: cursive;
        padding: 0.5rem 1rem;
        background: transparent;
        border: 0;
        outline: 0;
        text-transform: uppercase;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);
        background-color: hsla(0, 0%, 100%, 0.67);
        text-align: center;
        transition: 0.3s ease;
        &.selected {
            background: red;
        }
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>