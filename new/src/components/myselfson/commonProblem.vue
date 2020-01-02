<template>
    <div>
         <!-- 头部 -->
        <mt-header title="常见问题" id="mint-header">
            <router-link to="/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 内容 -->
        <van-cell @click="showPopup">IOS系统充值未到账</van-cell>
        <van-popup v-model="show">
            <div>IOS系统充值未到账</div>
            <div class="showContent">请先确认是否有待同步的订单；进入MY-我的钱包-点击充值按钮-点击此前充值的咚币数额(此前充值600咚币的话，继续点600咚币尝试同步哟)，此时不要输入
                密码付款，仅查看是否有弹窗显示订单同步中，在同步完成后将正常到账。
            </div>
        </van-popup>
         <van-cell @click="showPopup">IOS充值时提示“没有商品出售”怎么办？</van-cell>
        <van-popup v-model="show">
            <div>IOS充值时提示“没有商品出售”怎么办</div>
            <div  class="showContent">请先确认是否有待同步的订单；进入MY-我的钱包-点击充值按钮-点击此前充值的咚币数额(此前充值600咚币的话，继续点600咚币尝试同步哟)，此时不要输入
                密码付款，仅查看是否有弹窗显示订单同步中，在同步完成后将正常到账。
            </div>
        </van-popup>
         <van-cell @click="showPopup">购买与扣款数额不一致</van-cell>
        <van-popup v-model="show">
            <div>购买与扣款数额不一致</div>
            <div  class="showContent">请先确认是否有待同步的订单；进入MY-我的钱包-点击充值按钮-点击此前充值的咚币数额(此前充值600咚币的话，继续点600咚币尝试同步哟)，此时不要输入
                密码付款，仅查看是否有弹窗显示订单同步中，在同步完成后将正常到账。
            </div>
        </van-popup>
         <van-cell @click="showPopup">重新登录后咚币、咚豆没有了</van-cell>
        <van-popup v-model="show">
            <div>重新登录后咚币、咚豆没有了</div>
            <div  class="showContent">请先确认是否有待同步的订单；进入MY-我的钱包-点击充值按钮-点击此前充值的咚币数额(此前充值600咚币的话，继续点600咚币尝试同步哟)，此时不要输入
                密码付款，仅查看是否有弹窗显示订单同步中，在同步完成后将正常到账。
            </div>
        </van-popup>
         <van-cell @click="showPopup">充错金额是否可以退款？</van-cell>
        <van-popup v-model="show">
            <div>充错金额是否可以退款？</div>
            <div  class="showContent">请先确认是否有待同步的订单；进入MY-我的钱包-点击充值按钮-点击此前充值的咚币数额(此前充值600咚币的话，继续点600咚币尝试同步哟)，此时不要输入
                密码付款，仅查看是否有弹窗显示订单同步中，在同步完成后将正常到账。
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    data() {
    return {
      show: false
    }
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
  .showContent{
    font-size:12px;
    color:gray;
  }
</style>