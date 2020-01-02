<template>
    <div class="all">
        <!-- 头部返回 -->
        <mt-header title="公告事项">
            <router-link to="/buttom/myself" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <br>
        <!-- 折叠面板 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item name="1">
                <div slot="title">公告
                <div slot="content">服务器系统维护通知</div>
                <div slot="time">2019.09.29</div>
                </div> 
                亲爱的咚粉们：因服务器升级，咚漫APP和网页从即日起至暂时关闭评论功能及修复给人信息功能。系统维护升级完成，我们会及时通知，由此给您造成的不便，敬请大家谅解！
            </van-collapse-item>
        </van-collapse>
        <br>
         <!-- 折叠面板 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item name="2">
                <div slot="title">公告
                <div slot="content">服务器系统维护通知</div>
                <div slot="time">2019.09.29</div>
                </div> 
                亲爱的咚粉们：因服务器升级，咚漫APP和网页从即日起至暂时关闭评论功能及修复给人信息功能。系统维护升级完成，我们会及时通知，由此给您造成的不便，敬请大家谅解！
            </van-collapse-item>
        </van-collapse>
        <br>
         <!-- 折叠面板 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item name="3">
                <div slot="title">公告
                <div slot="content">服务器系统维护通知</div>
                <div slot="time">2019.09.29</div>
                </div> 
                亲爱的咚粉们：因服务器升级，咚漫APP和网页从即日起至暂时关闭评论功能及修复给人信息功能。系统维护升级完成，我们会及时通知，由此给您造成的不便，敬请大家谅解！
            </van-collapse-item>
        </van-collapse>
        <br>
        <!-- 折叠面板 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item name="4">
                <div slot="title">公告
                <div slot="content">服务器系统维护通知</div>
                <div slot="time">2019.09.29</div>
                </div> 
                亲爱的咚粉们：因服务器升级，咚漫APP和网页从即日起至暂时关闭评论功能及修复给人信息功能。系统维护升级完成，我们会及时通知，由此给您造成的不便，敬请大家谅解！
            </van-collapse-item>
        </van-collapse>
        <br>
        <!-- 折叠面板 -->
        <van-collapse v-model="activeNames">
            <van-collapse-item name="5">
                <div slot="title">公告
                <div slot="content">服务器系统维护通知</div>
                <div slot="time">2019.09.29</div>
                </div> 
                亲爱的咚粉们：因服务器升级，咚漫APP和网页从即日起至暂时关闭评论功能及修复给人信息功能。系统维护升级完成，我们会及时通知，由此给您造成的不便，敬请大家谅解！
            </van-collapse-item>
        </van-collapse>
        
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            activeNames:['0']
        }
    }
}
</script>
<style scoped>
    .all{
        padding-bottom:15% ;
        width:100%;
        height:100%;
        background:gainsboro;
    }
</style>