<template>
    <div>
        <van-sticky>
        <div class="navigation " >
            <router-link tag="div"  to="/buttom/classify_header/weeks/Monday"  class="today Monday">周一</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Tuesday" class="today Monday">周二</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Wednesday" class="today Monday">周三</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Thursday" class="today Thursday">周四</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Friday" class="today Thursday">周五</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Saturday" class="today Thursday">周六</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/Sunday" class="today Thursday">周日</router-link>
            <router-link tag="div"  to="/buttom/classify_header/weeks/finish" class="today Thursday">完结</router-link>
         
        </div>
         </van-sticky>

            <transition  name="slide-left">
               
                 <router-view class="weeks_content"></router-view>
            </transition>
    </div>
</template>
<script>

export default {
    name:'weeks',
        components:{
     
    },


    data(){
        return{
            obj:{},
         

        }
    },
    methods : {

    },
    watch:{
     
    },
    computed :{
        
    },
  
}
</script>
<style  lang="stylus" scoped>
.navigation{
   display: flex;
   font-size: 12px;
   border-bottom:2px solid #ececec ;
   background-color :#ffffff;
}
.navigation div{
    margin: auto;
    padding: 8px 0px;
}
.weeks_content{
    position relative
    }





.slide-left-enter{
    opacity:0;
    // transform: translateX(-100%)
}

.slide-left-enter-active{
    transition: all 600ms  
}

.slide-left-leave-to{
    opacity:0;
    // transition: translate(100%)  
}
 .router-link-active{
        color: blueviolet
    }

</style>