<template>
    <wap-renderer :template="template" />
</template>

<script>
import wapRenderer from '@/cmps/wap/wap-renderer.cmp.vue';
import { wapService } from '@/services/wap.service'

export default {
    name: 'userWebsite',
    data() {
        return {
            template:
            {
                el: 'div', class: 'main-div column', style: 'display:flex; justify-content:center;', innerText: 'This is the main Div',
                // style: 'backgroundColor:skyblue; height:100vh; width: 100%; display:flex; justify-content:center; align-items:center;flex-direction:column;',
                children: [
                    { el: 'google-map', style: 'width: 500px; height: 300px; margin:4rem;' },
                    { el: 'google-map', style: 'width: 800px; height: 250px; margin:4rem; padding:8rem; backgroundColor:#bbb;' },

                    { el: 'card-section' },
                    // {
                    //     el: 'img',
                    //     innerText: 'No, Me!',
                    //     imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/10/spider_man_homecoming_key_art-c7e1520.jpg?quality=90&resize=768,574'
                    // },
                    // {
                    //     el: 'input',
                    //     innerText: 'No, Me!',
                    //     style: 'margin:0 auto; padding:1rem; fontSize:2rem;'
                    // },
                    // {
                    //     el: 'div', innerText: 'This is NOT the main Div', style: 'backgroundColor:red; height:50%; width: 80%; display:flex; justify-content:center; align-items:center;flex-direction:column;',
                    //     children: [
                    //         {
                    //             el: 'iframe',
                    //             vidUrl: 'https://www.youtube.com/watch?v=SGkOqIBd10E',
                    //             style: 'height:200px; width: 300px; '
                    //         },
                    //         {
                    //             el: 'button',
                    //             innerText: 'Do me!'
                    //         },
                    //         {
                    //             el: 'button',
                    //             innerText: 'No, Me!'
                    //         },
                    // {
                    //     el: 'form', innerText: 'Forget them!', children: [
                    //         { el: 'input', innerText: 'Do me!' },
                    //         { el: 'a', innerText: 'No, Me!', href: 'https://monday.com/' },
                    //         // {
                    //         //     el: 'p',
                    //         //     innerText: 'No, Me!'
                    //         // },
                    //         {
                    //             el: 'button',
                    //             innerText: 'Save Me!',
                    //             type: 'submit'
                    //         },

                    //     ]
                    // },
                    //         {
                    //             el: 'section', innerText: 'Forget them!', children: [
                    //                 {
                    //                     el: 'div', innerText: 'Do me!', children: [
                    //                         { el: 'div', innerText: 'Do me!' },
                    //                         { el: 'h3', innerText: 'No, Me!' },
                    //                         { el: 'button', innerText: 'No, Me!' },
                    //                     ]
                    //                 },
                    //                 { el: 'input', innerText: 'No, Me!' },
                    //                 { el: 'input', innerText: 'No, Me!' },
                    //             ]
                    //         },

                    //     ]
                    // },
                ]

            },
        }
    },
    async mounted() {
        console.log(this)
        const website = await templateService.getWap(this);
        console.log('Let us see what we get!', website)
    },
    components: {
        wapRenderer,
        // colorPicker
    }
};
</script>