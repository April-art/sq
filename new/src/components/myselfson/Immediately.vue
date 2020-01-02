<template>
    <div>
         <!-- 头部 -->
        <mt-header title="充值" id="mint-header">
            <router-link to="/wallert" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- content -->
        <div class="content">
             <p class="Contenttitle">咚币余额：<span>0</span></p>
            <!-- 栅格布局 -->
            <van-row gutter="20">
                <van-col offset="2" span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>
                </van-col>
            <van-col span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>    
            </van-col>
            <van-col span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>    
            </van-col>
            </van-row>
            <br>
            <!-- 第二行 -->
            <van-row gutter="20" class="money">
                <van-col offset="2" span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>
                </van-col>
            <van-col span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>    
            </van-col>
            <van-col span="7" id="van-col">
                <br>
                <div class="smallTitle">首充送90咚币</div>
                <br>
                <div>600咚币</div>
                <br>
                <van-button size="large"  id="mint-buttons">￥6</van-button>    
            </van-col>
            </van-row>

            <!-- 尾部 -->
            <div class="tib">
            <div>充值说明：</div>
            <div>1.咚豆等额代替咚币使用，通过充值获赠的咚豆有效期30天</div>
            <div>2.由于苹果商店限制，您在咚漫安卓App充值的咚币无法在非安卓客户端中使用</div>
            <div>3.前往MY-我的钱包-常见问题 客服为您解决充值问题</div>
            <br>
            <div id="dong">咚漫充值协议</div>
        </div>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.content{
    font-size: 16px
}
    .Contenttitle{
        padding:20px 15px;
        color:rgba(46, 44, 44, 0.9);
        font-size: 14px
    }
    #van-col{
        background:rgba(155,155,155,0.1);
        margin-left: 15px;
    }
    .smallTitle{
        font-size: 12px;
        border:1px solid red;
        /* border-radius: 30%; */
        background:red;
        color:white;
    }
     #mint-buttons{
        background:rgba(130, 59, 224, 0.6);
        color:white;
        padding:0px 15px;
    }
    #dong{
       text-align: center;
       color: black;
       font-weight: 900
    }
    .tib{
         font-size: 14px
    }
    .money{
        font-size: 20px
    }
</style>