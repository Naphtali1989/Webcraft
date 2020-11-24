<template>
    <section class="section-editor">
        <p class="editor-txt">Set Round Edges:</p>
        <my-range :options="{ initVal: 2, min: 0, max: 50 }" />
        <p class="editor-txt">Set A Background Color</p>
        <color-picker />

        <p class="editor-txt">Or Add An Image As A Background</p>
        <div class="img-uploader">
            <label class="user-input input-file"
                ><i class="fas fa-cloud-upload-alt"></i>
                <input class="hide" type="file" @change="onUpladImg" />
            </label>
        </div>
    </section>
</template>

<script>
import myRange from '@/cmps/custum-cmps/my-range.cmp.vue';
import colorPicker from '@/cmps/editor/color-picker.cmp.vue';
export default {
    name: 'section-controls',
    data() {
        return {

        }
    },
    methods:{
        async onUpladImg(ev) {
        //     this.$store.commit({
        //         type:'setIsLoading',
        //         isLoading: true
        //     })
        //     const imgUrl = await uploadImg(ev)
        //     this.toyToEdit.imgUrl = imgUrl.url
        //     this.$store.commit({
        //         type:'setIsLoading',
        //         isLoading: false
        //     })
        }
    },
    components: {
        myRange,
        colorPicker
    }
}
</script>