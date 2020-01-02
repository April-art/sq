<template>
    <div>
        <div class="fetch">
            <router-link :to="{path:'/comic',query:{url:list.url}}" class="list_cont" v-for="(list,index) in list" :key="index">
                    <div class="list_title">{{list.num}}</div>
            </router-link>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            test:'',
            url:{},
            list:{},
        }
    },
    mounted(){
        var that = this
        // 接受router-link传过来的值
        let url = this.$route.query.url
        this.$axios.get('http://api.pingcc.cn/?mhurl1='+url+'',{
            parms:{

            }
        }).then((res)=>{
            that.list = res.data.list.slice(0,50);
            // console.log(that.list);
        }).catch(err=>{
            console.log(err);
        });
    }
}
</script>
<style scoped>
img{
    width: 50%;
    display: block;
    margin: auto
    
}
.fetch {
    padding:5% 0 5% 5%;
    font-size:20px;
    text-align :left;
}
.list_title{
    padding: 10px
}
</style>