<template>
    <div class="find">
    
        <!-- 头部 -->
        <div class="header">
            <!-- 搜索 分类 排行的容器 -->
            <div class="input-group">
                <!-- 搜索 -->
                <div class="seach">
                    <input type="text" class="form-control" placeholder="潜蓝" aria-describedby="basic-addon2">
                    <span class="glyphicon glyphicon-search"></span>
                </div>
                <!-- 分类 -->
                <div class="classify">分类</div>
                <!-- 排行 -->
                <div class="ranking">排行</div>
            </div>
            <!-- 头部导航 选项卡 -->
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">
                    <router-link to="/find/recommend">推荐</router-link>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <router-link to="/find/dongtui">咚推</router-link>
                </mt-tab-item>
                <mt-tab-item id="3">
                    <router-link to="/find/love">恋爱</router-link>
                </mt-tab-item>
                <mt-tab-item id="4">
                    <router-link to="/find/young">少年</router-link>
                </mt-tab-item>
                <mt-tab-item id="5">
                    <router-link to="/find/campus">校园</router-link>
                </mt-tab-item>
            </mt-navbar>
        </div>
        

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
         
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <!-- <mt-cell v-for="n in 4" :title="'咚推 ' + n" :key="n"/> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <!-- <mt-cell v-for="n in 6" :title="'恋爱 ' + n" :key="n"/> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
            <!-- <mt-cell v-for="n in 4" :title="'少年 ' + n" :key="n"/> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
            <!-- <mt-cell v-for="n in 6" :title="'校园 ' + n" :key="n"/> -->
        </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部固定导航 -->
        <!-- <mt-tabbar>
            <mt-tab-item v-for="(key,index) in bottomnav" :key="index" @click="hit(key.path)">
                <img slot="icon" :src="key.src" :key="index">
                {{key.idname}}
            </mt-tab-item>
        </mt-tabbar> -->
        <router-view></router-view>
    </div>
</template>
<script> 
// import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            // 底部固定导航的数据
            selected:'1',
            bottomnav:[
                {idname:'更新',src:'../images/bottom/update.png',path:'/update'},
                {idname:'发现',src:'../images/bottom/find.png',path:'/find'},
                {idname:'我的漫画',src:'../images/bottom/smile.png',path:'/cartoon'},
                {idname:'MY',src:'../images/bottom/my.png',path:'/my'},
            ]
        }
    },
    created(){
        
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
       
      },
    methods:{
         handleScroll: function () {
            this.$nextTick(() => {
                    const container = this.$el.querySelector('.type')
                    if(document.documentElement.scrollTop == '0'){
                        $('.header').css({'background':'none'})
                    }else{
                        $('.header').css({'background':'rgb(240,255,255)'})
                    }
                })
	
            // console.log(document.documentElement.scrollTop)
        }

    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
      },
  
}


</script>
<style scoped>

    .mint-swipe {
        height:30%;
        background:lightblue;
    }
    .find{
        width:100%;
        height:100%;
    }
    /* 头部导航 选项卡 */
    .header{
        width:100%;
        height:11%;
        position:fixed;
        top:0px;
        z-index:1;
        display:block;
        border:none
    }

    /* 搜索 分类 排行的容器 */
    .input-group{
        width:95%;
        padding:0.5px 0 0 0;
        margin-top:10px;
        display:flex;
        flex-flow:row;
        /* justify-content:space-around; */
        color:rgb(155,155,155);
    }

    /* 搜索容器 */
    .seach{
        width:65%;
        height:10%;
        text-align:right;
        position: relative;
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
        
    }

    /* 搜索框 */
    .form-control{
        width:80%;
        height:20px;
        border-radius:20px !important;
        background:rgba(255,255,255,0.2);
        font-size:1px;
        padding:0 0 0 10px;
    }
    .glyphicon-search{
        display:block;
        width:50%;
        height:2%;
        line-height:20px;
        color:#fff;
        position:absolute;
        text-align:center;
        padding:0 0 0 40%;
        font-size: 15px
    }

    /* 分类btn */
    .classify{
        width:15%;
        height:20   px;
        background:rgba(155,155,155,0.2);
        border-radius:20px;
        text-align:center;
        font-size:1px;
         line-height: 20px;
         margin-left:10px 
    }
    /* 排行btn */
    .ranking{
        line-height: 20px;
        width:15%;
        height:20px;
        border-radius:20px;
        background:rgba(155,155,155,0.2);
        text-align:center;
        font-size:1px;
        margin-left:10px 
    }
    .mint-navbar{
        width:80%;
        background:rgba(0,0,0,0) !important;
        /* font-size:1.5em; */
    
        /* color:rgba(255,255,255,0.5); */
    }
    .mint-tab-item-label{
        font-size:1px !important;
        /* color:#151515; */
    }
    .mint-tab-item{
        color:rgb(155,155,155);
    }
    .mint-navbar .mint-tab-item.is-selected {
        color: rgb(155,155, 155) !important;
        font-size:1px;
        text-decoration:none;
        border-bottom:0 !important;
    }

    
</style>