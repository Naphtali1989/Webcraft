<template>
    <section>
        <h1>This is the template gallery</h1>
        <div class="page-controls">
            create a site as u wish   
            <button>
                 click here!
            </button>
        </div>
        <wap-list :waps="waps"></wap-list>

    </section>
</template>

<script>
import wapList from '@/cmps/wap/wap-list.cmp.vue'
export default {
    name: 'wapPage',
    components: {
        wapList
    }
};
</script>