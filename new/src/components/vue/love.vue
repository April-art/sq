<template>
    <div class="love">
        <!-- 推荐 -->
        <router-link to="/love">
            <!-- 轮播图 -->
            <mt-swipe :auto="4000" >
                <mt-swipe-item>
                   
                    <img src="../.././assets/images/love/1.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../.././assets/images/love/2.jpg" alt="">
                  
                </mt-swipe-item>
                <mt-swipe-item>
                 
                    <img src="../.././assets/images/love/3.jpg" alt="">

                </mt-swipe-item>
                <mt-swipe-item>
                 
                    <img src="../.././assets/images/love/4.jpg" alt="">

                </mt-swipe-item>
                <mt-swipe-item>
                 
                    <img src="../.././assets/images/love/5.jpg" alt="">

                </mt-swipe-item>
            </mt-swipe>
            <div class="recommend_container">
                <!-- v-touch -->
                <v-touch v-on:swipeleft="swiperleft"  :swipe-options="{direction: 'horizontal'}" v-on:swiperight="swiperright" class="love_ranking" ref='abc'>
                    <!-- 恋爱类排行 -->
                    <div class="l_rangking">
                        <div class="title_dmtj">
                            <div class="dm_title">
                                <div class="recentlytext">恋爱类排行</div>
                                <div class="more">更多
                                    <span class="glyphicon glyphicon-chevron-right"></span>
                                </div>
                            </div>
                            <div class="ranking_container">
                                <div class="ranking_content">
                                    <div class="lr" v-for="(key,index) in result1" :key="index">
                                        <div class="lr_img">
                                            <img :src="result1[index].cover" alt="未找到图片">
                                            <em>{{index+1}}</em>
                                        </div>
                                        <div class="lr_text">
                                            <span>{{result1[index].name}}</span>
                                            <em>{{result1[index].name}}</em>
                                            <i class="like">4464.7万</i>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="ranking_content">
                                    <div class="lr" v-for="(key,index) in result2" :key="index">
                                        <div class="lr_img">
                                            <img :src="result2[index].cover" alt="未找到图片">
                                            <em>{{index+4}}</em>
                                        </div>
                                        <div class="lr_text">
                                            <span>{{result2[index].name}}</span>
                                            <em>{{result2[index].name}}</em>
                                            <i class="like">4464.7万</i>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="ranking_content">
                                    <div class="lr" v-for="(key,index) in result3" :key="index">
                                        <div class="lr_img">
                                            <img :src="result3[index].cover" alt="未找到图片">
                                            <em>{{index+7}}</em>
                                        </div>
                                        <div class="lr_text">
                                            <span>{{result3[index].name}}</span>
                                            <em>{{result3[index].name}}</em>
                                            <i class="like">4464.7万</i>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </div>-->
                </v-touch>
                <!-- 暗恋,这件小事 -->
               <div class="Love_health">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">暗恋,这件小事</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        
                        <div class="lh_content">
                            <div class="dmtj" v-for="(key,index) in result4" :key="index">
                                <!-- 图片 -->
                                <div class="dmtj_img">
                                    <img :src="result4[index].cover" alt="未找到图片">
                                </div>
                                <!-- 文字 -->
                                <div class="dmtj_text">
                                    <div class="text_left">
                                        <span>{{result4[index].name}}</span>
                                        <em>{{result4[index].name}}</em>
                                    </div>
                                </div>
                            </div>
                            
                        </div>     <!-- dmtj_content -->
                    </div>         <!-- title_dmtj -->
                </div>              
               <!-- 此生有你,不负韶华 -->
                <div class="fantastic">
                    <div class="title_dmtj">
                        <div class="recently_title">
                            <div class="recentlytext">此生有你,不负韶华</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>

                        <div class="fw_content">
                            <div class="fw" v-for="(key,index) in result5" :key="index">
                                <!-- 图片 -->
                                <div class="fw_img">
                                    <img :src="result5[index].cover" alt="未找到图片">
                                </div>
                                <!-- 文字 -->
                                <div class="fwtext">
                                    <span>{{result5[index].name}}</span>
                                    <em>{{result5[index].name}}</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 完结佳作 -->
                <div class="finished">
                    <div class="title_dmtj">
                        <div class="dm_title">
                            <div class="recentlytext">完结佳作</div>
                            <div class="more">更多
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </div>
                        </div>
                        <div class="finish_content">
                            <div class="finish" v-for="(key,index) in result6" :key="index">
                                <div class="finish_img">
                                    <img :src="result6[index].cover" alt="未找到图片">
                                </div>
                                <div class="finish_text">
                                    <span>{{result6[index].name}}</span>
                                    <em>{{result6[index].name}}</em>
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
            a:0,
            b:100,
            res1:'',
            res2:'',
            res3:'',
            res4:'',
            res5:'',
            res6:'',
            result1:[],
            result2:[],
            result3:[],
            result4:[],
            result5:[],
            result6:[],
            // 底部固定导航的数据
            selected:'1',
            event: '',
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
        this.getrequest4();
    },
    computed: {
     
    },
    methods:{
          //get 请求 恋爱类的动漫
         getrequest1(){
            this.$axios.get('http://api.pingcc.cn/?name=恋爱类').then((result)=>{
                // console.log(result.data.mhlist)
                for(var i=1;i<4;i++){
                    this.res1 = result.data.mhlist[i]
                    this.result1.push(this.res1)
                    // console.log(this.result1);
                }
                for(var i=4;i<7;i++){
                    this.res2 =result.data.mhlist[i]
                    this.result2.push(this.res2)
                    // console.log(this.result2);
                }
                for(var i=7;i<10;i++){
                    this.res3 = result.data.mhlist[i]
                    this.result3.push(this.res3)
                    // console.log(this.result3);
                }
              
            })
       },
       //get 请求 暗恋这件小事的动漫
         getrequest2(){
            this.$axios.get('http://api.pingcc.cn/?name=暗恋').then((result)=>{
                // console.log(result.body.mhlist)
                for(var i=4;i<10;i++){
                    this.res4 = result.data.mhlist[i]
                    this.result4.push(this.res4)
                    // console.log(this.result4);
                }
              
            })
       },
       //get 请求 此生有你,不负韶华的动漫
         getrequest3(){
            this.$axios.get('http://api.pingcc.cn/?name=此生有你').then((result)=>{
                // console.log(result.body.mhlist)
                for(var i=4;i<8;i++){
                    this.res5 = result.data.mhlist[i]
                    this.result5.push(this.res5)
                    // console.log(this.result5);
                }
              
            })
       },
        //get 请求 完结的动漫
         getrequest4(){
            this.$axios.get('http://api.pingcc.cn/?name=佳作').then((result)=>{
                // console.log(result.body.mhlist)
                for(var i=8;i<12;i++){
                    this.res6 = result.data.mhlist[i]
                    this.result6.push(this.res6)
                    // console.log(this.result6);
                }
                
            })
       },
       
        swiperleft: function () {
            if(this.a <= -2){
                // this.a == -3
                this.$router.push({'path':'/find/young'});
                // console.log(this.a);
            }else if( this.a == -2){
                this.a = this.a - 1
                $('.ranking_container').animate({'left':this.a * this.b + '%'})
                // console.log(this.a)
            }else{
                this.a = this.a - 1
                $('.ranking_container').animate({'left':this.a * this.b + '%'})
                // console.log("左划");
                // console.log(this.a)
            }
           
        },
        swiperright: function () {
            if(this.a == 0){
                this.a = this.a + 1
                $('.ranking_container').animate({'left':this.a * this.b + '%'})
                this.$router.push({'path':'/find/dongtui'});
            }else{
                this.a = this.a + 1
                $('.ranking_container').animate({'left':this.a * this.b + '%'})
                 // ts.style.left = +'100%';
                // console.log("右滑");
                // console.log(this.a)
            }
           
        }
    }
}

