<template>
    <div>
        <mt-header title="自动购买设置">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

         <div class="fetch">
             <img v-for="key in img" :src="key" :key="key">
             <span>还没有设定自动购买的漫画!!!</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            img:['../.././assets/images/myself_img/timg.png']
        }
    }
}
</script>
<style scoped>
     /* 临时保存内容样式 */
    .fetch{
        width:auto;
        height:auto;
        text-align: center;
        line-height: 320px;
        padding:30px 0px 30px 10px;
        font-size: 14px;
        background:white;
        margin-bottom: 10px;
    }
    .fetch img{width:70px;height:70px;}
    .fetch span{display:block;margin-top: -300px}
</style>