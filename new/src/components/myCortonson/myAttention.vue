<template>
    <div>
        <!-- tabbar content -->
        <mt-tab-container v-model="selected">
                <mt-tab-container-item id="2">
                    <div class="attention">还没有关注的漫画，添加到我的关注即可接收更新提示!!!</div>
                </mt-tab-container-item>
        </mt-tab-container>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:'2'
        }
    }
}
</script>
<style scoped>
     /* 关注内容样式 */
    .attention{
        width:auto;
        height:auto;
        padding:30px 0px 30px 10px;
        font-size: 14px;
        background:white;
        margin-bottom: 10px;
    }
</style>