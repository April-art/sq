<template>
    <div>
          <!-- 头部 -->
        <mt-header  id="mint-header">
            <div @click="$router.back(-1)" slot="left">
                <mt-button icon="back">邮件</mt-button>
            </div>
        </mt-header>
        <!-- 内容 -->
         <mt-field type="email" placeholder="请输入邮箱地址" id="input"></mt-field>
        <!-- 尾部 -->
        <!-- 退出 -->
        <router-link to="/account">
            <mt-button size="large" id="mint-button">退出</mt-button>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
     #mint-header{
        background-color:white;
        font-size: 16px;
        color:black;
        border-bottom: 1px solid rgba(155,155,155,0.3)
    }
    #mint-button{
        background:rgba(0,0,0,0.9);
        color:white;
    }
</style>