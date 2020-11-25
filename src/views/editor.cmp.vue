<template>
    <section class="editor-container flex column">
        <editor-dashboard />
        <editor-workspace :cmps="cmps" />
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
export default {
    name: 'editor',
    data() {
        return {
            cmps: null
        }
    },
    components: {
        editorDashboard,
        editorWorkspace
    },
    created() {
        this.cmps=[
            {
                id: 12434,
                type: "sample-hero",
                info: {
                    class: "flex justify-center align-center",
                    style: {
                        background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                        color: "white",
                        height: "300px"
                    },
                    children:
                    {
                        h1: {
                            class: "h1-heading",
                            txt: "this is h1",
                            style: {
                                fontSize: "20px",
                                lineHeight: "1.5",
                                letterSpacing: "10px",
                                backgroundColor: "red"
                            }
                        }
                    }
                }
            }
        ]

    }
};
</script>