<template>
    <div>
        <div class="fetch">
            <div class="introduce">
                <div class="title">故事简介</div>
                <div class="introduce_cont">
                    {{data.introduce}}
                </div>
            </div>
            <div class="author">
                <div class="title">作者: 
                <span class="author_cont">
                     {{data.author}}
                </span>
                </div>
            </div>

     
        </div>
            
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'',
            url:{},
            data:{},
          
        }
    },
    mounted(){
        var that = this
        // 接受router-link 传过来的值
        let url = this.$route.query.url
        this.$axios.get('http://api.pingcc.cn/?mhurl1='+url+'',{
            parms:{

            }
        }).then((res)=>{
            
            that.data = res.data.data;
            // console.log(that.data);
          

        }).catch(err => {
            console.log(err);
        })
    }
}
</script>
<style scoped>
img{
    width: 50%;
    display: block;
    margin: auto
    
}

.title{
    padding-bottom:2%
}
.introduce{
    padding: 15px;
    font-size: 14px;
    text-align: left
}
.introduce_cont{
    color:#747474;
    line-height: 17px;
}
.author{
    padding: 0 15px;
    font-size: 14px;
    text-align: left
}
.author .title{
    color: #bdbdbd;
}
.author_cont{
    color: #494949
}
</style>