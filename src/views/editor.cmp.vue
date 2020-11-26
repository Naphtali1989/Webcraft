<template>
    <section class="editor-container flex column">
        <editor-dashboard :cmpToEdit="currCmpToEdit" />
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
            currCmpToEdit: null,
            currWap: null
        }
    },
    computed: {
        editType() {
            return this.$store.getters.editType;
        }
    },
    components: {
        editorDashboard,
        editorWorkspace
    },
    methods: {
        findByIdRecursive(nodes,id) {
            for(let i=0;i<nodes.length;i++) {
                const child=nodes[i];
                if(child.id===id) {
                    return child;
                } else {
                    if(child.children) {
                        const found=this.findByIdRecursive(child.children,id);
                        if(found) {
                            return found;
                        }
                    }
                }
            }
        },
        setCmpToEdit(id) {
            var cmpToEdit=this.findByIdRecursive(this.cmps,id);
            this.currCmpToEdit=cmpToEdit;
            // console.log('YESH PO INYAN!',this.currCmpToEdit)
            // this.$store.commit({ type: 'setEditType',editType: this.currCmpToEdit.type });
        },
        
    },
    created() {
        this.cmps=[{
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            color: "#222",
            style: {
                // background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                background: "gray",
                color: "red",
                height: "33%"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "MATAN THIS SHIT MAYBE WORKS",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red',
                    fontFamily: 'monospace',
                    textDecoration: 'underline',
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red',
                    fontFamily: 'cursive',
                    textDecoration: 'underline',
                    fontStyle: 'italic'
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
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    color: 'red',
                    backgroundColor: "",
                    fontFamily: 'cursive',
                    textDecoration: 'underline',
                    fontStyle: 'italic'
                }
            }]
        },
        {
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            color: "#222",
            style: {
                // background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                background: "gray",
                color: "#222",
                height: "300px"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "this is h1",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: "#222",
                    fontFamily: 'cursive'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: "#222",
                    fontFamily: 'cursive'
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
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    color: "#222",
                    backgroundColor: "",
                    fontFamily: 'cursive'
                }
            }]
        },
        {
            id: Math.random().toString(36).substring(2,8),
            type: "section",
            class: "flex column justify-center align-center",
            style: {
                // background: "url(https://images.unsplash.com/photo-1529271208007-f3a35808467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80) center / cover no-repeat",
                background: "gray",
                color: "#222",
                height: "300px"
            },
            children: [{
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "h1-heading",
                txt: "this is h1",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red',
                    fontFamily: 'cursive'
                }
            },
            {
                id: Math.random().toString(36).substring(2,8),
                type: "txt",
                class: "hero-p",
                txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur quo dolorem itaque voluptas ab!",
                style: {
                    fontSize: "25px",
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    backgroundColor: "",
                    color: 'red',
                    fontFamily: 'cursive'
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
                    lineHeight: 1.5,
                    letterSpacing: "10px",
                    color: 'red',
                    backgroundColor: "",
                    fontFamily: 'cursive'
                }
            }]


        }]
    }
}

</script>

