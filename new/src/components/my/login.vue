<template>
    <div>
        <div class="type">
  
            <div class="main">
                <form class="post">
                    <div class="list">
                        <div class="account_content">
                            <input class="user_phone" type="text" placeholder="手机号" v-model='msg.user_phone'>
                        </div>
                        <div class="password_content">
                            <input class="password" type="password" placeholder="请输入密码" v-model='msg.user_password'>
                        </div>
                    </div>
                    <div class="list_footer">
                        <a class="identify">短信验证码登录</a>
                        <router-link ref="a" to="/buttom/register" class="register">免费注册</router-link>
                    </div>
                    <div class="login_btn"><input type="button" value="登录" @click="submit"></div>
                    <div class="prompt">
                        用户账号或密码错误
                    </div>
                </form>
            </div>
            <!-- <div class="footer"></div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data(){
        return{
            msg:{
               user_phone:'' ,
               user_password:'',
            },
            login:{
            //    user_id:'',
            //    user_name,

            }
        }
    },
    computed:{

    },
    methods:{
        submit(){
            var that = this
            // if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(that.msg.user_phone))){
            //         that.$toast({
            //             message:'手机号码错误',
            //             position:'bottom',
                        
            //         })
            // }else if(!(/^(\w){4,20}$/.test(that.msg.user_password))){
            //         that.$toast({
            //             message:'密码错误',
            //             position:'bottom',
                        
            //         })
            // }else{
                let forData = that.msg;
                axios.post('http://localhost:8081/buttom/login',forData).then(function(response){
                console.log(forData);
            
                    if(response.data[0] == undefined){
         
                         that.$toast({
                        message:'密码或手机号错误',
                        position:'bottom',
                        
                    })
                    //    that.$toast({
                    //     message:'手机号码错误',
                    //     position:'bottom',
                        
                    // })
                    }else{
                                console.log(response.data[0]);
                              let user_id = response.data[0].user_id;
                               let user_name = response.data[0].user_name;
                                // console.log( user_name);
                                console.log( user_id);
                                console.log(that.$store.state.status)

                                // that.$store.state.status = user_id;
                                // console.log(that.$store.state.status)
                         that.$toast({
                            message:'登录成功,即将跳转',
                            position:'buttom'
                        })
                        setTimeout(() => {
                            // that.$router.push({name:'buttom/myself',params:{user_id:user_id}});
                           window.location.href='http://localhost:8080/buttom/myself' ;
                
                        }, 1000);
                    }
                }).catch(function(error){
                    console.log(error);
                })

                //  this.$toast({
                //         message:'手机号或密码错误',
                //         position:'bottom',
                        
                //     })
            // }
        }
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    box-sizing:border-box
}
.type{
    width:100%;
    /* background: chartreuse; */
    padding: 50% 0;
}
.header{
    width:100%;
    /* background: coral; */
    padding:10% 0 0 0;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:10%;
}
.header img{
    width:21%;
    height:auto;
}


.main{
    width:100%;
    padding:0 5%;
}
.list{
    width:100%;
    font-size:16px ;
}
.list div{
    width:100%;
    border-bottom:1px solid gray;
}
.list div input{
    border:none;
    width:100%;
    padding:0% 0 3% 3%;
    outline:none;
    font-size:16px
}
.password_content{
    padding:15% 0 0;
}

.list_footer{
    width:100%;
    margin:7% 0 15%;
    display:flex;
    justify-content:space-between;
    font-size: 16px
}
.list_footer a{
    color:#000;
}
.login_btn input[type="button"]{
    width: 100%;
    height:35px;    
    margin:1% 0;
    font-size:1.2rem;
    border-radius:0.7rem;
    border: none;
    outline:none;
    font-size: 14px;
}
.post{
    position: relative;
}
.post .prompt{
    position: absolute;
    display: none;
    top: 70%;
    width: 100%;
    text-align: center;
    background:#ffaaaa;
}
</style>