<template>
    <section class="editor-dashboard">
        <section class="editor-nav flex">
            <div class="tab-container">
                <button v-for="tab in tabs" :key="tab" @click="toggleTabs(tab)">
                    {{tab}}
                </button>
            </div>
            <!-- <div class="nav-item" :class="editMode" @click="currentTab='add'">
                Add
            </div>
            <div class="nav-item" :class="addMode" @click="currentTab='edit'">
                Edit
            </div> -->
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
            isEditMode: false,
            currTab: 'add',
            tabs: ['edit','add']
        }
    },
    methods: {
        toggleTabs(tab) {
            console.log('tab:',tab)
            this.currTab=tab
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
            if(this.currTab==='edit') return 'edit-btns';
            else return 'add-btns'
        }
    },
    components: {
        addBtns,
        editBtns
    }
}
</script>
<style lang="scss">
.nav-item {
    margin-block-start: 10px;
}
</style>