</script>
<style scoped>
    .mint-swipe {
        height:300px;
        background:lightblue;
    }
    .mint-swipe img{
        width:100%;
        /* height:100%; */
    }
    .love{
        width:100%;
        height:100%;
    }
    .recommend_container{
        width:100%;
        height:70%;
    }
    /* 恋爱类排行 */
    .love_ranking{
        width:100%;
        height:70%;
        margin:0 0 3% 0;
    }

    .l_rangking{
        width:100%;
        height:450px;
        overflow: hidden;
        margin:0 0 3% 0;
    }
     .ranking_container{
        width:300%;
      
        display: flex;
        flex-direction:row;
        /* overflow: hidden; */
        position:absolute;
        top:10%;
    }
    .ranking_content{
        width:100%;
        height:400px;
        /* background:lightpink; */
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    .ranking_content .lr{
        width:100%;
        height:30;
        /* background:rgb(114, 219, 28); */
        display: flex;
        flex-direction: row;
        align-items:center;
    }
    .lr_img{
        width:30%;
        height:100%;
        /* background: lightsalmon; */
        border-radius:1rem;
        position: relative;
    }
    .lr_img img{
        width:80%;
        height:100%;
        background: #000;
        opacity: 0.8;
    }
    .lr_img em{
        position:absolute;
        top:10%;
        left:10%;
        font-size:12px;
        font-weight:1000;
        text-shadow:0px 0px 5px goldenrod;
        color:#000;
    }
    .lr_text{
        font-size: 16px;
        width:60%;
        height:80%;
        display:flex;
        flex-direction: column;
        margin:0 0 0 3%;
    }
    .lr_text em{
        color:rgb(155,155, 155);
        font-size:12px;
        margin: 10px 0 ;
    }
    .like{
     
        /* background-image:url('../images/bottom/like.png'); */
        background-repeat: no-repeat;
        background-size:27%;
        color:lightskyblue;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .recently_title{
        width:95%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding:5% 0;
        margin:0 auto;
    }
    .recentlytext{
        font-size:18px;
        font-weight:1000;
    }
    /* 更多 */
    .more{
        font-size:18px;
        color:#000;
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
        font-size: 12px;
        width:100%;
        /* height:40%; */
        overflow: hidden;
        text-overflow: ellipsis;
        display:block;
        margin: 5px 0;
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
    /* 完结佳作 */
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
        background: #000;
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
        margin: 5px 0;
    } 
    .dm_title{
        width:100%;
        height:10%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding: 15px 0;
    }
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
    .title_dmtj{
        width:95%;
        height:100%;
        display:flex;
        flex-direction:column;
        margin:0 auto;
        color:#000;
        position: relative;
    }
    /* 奇幻  这世界太疯狂 */
    .fantastic{
        width:100%;
        height:450px;
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
        height:70%;
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
        margin: 5px 0;
    }
</style>