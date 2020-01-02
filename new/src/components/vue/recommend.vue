<template>
    <div class="recom">
        <!-- 推荐 -->
            <!-- 轮播图 -->
            <mt-swipe :auto="4000" >
                <mt-swipe-item>
                    <img src="../.././assets/images/recommended/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <!-- <img src="images/recommended/2.jpg" alt=""> -->
                    <img src="../.././assets/images/recommended/2.jpg" alt="">

                </mt-swipe-item>
                <mt-swipe-item>
                    <!-- <img src="images/recommended/3.jpg" alt=""> -->
                    <img src="../.././assets/images/recommended/3.jpg" alt="">

                </mt-swipe-item>
                <mt-swipe-item>
                    <!-- <img src="images/recommended/4.jpg" alt=""> -->
                    <img src="../.././assets/images/recommended/4.jpg" alt="">

                </mt-swipe-item>
                <mt-swipe-item>
                    <!-- <img src="images/recommended/5.jpg" alt=""> -->
                    <img src="../.././assets/images/recommended/5.jpg" alt="">

                </mt-swipe-item>
            </mt-swipe>
            <div class="recommend_container">
           
               <!-- 咚漫推荐 -->
               <div class="dm_recommend">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">咚漫推荐</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        <!-- 咚漫推荐的内容容器 -->
                        <div class="dmtj_content">
                            <div class="dmtj" v-for="(key,index) in result1" :key="index">
                                <!-- 图片 -->
                                <div class="dmtj_img">
                                    <img :src="result1[index].cover">
                                </div>
                                <!-- 文字 -->
                                <div class="dmtj_text">
                                    <div class="text_left">
                                        <span>{{result1[index].name}}</span>
                                        <em>{{result1[index].name}}</em>
                                    </div>
                                </div>
                            </div>
                        </div>     <!-- dmtj_content -->
                    </div>         <!-- title_dmtj -->
               </div>              <!-- dm_recommend -->

                <!-- 佳作抢先看 -->
               <div class="spexial">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">佳作抢先看</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        
                        <div class="lh_content">
                            <div class="dmtj" v-for="(key,index) in result2" :key="index" @click="demo(key.url)">
                                <!-- 图片 -->
                                <div class="dmtj_img">
                                    <img :src="result2[index].cover" alt="未找到图片">
                                </div>
                                <!-- 文字 -->
                                <div class="dmtj_text">
                                    <div class="text_left">
                                        <span>{{result2[index].name}}</span>
                                        <em>{{result2[index].name}}</em>
                                    </div>
                                </div>
                            </div>
                        </div>     <!-- dmtj_content -->
                    </div>         <!-- title_dmtj -->
                </div>   

                <!-- 新作登场 -->
                <div class="newworks">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">新作登场</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        <div class="finish_content">
                            <div class="finish" v-for="(key,index) in result3" :key="index">
                                <div class="finish_img">
                                    <img :src="result3[index].cover" alt="未找到图片">
                                </div>
                                <div class="finish_text">
                                    <span>{{result3[index].name}}</span>
                                    <em>{{result3[index].name}}</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 上升榜 新作榜 总榜 -->
                <div class="notice">
                    <div class="title_dmtj">
                        <!-- 上升榜 新作榜 总榜的内容容器 -->
                           <!-- dmtj_content -->
                        <router-view></router-view>
                    </div>         <!-- title_dmtj -->
               </div>
            </div>                 <!-- recommend_container -->
            
        
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
            res3:'',
            result3:[],
            urlres1:'',
            urlresult1:[],
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
        this.getrequest3();
    },
    methods:{
        demo:function(url){
            // this.getrequest0(url)
            // this.getrequest()
            console.log(url);
        },
        // 第一层 取一个动画中有多少话
    //     getrequest0(url){
    //         this.$axios.get('http://api.pingcc.cn/?mhurl1='+ url +'').then((result)=>{
    //             console.log(result.body.list)
    //             for(var i=0;i<result.body.list.length;i++){
    //                 // console.log(result.body.list)
    //                 this.urlres1 = result.body.list[i]
    //                 this.urlresult1.push(this.urlres1)
    //             }
    //             // console.log(this.urlresult1)
    //         })
    //    },
       // 第二层 取话里面的内容
        // getrequest(){
    //         if(this.urlresult1[0] == undefined){
                
    //         }else{
    //             this.$http.get('http://api.pingcc.cn/?mhurl2='+ this.urlresult1[0].url +'').then((result)=>{
    //                 // console.log(result.body.list[0].img)
    //                 for(var i=0;i<result.body.list.length;i++){
    //                     this.urlres2 = result.body.list[i]
    //                     this.urlresult2.push(this.urlres2)
    //                 }
    //                 console.log(this.urlresult2);
    //             })
    //         }
    //         // console.log(this.urlresult1[0])
    //    },
         //get 请求 推荐动漫
        getrequest1(){
            this.$axios.get('http://api.pingcc.cn/?mhname=1').then((result)=>{
                // console.log(result.data.list)
                // console.log(result.body.list)
                for(var i=1;i<7;i++){
                    this.res1 = result.data.list[i]
                    this.result1.push(this.res1)
                    // console.log(this.result1);
                }
            })
       },
        // 佳作抢先看
       getrequest2(){
            this.$axios.get('http://api.pingcc.cn/?mhname=2').then((result)=>{
                for(var i=7;i<13;i++){
                    this.res2 = result.data.list[i]
                    this.result2.push(this.res2)
                }
            })
       },
        // 新作登场
       getrequest3(){
            this.$axios.get('http://api.pingcc.cn/?mhname=7').then((result)=>{
                for(var i=0;i<4;i++){
                    this.res3 = result.data.list[i]
                    this.result3.push(this.res3)
                    // console.log(this.result3);
                }
            })
       },
       
    },
}

