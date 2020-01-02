<template>
    <div>
        <!-- 头部 -->
        <mt-header title="意见反馈" id="mint-header">
            <router-link to="/appContent" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- line webtoon -->
        <van-button  type="primary" size="large">LINE WEBTOON</van-button>
        <!-- navbar -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">
                <img slot="icon" src="../.././assets/images/myself_img/help.png">FAQ</mt-tab-item>
              
            <mt-tab-item id="2">
                 <img slot="icon" src="../.././assets/images/myself_img/center.png">帮助中心</mt-tab-item>
            <mt-tab-item id="3">
                <img slot="icon" src="../.././assets/images/myself_img/sent.png">报告问题</mt-tab-item>
        </mt-navbar>
        <br>
        <!-- navbar content -->
        <mt-tab-container v-model="selected" id="mt-tab-container">
            <mt-tab-container-item id="1">
                <router-link to="/webtoon" tag="div"> <p>使用webtoon APP时收费吗？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>使用webtoon APP时收费吗？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>使用webtoon APP时收费吗？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>使用webtoon APP时收费吗？</p></router-link>
                <br>
               
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <router-link to="/" tag="div"> <p>webtoon指的是什么？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>webtoon指的是什么？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>webtoon指的是什么？</p></router-link>
                <br>
                <router-link to="/" tag="div"> <p>webtoon指的是什么？</p></router-link>
                <br>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
               <router-link to="/" tag="div"> <p>报告问题</p></router-link>
                <br>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'1',
           popupVisible:false
        }
    },
    methods:{
        showContent(){
            this.popupVisible = true;
        }
    }
}
</script>
<style scoped>
    #mt-tab-container{
       padding:0px 15px;
       font-size: 16px;
}
</style>