<template>
    <div>
        <div class="header">
            <div class="parter">
                <div class="parcel" >
                    <router-link tag="p" to="/buttom/classify_header/collect" class="item" @click.native="test">关注</router-link>
                    <!-- <p @click='test'>人气</p> -->
                    <router-link tag="p" to='/buttom/classify_header/weeks/Monday' class="item pick"  @click.native="test">人气</router-link>
                </div>
                <div class="check">
                    <div></div>
                </div>

            </div>
        </div>
        <transition name="slide-left">
        <router-view></router-view>

        </transition>

    </div>
</template>

<script>
//   import classify from '../.././assets/js/classify.js'
export default {
     methods : {
         
        test:function(){
            
            // $('.parcel p').off();
            $('.parcel .item').on('click',function(){
                console.log($(this))
                   $(this).addClass('pick').siblings().removeClass('pick');
                   console.log(1)
                   
            })
        }
        
    },
    computed :{
    }
}
</script>
<style lang="stylus" scoped>
@import '../.././assets/css/classify.css'
</style>