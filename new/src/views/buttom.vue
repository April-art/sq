<template>
<div>
    <!-- <div class="source">
        <router-link to="/buttom/classify_header/weeks/Tuesday" ref="div"  class="item classify">
            <div class="itemPic">
                <img src="../assets/images/classify_header/fenlei.png" alt="">
            </div>
            <p>更新</p>
        </router-link>
    
        <div class="item find">
          <router-link to="/buttom/find" class="itemPic">
                <img src="../assets/images/classify_header/fenlei.png" alt="">

          </router-link>
            <p>发现</p>
        </div>
        <div to="/buttom/myCorton" @click="limit" class="item my_comic">
            <div class="itemPic">
                <img src="../assets/images/classify_header/fenlei.png" alt="">

            </div>
            <p>我的漫画</p>
        </div>
        <router-link to="/buttom/myself" class="item personal ">
             <div class="itemPic">
                <img src="../assets/images/classify_header/fenlei.png" alt="">

             </div>
            <p>MY</p>
        </router-link>
    </div> -->
    <mt-tabbar v-model="selected" fixed v-show="$route.meta.navShow==undefined||$route.meta.navShow">
    
          <mt-tab-item id="更新">
            <img slot="icon" src="../assets/images/bottom/update.png">
              <router-link  to="/buttom/classify_header/weeks/Monday" tag="div">
                更新
              </router-link>
          </mt-tab-item>

        <mt-tab-item id="发现">
            <img slot="icon" src="../assets/images/bottom/find.png">
              <router-link to="/find/recommend" tag="div">
                发现
              </router-link>
        </mt-tab-item>
      
        <mt-tab-item id="我的漫画">
            <img slot="icon" src="../assets/images/bottom/smile.png">
            <div  @click="limit" tag="div">
            我的漫画
           </div>
        </mt-tab-item>
     
         <mt-tab-item id="MY">
              <img slot="icon" src="../assets/images/bottom/my.png">
              <router-link to="/buttom/myself" tag="div">
                MY
             </router-link>  
         </mt-tab-item>
    </mt-tabbar>
            <router-view></router-view>
            

</div>
      <!-- <div class="type"> -->

    <!-- 下方固定导航条 -->
    
    <!-- 底部固定导航 -->
        <!-- <mt-tabbar>
            <mt-tab-item v-for="(key,index) in bottomnav" :key="index" id="更新">
              
                    <img slot="icon" :src="key.src" :key="index">
                    {{key.idname}}
              
            </mt-tab-item>
        </mt-tabbar>
  <router-view></router-view>
</div> -->

</template>



<script>
  

export default {
    name:'buttom',
    data(){
        return{
            selected:'更新',
           
        }
    },
    methods:{
        // 用户未登录就跳转到登录页面
        limit(){
            // console.log(this.$store.state.status)
            let status = this.$store.state.status
            if(status == -1){
                this.$router.push({
                    path:'/buttom/limit',
                  
                })
                
            }else{
                this.$router.push({
                    path:'/buttom/myCorton/fetch',
                  
                })
            }
        }
    },

}
</script>

<style scoped>
/* .mt-tabbar{
    z-index: 2;
    position:fixed;
    bottom:0px;
} */
img {
    width: 100%;
    margin: auto;
    padding:5px 0 3px 0; 
}
    .source{
        background-color:#ffffff ;
        display: flex;
        width: 100%;
        height: 100%;
        position :fixed;
   
        bottom: -93%;
        z-index: 1;
    }
    .item{
       
       position :relative;
        font-size :12px;
        flex: 25%;
    
       
    }
    .router-link-active{
        color: blueviolet;
    }
    .router-link-active img{
   
        color: blueviolet;
        border-radius: 50%;
    }
</style>