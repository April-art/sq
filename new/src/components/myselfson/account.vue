<template>
    <div>
        <!-- 头部 -->
        <mt-header title="账号管理">
        <router-link to="/buttom/myself" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>

        <!-- 详情 -->
        <van-cell :title="user"  icon="manager-o" />
        <van-cell title="咚漫ID:" :value="userid"  icon="cash-back-record"/>
        <van-cell title="密码重置" is-link  to="/pwdReset" icon="lock"/>
        <van-cell title="认证邮箱，接收作品最新消息" is-link  to="/inputEmail" icon="comment-o"/>
        <br><br>
       <!-- 退出 -->
        <router-link to="/buttom/myself">
            <mt-button size="large" id="mint-buttons" >退出</mt-button>
        </router-link>
        <br><br>
        <!-- 温馨提示 -->
        <div class="tib">
            <div>登录账号时</div>
            <div>关注的漫画将会保存到您的个人账号</div>
            <div>最近观看与下载漫画将会保存到您的设备上</div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'22',
            userid:{},
            user:{}
        }
    },
    methods:{
        },
    mounted(){
            let user_id = this.$route.query.user_id
            let user = this.$route.query.user_name

            this.userid = user_id;
            this.user = user
            console.log(this.$route.query.user_id)
            console.log(this.$route.query.user_name)

            
   

    }
}
</script>
<style scoped>
    .tib{
        padding:15px;
        font-size:12px;
        color:rgba(155,155,155,0.9)
    }
    #mint-buttons{
        background:rgba(130, 59, 224, 0.6);
        color:white;
        padding:0px 15px;
    }
    .van-cell__title, .van-cell__value{
    display: flex
}
</style>