</script>

<style scoped>
.text_left span{
    margin:5px 0 
}
 .mint-swipe-items-wrap{
     height: 100px;
 }
 .mint-swipe{
     height: 100px;
 }
    .mint-swipe {
        height: 300px;
        background:lightblue;
    }
    .mint-swipe img{
        width:100%;
        height:100%;
    }
    .mint-navbar{
        width:80%;
        height:100%;
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom:none;
        color: #000;
    }
    .recom{
        width:100%;
        height:100%;
        /* margin:0 auto; */
        /* overflow: scroll; */
    }
    /* 推荐的容器 */
    .recommend_container{
        width:100%;
        height:auto;
        overflow: hidden;
    }

    .dm_title{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding:5% 0;
    }
    .dm_title1{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .notice{
        width:100%;
        height:75%;
        position: relative;
        margin:0% auto 15%;
    }
    .noticetext{
        width:70%;
        /* height:50%; */
        display: flex;
        flex-direction:row;
        font-size:1.5rem;
        font-weight:1000;
        color: rgb(155,155, 155);
    }
    .risingList{
        color:#000;
    }
    .newlist{
        width:100%;
        height:50%;
        border-left:1px solid rgb(155,155, 155);
        border-right:1px solid rgb(155,155, 155);
        padding:0 14%;
    }
    .noticetext a{
        text-decoration:none !important;
    }
    .dmtj_text span{
        width:100%;
        height:40%;
        overflow: hidden;
        text-overflow: ellipsis;
        display:block;
        font-size:12px;
    }
    
    /* 最近在追 */
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
        font-size:20px;
        font-weight:1000;
    }
    /* 更多 */
    .more{
        font-size:16px;
        color:#000;
    }
    /* 最近的内容容器 */
    .recently_content{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        flex-wrap:wrap;
    }
    .recently_content .recently{
        width:32%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .recently_img{
        width:100%;
        height:65%;
        background:lightsalmon;
        border-radius:10px;
    }
    .recently_text{
        width:100%;
        height:27%;
        font-size:0.5rem;
        font-weight:lighter;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .recently_text span{
        display:block;
    }
    .recently_text em{
        font-style:normal;
        font-size:0.5em;
        color:rgb(155,155,155);
    }
    .recently_text .text_right{
        display:flex;
        flex-direction: column;
        align-self:center;
        color:rgb(155,155, 155);
    }

    /* 咚漫推荐 */
    .dm_recommend{
        width:100%;
        height:75%;
        margin:0% auto;
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
    .dm_title{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .ranking_container{
        width:300%;
        height:90%;
        display: flex;
        flex-direction:row;
        overflow: hidden;
        position:absolute;
        top:10%;
    }
    .dmtj_content{
        width:100%;
        height:45%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        flex-wrap:wrap;
        margin:0% 0;
        margin-bottom:10%;
    }
    .dmtj_content .dmtj{
        width:32%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding: 0 0 2.5% 0;
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
        justify-content:center;
    }
    .dmtj_text span{
        width:100%;
        height:40%;
        overflow: hidden;
        text-overflow: ellipsis;
        display:block;
    }
    .dmtj_text em{
        width:100%;
        height:40%;
        overflow: hidden;
        text-overflow: ellipsis;
        display:block;
        font-style:normal;
        font-size:12px;
        color:rgb(155,155,155);
    }
    /* 佳作抢先看 */
    .spexial{
        width:100%;
        height:85%;
        margin: 0% auto;
        background:rgba(155,155, 155,0.1);
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
    /* 新作登场 */
    .newworks{
        width:95%;
        height:75%;
        margin:0 auto 2%;
    }
    .finished{
        width:95%;
        height:75%;
        margin:0 auto 15%;
    }
    .finish_content{
        width:100%;
        height:90%;
        /* background: lightseagreen; */
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .finish_content .finish{
        width:49%;
        height:49%;
        /* background:lightpink; */
    }
    .finish_img{
        width:100%;
        height:70%;
        /* background:lightsalmon; */
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .finish_img img{
        width:70%;
        height:100%;
        /* background: #000;  */
        opacity: 0.8;
        border-radius:1em;
        box-shadow:0 0 3px #000;
    }
    .finish_text{
        width:100%;
        height:25%;
        display: flex;
        flex-direction: column;
        margin-top:5%;
        align-items:center;
    }
    .finish_text span{
        color:#000;
        font-size:12px;
        margin: 5px 0;
   
    }
    .finish_text em{
        color:rgb(155,155, 155);
        font-size:12px;
    } 
    
</style>