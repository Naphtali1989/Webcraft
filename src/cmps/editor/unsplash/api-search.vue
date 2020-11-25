<template>
    <section class="api-search">
        <form @submit.prevent="searchPhotos">
            <input type="text" placeholder="Search photo..." v-model="term">
            <button>Submit</button>
        </form>
        <div class=""></div>
        <unsplash-gallery :photos="this.photos">
    </section>
</template>
<script>
import unsplashGallery from '@/cmps/editor/unsplash-gallery.vue'
export default {
    name: 'api-search',
    data() {
        return {
            term: '',
            photos: []

        }
    },
    methods: {
        async searchPhotos() {
            const apiKey='DL-fOJKfzUbQ2irbF2Oleeza3GuX2LyJ-mVPCUJsJc8';
            const res=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${this.term}&client_id=${apiKey}`)
            const data=await res.json()
            console.log('data from api:',data);
            const photos=this.getUrls(data.results);
            this.photos=photos;
        },
        getUrls(results) {
            const res=results.map(result => result.urls)
            console.log('res:',res);
            return res;
        }
    },
    components: {
        unsplashGallery,
    }
}
</script>

<style>
</style>