<template>
    <div>
    
        <div class="limit_cont">
            <div class="limit_img">
                <img src="../.././assets/images/myself_img/timg.png" alt="">
                <!-- ../.././assets/images/myself_img/timg.png -->
            </div>
            <div class="limt_title">
                想要查看更多,请先登录哦~
            </div>
            <div class="limt_login">
                <router-link to="/login" tag="div" class="go_login">去登陆</router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .limit_img img{
        width: 80%;
    }
    .limit_cont{
        padding-top:5%; 
        font-size: 16px;
       
    }
    .limt_title{
        padding:20%  0 10% 0;
    }
    .limt_login{
        display: flex;
        margin: auto;
        /* padding-top:20%;  */
        width: 300px;
        height: 50px;
        background:#bb92cc;

    }
    .go_login{
         color: #fff;
        margin: auto;
        font-size: 18px
    }
</style>