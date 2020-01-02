template>
    <div class="vuebody">
        <!-- 头部 -->
        <mt-header title="第一话"  id="mint-header">
            <router-link to="/myCorton" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- content -->
        <div class="contents" v-for="(item,index) in listone" :key="index">
            <img :src="item.img">
        </div>
    <router-view></router-view>
        <!-- 上下页 -->
        <div class="page">
            <van-row gutter="20" style="margin-right:0px">
                <van-col offset="4" span="9" style="background:rgba(155,155,155,0.1);text-align:center;padding:15px;margin:20px 0px 0px 30px;">上一话</van-col>
                    <van-col span="9" class="active" style="text-align:center;padding:15px;margin:20px 0px 0px 30px;">全一话</van-col>
            </van-row>
        </div>
         
    </div>
</template>
<script>
export default {
    data(){
        return {
            listone:[]
        }
    },
    created(){
        this.GetListImgs();
    },
    methods:{
        GetListImgs(){
            var that = this;
            that.$axios({
                methods:"get",
                //接口地址  api-代理+接口端口号之后的其余地址
                url:"http://api.pingcc.cn/?mhurl2=wbmh272015",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
               }
            }).then(response =>{
            	//验证数据是否获取到
                // console.log(response.data);
                that.listone=response.data.list;
                // console.log(that.listone);
            })
        }
    }
}
</script>
<style scoped>
    .vuebody{
        margin-bottom:50px;
        width:360px;
    }
    /* .mint-header{padding:0px;} */
    .contents img{
        padding:0px;
        width:360px;
        height:auto;
    }
    .page{margin-bottom: 200px;}
    .active{background:rgba(7, 14, 56, 0.6);}
    
</style>