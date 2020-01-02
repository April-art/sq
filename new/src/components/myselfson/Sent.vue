<template>
    <div>
        <!-- 头部 -->
        <mt-header title="推送设置">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
       <van-cell-group>
            <van-switch-cell v-model="value" title="每日签到" />
            <van-switch-cell v-model="checked" title="新作品上线" />
            <van-switch-cell v-model="checked1" title="关注漫画有更新" />
            <van-switch-cell v-model="checked2" title="热门福利活动提醒" />
            <van-switch-cell v-model="checked3" title="评论被选为人气热评" />
            <van-switch-cell v-model="checked4" title="评论被回复" />
        </van-cell-group>
        <!-- 页脚 -->
        <div class="footer">
            <div>版权合作QQ：1905832155</div>
            <div>dl_ipjdnfjkiu@djalkgknk.cn</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value:false,
            checked:true,
            checked1:true,
            checked2:true,
            checked3:true,
            checked4:true
        }
    },
    methods:{
        turn:function(){
            console.log(this.checked)
        }
    }
}
</script>
<style scoped>
    .footer{
        margin:100px 100px;
        font-size:12px;
        color:rgba(155,155,155,0.9)
    }
</style>