<template>
    <section class="text-editor">
        <h1>We are in text mode</h1>
        <my-select :options="fonts" />
        <p class="text-editor-txt">Font Size</p>
        <input type="range" min="1" max="72" />
        <p class="text-editor-txt">Line Height</p>
        <input type="range" min="1" max="15" />
        <p class="text-editor-txt">Letter Spacing</p>
        <input type="range" min="1" max="30" />
    </section>
</template>

<script>
import mySelect from "@/cmps/custum-cmps/my-select.cmp.vue"
export default {
    name: 'text-editor',
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
        mySelect
    }
}
</script>