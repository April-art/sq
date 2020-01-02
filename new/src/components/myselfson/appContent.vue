<template>
    <div class="appContent">
        <!-- 头部 -->
        <mt-header title="APP信息" id="mint-header">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        <!-- content -->
        <van-cell class="item" title="帮助" is-link  to="/helpImages" />
        <van-cell class="item" title="用户服务协议" is-link  to="/userAgrement" />
        <van-cell class="item" title="许可证" is-link  to="/agreeRun" />
        <van-cell class="item" title="版本" is-link  to="/person" value="2.3.6"/>
        <van-cell class="item" title="清理缓存" is-link  to="/"  value="13.02M"/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #mint-header{
        background-color:white;
        color:black;
        display: flex
    }
    .van-cell__title, .van-cell__value{
        display: flex
    }
</style>