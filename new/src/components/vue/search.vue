<template>
    <div class="type">
        
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
<style scoped>

</style>>

</style>