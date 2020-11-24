<template>
<section>
        <div class="wap-preview">
        <h3>{{wap.title}}</h3>
            <img :src="wap.imgUrl" >
        </div>
</section>
</template>

<script>
export default {
    name:'wapPreview',
    props:{
        wap:Object
    }
}
</script>

<style>

</style>
