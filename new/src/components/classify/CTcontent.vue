<template>
    <div>
        <!-- 头部样式 -->
        <mt-header title="">
            <router-link to="/buttom/classify_header/weeks/Monday" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div @click="push" slot="right">
                <mt-button >关注</mt-button>
            </div>
           
        </mt-header>
        <!-- 内容 -->
        <div class="title">
            <div class="title_img">

            <img :src=data.cover alt="" class="">
            </div>
           <div class="title_content">
               <div class="tag">
               {{data.tag}}

               </div>
               <div class="name">
               {{data.name}}
               </div>
            </div>
        </div>
        <!-- 尾部内容 -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">
                <router-link :to="{path:'/CTcontent/Introduction',query:{url:url}}" tag="div">作品介绍</router-link>
            </mt-tab-item>
            
             
            <mt-tab-item id="3">
                <router-link :to="{path:'/CTcontent/list',query:{url:url}}" tag="div">选集</router-link>
            </mt-tab-item>
        </mt-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            selected:'1',
            url:{},
            data:{},
            list:{},
            push_data:{
                data_user_id:'',
                data_url:'',
                data_cover:'',
                data_name:'',
                data_author:'',
            }
        }
    },
    methods:{
        push(){
            console.log(this.$store.state.status)
            if(this.$store.state.status == -1){
                this.$toast({
                    message:'请先登录哦!现在为你跳转登录页面',
                    position:'buttom'
                });
                setTimeout(() => {
                    // that.$router.push({name:'buttom/myself',params:{user_id:user_id}});
                    window.location.href='http://localhost:8080/login' ;
        
                }, 1000);

            }else{
                let push_data = this.push_data;
                console.log(push_data)
                axios.post("http://localhost:8081/CTcontent",push_data).then(function(response){
                            console.log(response);
                }).catch(function(error){
                    console.log(error)
                });
                this.$toast({
                    message:'关注成功,可以再我的关注进行看',
                    position:'buttom'
                })

            }

            // console.log(this.data.name)
            // console.log(this.data.author)



          
        }
    },
    mounted(){
        var that = this
        let url = this.$route.query.url
        this.url = url
        this.push_data.data_url = url
   
        // console.log(this.$route.query.url)

        this.$axios.get('http://api.pingcc.cn/?mhurl1='+url+'',{
            parms:{

            }
        }).then((res)=>{
                // console.log(res.data.data);
                // console.log(res.data.list);
            that.data = res.data.data;
            that.list = res.data.list;
            // 获取数据 点击关注后要传送的数据
            that.push_data.data_cover =  res.data.data.cover
            that.push_data.data_name =  res.data.data.name
            that.push_data.data_author =  res.data.data.author
            that.push_data.data_user_id =  that.$store.state.status


        }).catch(err => {
            console.log(err);
        })
    },
}
</script>
<style scoped>
.mint-header{
    background-color:#000000; 
}
    .title{
        width:100%;
        height:200px;
       /* height: 400px; */
       overflow: hidden;
       position: relative;
        font-size:12px;
        text-align: center;
        display: flex
    }
    .title_img{
        position: relative;
        width: 100%;
    }
    .title_img::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.4;
        left: 0px
        

    }
    img{
        width: 100%;
      
        opacity: 0.8;

    }
    .tag{
        font-size:20px; 
    }
    .title_content{
        position: absolute;
        color: #fff;
        font-size: 28px;
        bottom: 20px;
        left: 10px;
        text-align: left
    }
</style>