<template>
    <div>
        <v-touch @swipeleft="swiperleft" :swipe-options="{direction: 'horizontal'}"  @swiperight="swiperright">
            <div class="finish_cont"></div>
        </v-touch>
    </div>
</template>
<script>
export default {
    name:'finish',
    data(){
        return{

        }
    },
    methods:{
        swiperleft:function(){
            alert('已经最后一页了')
            // this.$router.push({'path':'/buttom/classify_header/weeks/'})
        },
        swiperright:function(){
            this.$router.push({'path':'/buttom/classify_header/weeks/Sunday'})
        }
    },
}
</script>
<style scoped>
        .finish_cont{
                width: 100%;
                height: 1000px;
                background-color:aquamarine
        }
    
</style>