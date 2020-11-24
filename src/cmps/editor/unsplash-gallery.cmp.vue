<template>
  <section class="unsplash-gallery">
        <photo-preview v-for="(photo,idx) in photos" :key="idx" :src="photo.thumb" />
    </section>
</template>

<script>
import photoPreview from '@/cmps/editor/photo-preview.cmp.vue'
export default {
    name: 'unsplash-gallery',
    props: {
		photos: Array
    },
    components:{
        photoPreview,
    }
}
</script>

<style>

</style>

