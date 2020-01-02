<template>
    <div class="allContainer">
        <div class="fetch">
              <img src="../.././assets/images/myself_img/timg.png" alt="">
             <span>没有临时保存的漫画!!!</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:''
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