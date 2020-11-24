<template>
    <section class="editor-dashboard">
        <section class="editor-nav flex">
            <div class="tab-container">
                <button v-for="tab in tabs" :key="tab" @click="toggleTabs(tab)" :class="{selected: currTab === tab}" class="tab-item">
                    {{tab}}
                </button>
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
        selectedTab(tabName) {
            console.log('tabname:',tabName);
            return { selected: this.currTab===tabName }
        },
        currDashboard() {
            if(this.currTab==='edit') return 'edit-btns';
            return 'add-btns'
        }
    },
    components: {
        addBtns,
        editBtns
    }
}
</script>
<style lang="scss">
.tab-container {
    display: flex;
    button {
        font-family: cursive;
        width: 50%;
        padding: 0.5rem 1rem;
        background: transparent;
        border: 0;
        outline: 0;

        &.selected {
            background: red;
        }
    }
}
.nav-item {
    margin-block-start: 10px;
}
</style>