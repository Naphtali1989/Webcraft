<template>
    <section class="editor-container flex column">
        <editor-dashboard />
        <editor-workspace :cmps="cmps" @clicked="setCmpToEdit" />
    </section>
</template>

<script>
import editorDashboard from '@/cmps/editor/editor-dashboard.cmp.vue';
import editorWorkspace from '@/cmps/editor/editor-workspace.cmp.vue';
export default {
    name: 'editor',
    data() {
        return {
            cmps: null,
            currCmpToEdit: null
        }
    },
    components: {
        editorDashboard,
        editorWorkspace
    },
    methods: {
        customFind(parents,idToFind) {
            const res=parents.find(parent => {
                console.log('Whos youre daddy?',parent,parent.id===idToFind)
                if(parent.id===idToFind) return true;
                else if(parent.children) {
                    return this.customFind(parent.children,idToFind);
                }
            });
            return res;
        },
        setCmpToEdit(id) {
            var cmpToEdit=this.customFind(this.cmps,id);
            console.log('YESH PO INYAN!',cmpToEdit)
        }
    },

    created() {
        this.cmps=[{
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            style: {
                background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                color: "red",
                height: "33%"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "this is h1",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                },
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "link",
                class: "hero-link",
                txt: "CLICK ME!",
                href: "https://www.google.com/",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    color: 'red',
                    backgroundColor: ""
                }
            }]
        },
        {
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            style: {
                background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                color: "red",
                height: "300px"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "this is h1",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "link",
                class: "hero-link",
                txt: "CLICK ME!",
                href: "https://www.google.com/",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    color: 'red',
                    backgroundColor: ""
                }
            }]
        },
        {
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            style: {
                background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                color: "red",
                height: "300px"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "this is h1",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "link",
                class: "hero-link",
                txt: "CLICK ME!",
                href: "https://www.google.com/",
                style: {
                    fontSize: "25px",
                    lineHeight: "1.5",
                    letterSpacing: "10px",
                    color: 'red',
                    backgroundColor: ""
                }
            }]


        }]
    }
}

</script>

