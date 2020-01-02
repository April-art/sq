<template>
    <div>
        <!-- 头部 -->
        <mt-header title="意见反馈" id="mint-header">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- line webtoon -->
        <van-button type="primary" size="large">LINE WEBTOON</van-button>

        <!-- content -->
        <mt-field label="E-email" placeholder="请输入邮箱" type="email"></mt-field>
        <hr>
        <mt-field label="提问" placeholder="请输入提问内容" type="textarea" rows="4" ></mt-field>

        <mt-field label="社交账号" placeholder="请输入账号" type="text" ></mt-field>
        <mt-field label="地区" placeholder="例.美国、中国等" type="text"></mt-field>
        <mt-field label="使用机器" placeholder="例.PC、IPhone 等" type="text"></mt-field>
        <mt-field label="使用OS和版本" placeholder="例.PC" type="text"></mt-field>
        <mt-field label="网络连接环境" placeholder="wi-fi,3G,4G" type="text"></mt-field>
       
       <!-- 提问按钮 -->
        <router-link to="/">
            <mt-button type="primary" size="large">提问</mt-button>
        </router-link>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:''
        }
        
    }
}
</script>
<style scoped>
    #mint-header{
        background-color:white;
        color:black;
    }
</style>