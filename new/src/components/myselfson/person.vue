<template>
    <div>
         <!-- 头部 -->
        <mt-header title="版本" id="mint-header">
            <router-link to="/appContent" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <br><br>
        <!-- 内容 -->
        <div class="hh">
            <img src="/images/timg.png">
            <div style="font-size:14px;font-weight:900">咚漫</div>
            <span>当前版本2.3.6</span>       
         </div>
         <!-- 退出 -->
        <router-link to="/myself">
            <mt-button size="large" id="mint-buttons" >更新最新版本2.3.6</mt-button>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .hh{text-align: center}
    .hh img{width:70px;height:70px}
</style>