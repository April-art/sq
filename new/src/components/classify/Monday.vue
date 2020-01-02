<template>
    <div>
        <transition name="change">
            <v-touch @swipeleft="swiperleft" :swipe-options="{direction: 'horizontal'}" @swiperight="swiperright" class="wrapper">
                <div class="Monday_cont">
                    <!-- {{data}}      -->
                   <router-link to='/CTcontent' class="Monday_content">
                        <router-link  v-for="(data,index) in obj"  :key="index" class="Monday_item" :to="{path:'/CTcontent/Introduction',query:{url:data.url}}" >
                            
                            <div class="item_content" v-if="data.cover" >
                                <div class="item_top">
                                   <div class="pic_heade">
                                       <img :src=data.cover alt="">
                                   </div>
                                    <div class="pic_title">
                                        <div class="title">
                                            <div class="name">{{data.name}}</div>
                                            <div class="tag">{{data.tag}}</div>
                                            <div class="more">全集</div>
                                        </div>

                                    </div>
                                </div>
                                <div class="item_content">
                                    <img :src=data.cover alt="">
                                </div>
                                <div class="item_bottom">
                                    <div class="writer">
                                    </div>
                                </div>
                               
                            </div>  
                        </router-link>
                   </router-link>
                </div>
            </v-touch>
        </transition>
    </div>
</template>
<script>

export default {
    name:'Monday',
    props:['data'],

    data(){
        return{
            obj: {},
            // data:{}
            url:{}

        }
    },
    mounted(){
        let that = this
       this.$axios.get('http://api.pingcc.cn/?mhname=王',{
           parmas:{

           }
       }).then(res=>{
           that.obj = res.data.list.slice(10,20)            
        
       }).catch(err => {

       });
   },
    methods : {
        send:function(){
            this.$router.push({
                path:'/CTcontent'
              
            })
        
        },
        swiperleft:function(){
            console.log("右滑")
            this.$router.push({'path':'/buttom/classify_header/weeks/Tuesday'});   
        },
        swiperright: function () {
            console.log("右滑")
            this.$router.push({'path':'/buttom/classify_header/collect'});   

        },
    },
    computed:{

    }

}
</script>
<style scoped>
    .Monday_cont{
        width: 100%;
        /* height: 1000px; */
        background-color: rgb(243, 243, 243);
        position: absolute;
        overflow: hidden;
        padding-bottom:15%; 
        /* transform: translateX(-100%);
        transition: all 0.5s */
    }
    .Monday_item{
        font-size: 12px;
    }
    .item_top .pic_heade img{
        width: 90%;
        height: auto;
    }
    .item_content img{
        width: 50%;
       

    }
    .item_content{
        margin:0px 0px 5px 0px; 
        background: #ffffff;
    }
    .item_top{
        display: flex;
        padding: 10px
    }
    .item_top div:nth-child(1){
        flex: 10
    }
     .item_top div:nth-child(2){
        flex: 70
    }
     .item_top div:nth-child(3){
        flex: 10
    }
    .pic_title{
        display: flex;
    }
    .title{
        display: flex;    
         align-items: center;/*垂直*/    
       justify-content: center;
    }
    .title div:nth-child(1){
        flex: 30;
        
    }
      .title div:nth-child(2){
        flex: 40;
        
    }
    .title div:nth-child(3){
    flex: 10;
    
    }
   
</style>
