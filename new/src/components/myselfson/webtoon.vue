<template>
    <div>
          <!-- 头部 -->
        <mt-header title="意见反馈" id="mint-header">
            <router-link to="/appContent" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- line webtoon -->
        <van-button  type="primary" size="large">FAQ</van-button>
        <br><br>
        <p class="Title">使用webtoon APP时收费吗？</p>
        <br>
        <p class="content">LINE webtoon APP 的下载及使用都是免费的，但是，在没有WiFi的清况下使用3G/4G浏览时都会产生额外的通信费用</p>
        <br>
        <p class="more">More</p>

        <!-- 为题栏 -->
        <mt-tab-container v-model="selected" id="mt-tab-container">
            <mt-tab-container-item id="1">
                <router-link to="/webtoon" tag="div"> <p>使用webtoon APP时收费吗？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>想问下关于著作权和版权的问题。</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>图片读取时间过长。</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>无法下载App</p></router-link>
                <br>
               
            </mt-tab-container-item>
        </mt-tab-container>
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
    .Title{
        font-size:24px;
        padding:10px 15px;
        border-bottom: 1px solid rgba(155,155,155,0.3)
    }
    .content{
        font-size: 14px;
        padding:10px 15px;
        border-bottom: 1px solid rgba(155,155,155,0.3)
    }
    .more{
        font-size: 14px;
        font-weight: 900;
        padding:10px 15px;
        border-bottom: 1px solid rgba(155,155,155,0.3)
    }
    #mt-tab-container{
        font-size: 16px;
        padding-top:12px 
    }
</style>