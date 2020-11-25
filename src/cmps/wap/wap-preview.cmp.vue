<template>
    <section>
        <div class="wap-preview">
            <h3>{{ wap.title }}</h3>
            <img :src="wap.imgUrl" />
            <div class="wap-prev-controls">
                <button >save</button>
                <button >edit</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'wapPreview',
    props: {
        wap: Object
    },
    methods: {
        enterWap() {
        },
        enterEditor() {
        }

    }
}
</script>

<style>
</style>
