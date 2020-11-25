<template>
    <section class="gallery">
        <img class="gallery1" src="@/assets/img/gallery-1.jpg">
        <img class="gallery2" src="@/assets/img/gallery-2.jpg">
        <img class="gallery3" src="@/assets/img/gallery-3.jpg">
        <img class="gallery4" src="@/assets/img/gallery-4.jpg">
    </section>
</template>

<script>
export default {
    name: 'grid-sample'
}
</script>

<style lang="scss" scoped>
.gallery {
    display: grid;
}
</style>
