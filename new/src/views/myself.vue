<template>
    <div>
        <!-- 头像框 -->
        <div class="head-img">
            <img src="../assets/images/myself_img/zoo.jpg">
            <router-link to="/login" tag="span" v-show="see" >登录</router-link>
            <div class="user" v-show="hid">{{user}}</div>
     
            <!-- <div>{{id}}</div> -->
        </div>
        <!-- 内容 -->
        <van-cell title="账号管理" is-link @click="push()" icon="manager-o"/>
        <van-cell title="我的钱包"  is-link   @click="push1()" icon="cash-back-record"/>
        <van-cell title="自动购买设置" is-link   @click="push2()" icon="balance-pay"/>
        <van-cell title="咚漫消息" is-link  to="/cartonSents" icon="volume-o" value="服务器系统维护通知"/>
        <van-cell title="推送设置" is-link  to="/cartonSents" icon="bell"/>
        <van-cell title="意见反馈" is-link  to="/advice" icon="comment-o" value="写反馈"/>
        <van-cell title="APP消息" is-link  to="/appContent" icon="warning-o"/>
        
    </div>

</template>
<script>
import { log } from 'util';
export default {
    name:'myself',
    data(){
        return {
            user:{},
            user_id:{},
           
            text:'',
            see:true,
            hid:false
        }
    },
    props:{

    },
    methods:{
        
        push(){
            let status = this.$store.state.status
            if(status == -1){
                this.$router.push({
                    path:'/buttom/limit'
                })
            }else{
                this.$router.push({
                    path:'/account',
                    query:{
                        user_id:this.user_id,
                        user_name:this.user
                    }
                })

            }
           
        },
         push1(){
            let status = this.$store.state.status
            if(status == -1){
                this.$router.push({
                    path:'/buttom/limit'
                })
            }else{
                this.$router.push({
                    path:'/wallert',
                    query:{
                        user_id:this.user_id,
                        user_name:this.user
                    }
                })

            }
           
        },
         push2(){
            let status = this.$store.state.status
            if(status == -1){
                this.$router.push({
                    path:'/buttom/limit'
                })
            }else{
                this.$router.push({
                    path:'/autoPay',
                    query:{
                        user_id:this.user_id,
                        user_name:this.user
                    }
                })

            }
           
        },

        
        //  id:this.$router.params.user_id,
    // http://localhost:8080/buttom/myself?

    },
    mounted(){
        var that = this
        //     let id = that.$router.parmas.id
        //     console.log(id);
        this.$axios.get('http://localhost:8081/buttom/myself',{
            parmas:{
            
            }
        }).then((res)=>{
            // console.log(1111111111111111111)
            // console.log(res.data[0].user_name);
            that.user = res.data[0].user_name;
            that.user_id = res.data[0].user_id
            // console.log(that.user);
            // console.log()
            
            // this.$store.state.status =  that.user
         

            if(res.status == 200){
                // console .log(1111)
                that.show()
            }
        }).catch(err=>{
            console.log(err);
        });


    },
    computed:{
        show(){
            this.$store.state.status = this.user_id;
            console.log(this.$store.state.status)


            // console.log(!this.see)
            this.see=!this.see
            this.hid=!this.hid
        },
        
        }
}
</script>
<style scoped>
    .user{
        font-size: 20px
    }
      .head-img{
        display: flex;
        padding-left: 10px;
        height:50px;
        line-height:50px;
    }
    .head-img img{
        width:50px;
        height:50px;
        margin-right:10px;
        border-radius: 50%;
    }
.van-cell__title, .van-cell__value{
    display: flex
}
    van-cell{margin:50px 0px 0px 0px};
    van-icon{text-align: left;display: flex}

</style>