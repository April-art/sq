<template>
    <div>
        <!-- 头部样式 -->
        <mt-header title="我的钱包">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/commonProblem" slot="right">
                <mt-button >常见问题</mt-button>
            </router-link>
           
        </mt-header>
        <!-- 内容 -->
        <div class="playMoney">
            <br><br><br>
            <div class="havePay">
                <b>0</b>
                <span>咚币</span>
                |
                <b>0</b>
                <span>咚豆</span></div>
            <br>
            <router-link to="/Immediately">
                 <mt-button type="primary" size="normal">立即充值</mt-button>
            </router-link>
           
        </div>
        <!-- 尾部内容 -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">
                <router-link to="/wallert/expenseRecord" tag="div">消费记录</router-link>
            </mt-tab-item>
             <mt-tab-item id="2"></mt-tab-item>
             
            <mt-tab-item id="3">
                <router-link to="/wallert/payrecord" tag="div">充值记录</router-link>
            </mt-tab-item>
        </mt-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'1'
        }
    }
}
</script>
<style scoped>
    .playMoney{
        width:100%;
        height:200px;
        background:rgba(155,155,155,0.1);
        font-size:12px;
        text-align: center;
    }
</style>