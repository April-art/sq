<template>
    <div class="List">
 <!-- 上升榜 新作榜 总榜 -->
        <div class="Listnotice">
            <!-- <div class="title_dmtj"> -->
                
                <!-- 上升榜 新作榜 总榜的内容容器 -->
                <div class="dmtj_content">
                    <div class="dmtj" v-for="(key,index) in result1" :key="index">
                        <!-- 图片 -->
                        <div class="dmtj_img">
                            <img :src="result1[index].cover" alt="未找到图片">
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
                <router-view></router-view>
            </div>         <!-- title_dmtj -->
        </div>
        
        <!-- <router-view></router-view> -->
    <!-- </div> -->
</template>
<script>
// import { Toast } from 'mint-ui'
export default {
    data(){
        return {
             res1:'',
            result1:[],
        }
    },
    created(){
        this.getrequest1();
    },
    methods:{
         //get 请求 上升榜动漫
        getrequest1(){
            this.$http.get('http://api.pingcc.cn/?name=总裁').then((result)=>{
                for(var i=1;i<7;i++){
                    this.res1 = result.body.mhlist[i]
                    this.result1.push(this.res1)
                    // console.log(this.result1);
                }
            })
       },
    }
}
</script>
<style scoped>
      /* 上升榜 新作榜 总榜 */
    .List{
        width:100%;
        height:100%;
    }
    .Listnotice{
        width:100%;
        height:100%;
        margin:0% auto 5%;
        /* background:lightgreen; */
    }
    
    .dmtj_content{
        width:100%;
        height:45%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        flex-wrap:wrap;
        margin:5% 0 15% 0;
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
        height:30%;
        font-weight:lighter;
        display:flex;
        justify-content:center;
        flex-direction:column;
        text-align: center;
    }
    .dmtj_text span{
        width:100%;
        height:50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        display:block;
    }
    .dmtj_text em{
        width:100%;
        height:40%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        display:block;
        font-style:normal;
        font-size:0.5em;
        color:rgb(155,155,155);
    }

</style>