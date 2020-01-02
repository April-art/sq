<template>
    <div class="duotui">
        
        <!-- 推荐 -->
        <router-link to="/dongdui">
            <!-- 轮播图 -->
            <mt-swipe :auto="4000" >
                <mt-swipe-item>
                    <img src="../.././assets/images/recommended/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../.././assets/images/recommended/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                     <img src="../.././assets/images/recommended/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                     <img src="../.././assets/images/recommended/1.jpg" alt=""> 
                </mt-swipe-item>
                <mt-swipe-item>
                     <img src="../.././assets/images/recommended/1.jpg" alt="">  
                </mt-swipe-item>
            </mt-swipe>
            <div class="recommend_container">
                <!-- 你是什么爱情体质? -->
               <div class="Love_health">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">你是什么爱情体质?</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        
                        <div class="lh_content">
                            <div class="dmtj" v-for="(key,index) in result1" :key="index">
                                <!-- 图片 -->
                                <div class="dmtj_img">
                                    <img :src="result1[index].cover" alt="">
                                </div>
                                <!-- 文字 -->
                                <div class="dmtj_text">
                                    <!-- <div class="text_left"> -->
                                        <span>{{result1[index].name}}</span>
                                        <em>{{result1[index].name}}</em>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>     <!-- dmtj_content -->
                    </div>         <!-- title_dmtj -->
                </div>              
               <!-- 奇幻·这世界太疯狂 -->
                <div class="fantastic">
                    <div class="title_dmtj">
                        <div class="recently_title">
                            <div class="recentlytext">奇幻·这世界太疯狂</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>

                        <div class="fw_content">
                            <div class="fw" v-for="(key,index) in result2" :key="index">
                                <!-- 图片 -->
                                <div class="fw_img">
                                    <img :src="result2[index].cover" alt="未找到图片">
                                </div>
                                <!-- 文字 -->
                                <div class="fwtext">
                                    <span>{{result2[index].name}}</span>
                                    <em>{{result2[index].name}}</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                 
        </router-link>
        <router-view></router-view>
    </div>
</template>
<script> 
// import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            res1:'',
            result1:[],
            res2:'',
            result2:[],
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
        this.getrequest1(); 
        this.getrequest2();
    },
    methods:{
        //get 请求 你是什么爱情体质动漫
        getrequest1(){
            this.$axios.get('http://api.pingcc.cn/?name=浪漫').then((result)=>{
                // console.log(result.data.mhlist)
                for(var i=1;i<7;i++){
                    this.res1 = result.data.mhlist[i]
                    this.result1.push(this.res1)
                    // console.log(this.result1);
                }
            })
       },
       
       //get 请求 奇幻世界动漫
        getrequest2(){
            this.$axios.get('http://api.pingcc.cn/?name=奇幻').then((result)=>{
                // console.log(result.data.mhlist)

                for(var i=0;i<4;i++){
                    this.res2 = result.data.mhlist[i]
                    this.result2.push(this.res2)
                    // console.log(this.result2);
                }
            })
       },
    }
}


</script>
<style scoped>
    .mint-swipe {
         width:100%;
        background:lightblue;
        height: 300px;
    }
    .mint-swipe img{
        width:100%;
        height:100%;
    }

    .duotui{
        width:100%;
        height:100%;
    }
    /* 你是什么爱情体质 */
    .Love_health{
        width:100%;
        height:85%;
        margin:0% auto;
    }
    .lh_content{
        width:100%;
        height:50%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .lh_content .dmtj{
        width:32%;
        height:88%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding: 0 0 2.5% 0;
    }
    /* 奇幻  这世界太疯狂 */
    .fantastic{
        width:100%;
        height:100%;
        margin:0 auto 2%;
    }
    .fw_content{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;
        margin-bottom:28%;
    }
    .fw_content .fw{
        width:49%;
        height:58%;
        display: flex;
        flex-direction:column;
    }
    .fw_img{
        width:100%;
        height:75%;
        border-radius:1em;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .fw_img img{
        width:70%;
        height:100%;
        background: #000;
        opacity: 0.8;
        border-radius:10px;
    }
    .fwtext{
        width:100%;
        height:17%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 5%;
    }
    .fwtext span{
        display:block;
        color:#000;
        font-size:12px;
    }
    .fwtext em{
        font-size:12px;
        color:rgb(155,155, 155);
    }
    .title_recently{
        width:95%;
        height:35%;
        display:flex;
        flex-direction:column;
        margin:0 auto;
        color:#000;
    }
    .recently_title{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding:5% 0;
    }
    .recentlytext{
        font-size:16px;
        font-weight:1000;
    }
    /* 更多 */
    .more{
        font-size:16px;
        color:#000;
    }
    .dm_title{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        margin:5% 0;
    }
    .dmtj_img{
        width:100%;
        height:65%;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .dmtj_img img{
        width:70%;
        height:100%;
        background: #000;
        opacity: 0.8;
        border-radius:10px;
    }
    .dmtj_text{
        width:100%;
        height:27%;
        font-weight:lighter;
        display:flex;
        flex-direction: column;
        justify-content:center;
        text-align:center;
    }
    .dmtj_text span{
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display:block;
    }
    .dmtj_text em{
        width:100%;
        height:40%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display:block;
        font-style:normal;
        font-size:12px;
        color:rgb(155,155,155);
    }
    .title_dmtj{
        width:95%;
        height:100%;
        display:flex;
        flex-direction:column;
        margin:0 auto;
        color:#000;
        position: relative;
    }
</style>