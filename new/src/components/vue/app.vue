<template>
    <div>
        <h1>这是App组件</h1>
        <!-- <mt-button type="primary" icon="more" @click="show">primary</mt-button> -->
        <!-- 底部固定导航 -->
        <mt-tabbar>
            <mt-tab-item v-for="(key,index) in bottomnav" :key="index" id="更新">
                <!-- <a href="key.href"> -->
                    <img slot="icon" :src="key.src" :key="index">
                    {{key.idname}}
               <!-- </a> -->
            </mt-tab-item>
        </mt-tabbar>

        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            // 底部固定导航的数据
            bottomnav:[
                {idname:'更新',src:'../images/bottom/update.png',href:'/update'},
                {idname:'发现',src:'../images/bottom/find.png',href:'/find'},
                {idname:'我的漫画',src:'../images/bottom/smile.png',href:'/cartoon'},
                {idname:'MY',src:'../images/bottom/my.png',href:'/my'},
            ]
        }
    },
    created(){
        // this.getList()
    },
    methods:{
        
    }
}
</script>
<style>

</style>