<template>
    <div>
        <div class="comic">
            <div class="comic_cont" v-for="(data,index) in data" :key="index">
                
                <img :src=data.img alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:{},
            data:{}
        }
    },
    mounted(){
        var that = this
        // 接受router-link 传过来的值
        let url = this.$route.query.url
        console.log(url)
        this.$axios.get('http://api.pingcc.cn/?mhurl2='+url+'',{
            parms:{

            }
        }).then((res)=>{
            that.data = res.data.list
            console.log(that.data )
        }).catch(err => {
            console.log(err)
        })

    },
}
</script>
<style scoped>
    .comic{
        background-color:#fafafa; 
    }
    .comic_cont{
        padding: 15px 15px 0;
    }
    img{
        width: 100%;
    }
</style>