<template>
    <section class="text-editor">
        <h1>We are in text mode</h1>
        <my-select :options="fonts" />
        <p class="text-editor-txt">Font Size</p>
        <my-range />
        <p class="text-editor-txt">Line Height</p>
        <my-range />
        <p class="text-editor-txt">Letter Spacing</p>
        <my-range />
    </section>
</template>

<script>
import mySelect from '@/cmps/custum-cmps/my-select.cmp.vue';
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
export default {
    name: 'text-controls',
    data() {
        return {
            fonts: [{
                label: 'Arial',
                value: 'Arial'
            }, {
                label: 'Helvetica',
                value: 'Helvetica'
            }, {
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
    components: {
        mySelect,
        myRange
    }
}
</script>