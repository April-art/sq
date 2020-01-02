<template>
    <div>
        <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                      <!-- 最近观看列表 -->
                    <div class="looked">还没有观看的漫画，去看看其他人都在看什么吧!!!</div>
                    <!-- 大家都在看推荐列表 -->
                    <div class="allLook">
                        <div class="lookTitle">大家都在看</div>
                        <!-- 所有推荐漫画容器 -->
                            <router-link to="/lookCarton" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(1,2)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li>{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/twoPart" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(2,3)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li>{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/threeBook" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(3,4)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li>{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                            <!-- 所有推荐漫画容器 -->
                            <router-link to="/fourBook" tag="div">
                                <div class="container" v-for="(item,index) in listone.slice(4,5)" :key="index">
                                    <!-- 漫画图片 -->
                                    <img :src="item.cover" width="70" heigh="70">
                                    <ul>
                                        <li>{{item.name}}</li>
                                        <li>9.81</li>
                                        <li>7034万</li>
                                    </ul>
                                </div>
                            </router-link>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
    </div>
</template>
<script>
export default {
     data(){
         return {
             selected:'',
             listone:[],
             img:[
                 {src:'./images/lookFace.jpg',title:'看脸时代',grade:9.81,like:'7034万'},
                 {src:'./images/god.jpg',title:'女神降临',grade:9.81,like:'7034万'},
                 {src:'./images/zoo.jpg',title:'zoo',grade:9.81,like:'7034万'}
             ]
         }
     }, //执行方法
    created(){
        this.GetListImg()
    },
     methods:{
         GetListImg(){
            var that = this;
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhname=大家都在看",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone=response.data.list;
                console.log(that.listone);
            })
        },
     }
}
</script>
<style scoped>
    /* 最近观看内容样式 */
    .looked{
        width:auto;
        height:auto;
        padding:30px 0px 30px 10px;
        font-size: 14px;
        background:white;
        margin-bottom: 10px;
    }
    /* 大家都在看内容样式 */
    .allLook{
        background:white;
        margin-left: 10px
    }
    .lookTitle{
        padding-bottom: 5px;
        border-bottom:2px solid gainsboro
    }
    /* 都在看所有列表样式 */
    .container{
        margin:10px 0px 10px 0px;
        display: flex;
        border-bottom:1px solid gainsboro;
    }
    .container img{
        flex:2;
    }
    .container ul{
        margin-left: 30px;
        list-style: none;
        flex: 8;
    }
    .container ul li:first-child{
        font-size:20px;
    }
    .container ul li:nth-child(2){
        color:rgba(128,0,128,0.5)
    }
    .container ul li:nth-child(3){
        color:gray;
        font-size:14px;
    }
</style>