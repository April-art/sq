<template>
    <div>
        <v-touch @swipeleft="swiperleft" :swipe-options="{direction: 'horizontal'}"  @swiperight="swiperright">
            <div class="Thursday_cont">
                <div class="Thursday_content">
                    <router-link v-for="(data,index) in obj"  :key="index" class="Thursday_item" :to="{path:'/CTcontent/Introduction',query:{url:data.url}}">                       
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
                </div>
            </div>
        </v-touch>
    </div>
</template>
<script>
export default {
    name:'Thuesday',
    data(){
        return{
            obj: {},
            url:{}
        }
    },
    mounted(){
        let that = this
        this.$axios.get('http://api.pingcc.cn/?mhname=死神',{
            parmas:{

            }
            }).then(res=>{
            that.obj = res.data.list.slice(1,10)            
              

            
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
            this.$router.push({'path':'/buttom/classify_header/weeks/Friday'})
        },
        swiperright:function(){
            this.$router.push({'path': '/buttom/classify_header/weeks/Wednesday'})
        }
    }
}
</script>
<style scoped>
  .Thursday_cont{
         width: 100%;
     background-color: rgb(243, 243, 243);

             padding-bottom:15%; 
        position: absolute;
    }
        .Thursday_cont{
        width: 100%;
        /* height: 1000px; */
        /* background-color: bisque; */
        position: absolute;
        overflow: hidden;
        padding-bottom:15%; 
        /* transform: translateX(-100%);
        transition: all 0.5s */
    }
    .Thursday_item{
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