<template>
    <div class="vuebody">
         <!-- 头部 -->
        <mt-header title="第一话" id="mint-header">
            <router-link to="/myCorton" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- content -->
        <div class="contents" v-for="(item,index) in listone" :key="index">
            <img :src="item.img">
        </div>

        <!-- 上下页 -->
        <div class="page">
            <van-row gutter="20" style="margin-right:0px">
                <div id="activeClass" >
                     <van-col  span="9" id="div" v-for="(key,index) in listone1" :key="index" @click="GetListImgs(key.url)" style="text-align:center;padding:15px;margin:20px 0px 0px 30px;">{{key.num}}</van-col>
                </div>
            </van-row>
        </div>    
    </div>
</template>
<script>
import $ from 'jquery';
    $(function(){
        
    })
    
export default {
    data(){
        return {
            listone:[],
            listone1:[],
            a:'wbmh360715',         
           
        }
    },
    created(){
        this.GetListImgs(this.a);
        this.GetListImg1()  
    },
    methods:{
        GetListImgs(a){
            var that = this;
             if(a==undefined){
                return;
            }else{
                that.a=a;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                $('#activeClass div').on('click',function(){
                // $(this).eq(0).removeClass('active')
                $('.mint-header-title').html($(this).html())
                $(this).addClass('active').siblings().removeClass('active')
        })
            }
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhurl2="+that.a+"",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone=response.data.list;
                // console.log(that.listone);
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
                console.log(response.data);
                that.listone1=response.data.list;
                console.log(that.listone1);
            })
        },
    }
}
</script>
<style scoped>
    .active{background:rgba(7, 14, 56, 0.6);}
     .contents img{
        padding:0px;
        width:360px;
        height:auto;
    }
    .page{margin-bottom: 200px;}
</style>