<template>
    <section class="sample-hero flex" :class="info.class" :style="containerStyle">
        <h1 class="sample-hero-heading" :class="info.children.h1.class" :style="headingStyle">{{info.children.h1.txt}}</h1>
        <!-- <p class="wap-hero-txt" :class="info.children.p.class" :style="txtStyle" />
        <a class="wap-hero-btn" :class="info.children.link.class" :style="linkStyle" href="info.children.link.href" /> -->
    </section>

</template>

<script>
export default {
    name: 'sample-hero',
    props: {
        info: Object
    },
    computed: {
        containerStyle() {
            const { background,height }=this.info.style
            return `background:${background};height:${height};`
        },
        headingStyle() {
            const { backgroundColor,fontSize,lineHeight,letterSpacing }=this.info.children.h1.style
            return `backgroundColor:${backgroundColor};fontSize:${fontSize};lineHeight:${lineHeight};letterSpacing:${letterSpacing};`
        },
        txtStyle() {
            const { backgroundColor,fontSize,lineHeight,letterSpacing }=this.info.children.p.style
            return `backgroundColor:${backgroundColor};fontSize:${fontSize};lineHeight:${lineHeight};letterSpacing:${letterSpacing};`
        },

        linkStyle() {
            const { backgroundColor,fontSize,lineHeight,letterSpacing }=this.info.children.link.style
            return `backgroundColor:${backgroundColor};fontSize:${fontSize};lineHeight:${lineHeight};letterSpacing:${letterSpacing};`
        }
    }
}
</script>