<template>
    <section class="editor-dashboard">
        <section class="editor-nav flex">
            <div class="nav-item" :class="editMode" @click="toggleEditMode">
                Add
            </div>
            <div class="nav-item" :class="addMode" @click="toggleEditMode">
                Edit
            </div>
            <!-- clicking a button will highlight it  -->
        </section>
        <section class="editor-body">
            <!-- The relevant editing component will go here -->
            <component :is="currDashboard" />
        </section>
    </section>
</template>

<script>
import editBtns from '@/cmps/editor/edit-btns.cmp.vue';
import addBtns from '@/cmps/editor/add-btns.cmp.vue';
export default {
    name: 'editor-dashboard',
    data() {
        return {
            isEditMode: false
        }
    },
    methods: {
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },
    },
    computed: {
        editMode() {
            return { selected: this.isEditMode };
        },
        addMode() {
            return { selected: !this.isEditMode };
        },
        currDashboard() {
            if (!this.isEditMode) return 'edit-btns';
            return 'add-btns'
        }
    },
    components: {
        addBtns,
        editBtns
    }
}
</script>
<style lang="scss" scoped>
.editor-dashboard{
    margin: 3rem;
    height: 250px;
    width: 325px;
    background-color: #ccc;
}
</style>