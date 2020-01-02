<template>
    <div class="body">
        <!-- 头部 -->
        <mt-header title="">
            <router-link to="" slot="left">
                <mt-button icon="back">我的漫画</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    <div class="page-navbar">
        <!-- 导航栏 -->
        <mt-navbar v-model="selected" style="border-bottom:3px solid gainsboro">
            <!-- 导航 -->
            <mt-tab-item id="1" style="margin-bottom:-3px;">
                <!-- 最近观看  -->
                <router-link to="/myCorton/previouLook" tag="div">最近观看</router-link>
            </mt-tab-item>
                <!-- 我的关注 -->
            <mt-tab-item id="2" style="margin-bottom:-3px;">
                <router-link to="/myCorton/myAttention" tag="div" >我的关注</router-link>
            </mt-tab-item>
                <!-- 临时保存 -->
            <mt-tab-item id="3" style="margin-bottom:-3px;">
                <router-link to="/myCorton/fetch" tag="div">临时保存</router-link>
            </mt-tab-item>
                <!-- 我的评论 -->
            <mt-tab-item id="4" style="margin-bottom:-3px;">
                <router-link to="/myCorton/myarguments" tag="div">我的评论</router-link>
            </mt-tab-item>
            </mt-navbar>
            <!-- 最近观看的内容 -->
            <div class="allLook">
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <!-- 最近观看列表 -->
                        <div class="looked">{{text}}</div>
                        <!-- 大家都在看推荐列表 -->
                        <div class="allLookss">
                            <div class="lookTitle">大家都在看</div>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/lookCarton" tag="div">
                                <div class="container" id="firstCarton" v-for="(item,index) in listone.slice(1,2)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li class="cartonName">{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/twoPart" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(2,3)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li class="cartonName">{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/threeBook" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(3,4)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li class="cartonName">{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/fourBook" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(4,5)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li class="cartonName">{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                        </div>
                    </mt-tab-container-item>
                </mt-tab-container> 
            </div>
        </div>
        <div v-for="(key,index) in listone" :key="index">
            <!-- <img :src="key.cover" alt=""> -->
        </div>
        
    <router-view></router-view>
    </div>
</template>
<script>
import $ from 'jquery'
        $(function(){
            $('.container').on('click',function(){
                alert(2)
            })
        })
export default {
     data(){
         return {
             selected:'1',
             listone:[],
             listone1:[],
             listone2:[],
             text:'还没有观看的漫画，去看看其他人都在看什么吧!!'  
         }
     },
     //执行方法
    created(){
        this.GetListImg();
        this.GetListImg1();
        this.GetListImgs();
    },
     methods:{
         GetListImg(){
            var that = this;
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhname=大家都在看",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone=response.data.list;
                console.log(that.listone);
            })
        },
        GetListImg1(){
            var that = this;
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhurl1=wbmh72321",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone1=response.data.list;
                console.log(that.listone1);
            })
        },
        GetListImgs(){
            var that = this;
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhurl2=wbmh320228",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone2=response.data.list;
                console.log(that.listone2);
            })
        },
     }
}
</script>
<style scoped>
    *{margin:0px;padding:0px}
    .body{margin-bottom:-20px;}
    /* 最近观看内容样式 */
    .looked{
        width:auto;
        height:auto;
        padding:30px 0px 30px 10px;
        font-size: 14px;
        background:white;
        margin-bottom: 10px;
    }
    /* 大家都在看内容样式 */
    .allLook{
        background:white;
        margin-left: 10px;
        margin-bottom: 100px;
    }
    .lookTitle{
        padding-bottom: 5px;
        border-bottom:2px solid gainsboro
    }
    /* 都在看所有列表样式 */
    .container{
        margin:10px 0px 10px 0px;
        display: flex;
        border-bottom:1px solid gainsboro;
    }
    .container img{
        flex:2;
    }
    .container ul{
        margin-left: 30px;
        list-style: none;
        flex: 8;
    }
    .container ul li:first-child{
        font-size:20px;
    }
    .container ul li:nth-child(2){
        color:rgba(128,0,128,0.5)
    }
    .container ul li:nth-child(3){
        color:gray;
        font-size:14px;
    }
    
</style>