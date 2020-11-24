<template>
    <section class="editor-container">
        <editor-dashboard />
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
export default {
    name: 'editor',
    components: {
        editorDashboard,
    },
};
</script>