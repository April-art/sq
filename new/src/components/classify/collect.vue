<template>
    <div>
    <v-touch @swipeleft="swiperleft" @swiperight="swiperright">
        <div class="content"></div>

    </v-touch>
    </div>
</template>
<script>
export default {
    name:'collect',
    data(){
        return{

        }
    },
        methods : {
        swiperleft: function () {
           
        this.$router.push({'path':'/buttom/classify_header/weeks/Monday'});   
    },
    swiperright: function () {
        console.log("右滑")
        // this.$router.push({'path':'/buttom/classify_header/collect'});   

    }
    },
}
</script>
<style scoped>
.content{
    background-color: aqua;
    width: 100%;
    height: 500px;
}
</style>