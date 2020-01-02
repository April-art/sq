<template>
    <div>
        <!-- 头部 -->
        <mt-header title="密码重置" id="mint-header">
            <div @click="$router.back(-1)" slot="left">
                <mt-button icon="back"></mt-button>
            </div>
        </mt-header>

        <!-- content -->
        <div class="content">
            <!-- 小提示 -->
            <div class="tibContent">
                <div>忘记密码了？别担心！</div>
                <div>重新设置一下，这次不要忘记啦!</div>
            </div>
            <!-- 密码重置表单 -->
            <mt-field placeholder="18078498129" disabled id="inputAccount"></mt-field>
            <mt-field type="text" placeholder="请输入验证码(6位)" id="input"></mt-field>
            <mt-field type="text" placeholder="请输入新密码(6~16位)" id="input" ></mt-field>
            <mt-field type="text" placeholder="请再次输入新密码(6~16位)" id="input"></mt-field>


        </div>
    </div>
</template>
<script>
export default {
    data(){
        return  {
            text:''
        }
    }
}
</script>
<style scoped>
    #mint-header{
        background-color:white;
        color:black;
        border-bottom: 1px solid rgba(155,155,155,0.3)
    }
    /* content样式 */
    .tibContent{
        text-align: center;
        padding:50px 0px;
        font-size:14px;
        color:rgba(155,155,155,0.999)
    }
    #inputAccount input{
        background:white;
         border-bottom:1px solid  rgba(155,155,155,0.3);
    }
    #input input{
        border-bottom:1px solid  rgba(155,155,155,0.3);
    }
</style>