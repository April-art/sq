<template>
    <div>
        <div class="type">
            <div class="main">
                <form action="" method="post" >
                        <div><input type="text" v-model="msg.user_phone" placeholder="请输入电话号码..."></div>
                        <div><input type="email" id="email" v-model="msg.user_email" placeholder="请输入你的email..."></div>
                        <div><input type="text" v-model="msg.user_name" placeholder="请输入用户名..."></div>
                        <div><input type="password" v-model="msg.user_password" placeholder="请输入密码..."></div>
                        <!-- <div><input type="password" v-model="msg.repassword" placeholder="请再次输入密码..."></div> -->
                    <!-- <div><input type="hidden" name="addtime"></div> -->
                    <router-link to="/login" class="errtext" tag="div">返回登录</router-link>
                    <router-view></router-view>
                    <input type="button" @click="submit" value="提交">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'register',
    data(){
        return{
            msg:{
                user_phone:'',
                user_email:'',
                user_name:'',
                user_password:'',
                repassword:''
            }
        }
    },
    computed:{
  
    },
    methods:{
        submit() {
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.msg.user_phone))){
                        this.$toast({
                            message:'手机号码不符合规则',
                            position:'bottom',
                            
                        })
            }else if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.msg.user_email))){
                            this.$toast({
                                message:'邮箱不正确',
                                position:'bottom',
                                
                            })
            }
            else if(!(/^(\w){4,20}$/.test(this.msg.user_password))){
                this.$toast({
                    message:'用户名不符合规则',
                    position:'bottom',
                   
                })
            }else if(!(/^(\w){4,20}$/.test(this.msg.user_name))){
                    this.$toast({
                        message:'密码不符合规则',
                        position:'bottom',
                     
                    })
            }else{
                let formData = this.msg; 
                console.log(formData.user_eamil);
        
                axios.post('http://127.0.0.1:8081/buttom/register',formData).then(function (response) {
                    
                        console.log(response);
                        // alert('注册成功')
                       
                    })
                    
                    .catch(function (error) {
                        
                        console.log(error);
                    
                    });
                        this.$toast({
                            message:'注册成功,即将跳转',
                            position:'buttom'
                        })
                        setTimeout(() => {
                           window.location.href='http://localhost:8080/buttom/login' ;
                        }, 1000);

            }
            // let formData = 'user_phone:'+this.msg.user_phone + '&&user_eamil='+this.msg.user_eamil + '&&user_name=' + this.msg.user_name + '&&user_password=' + this.msg.user_password
        }
    },

}
</script>
<style scoped>
*{margin:0;padding:0;}
body,html{
    width:100%;
    height:100%;
}

.type{
    padding: 30% 0;
    width:100%;
    height:100%;
    /* background:rgba(179, 255, 230, 0.1); */
}
.header{
    width:100%;
    height:30%;
    /* background:lightgreen; */
    display:flex;
    justify-content:center;
    align-items:center;
}
.headerImg{
    width:25%;
    height:45%;
    border-radius:50%;
    /* background:url('../images/login-images/headset.png'); */
    background-size:100%;
}

.main{
    width:80%;
    height:60%;
    margin:0 auto;
}
.main form{
    width:100%;
  
}
.main form div{
    /* height: 50px; */
    margin-top: 5px;
    background-color:#fff ;
    border-radius: 10px;;

}

.main input{
    width:90%;
    height:35px;    
    margin:1% 0;
    font-size:1.2rem;
    border-radius:0.7rem;
    border: none;
    outline:none;
    font-size: 14px;
}
.main input[type="text"]{
    height: 35px;

}
.main input[type="submit"]{
    width: 100%;
}
.errtext{
    width:100%;
    height:40px;
    line-height:40px;
    color:black;
    font-size: 14px;
    background-color:#dddddd; 
    padding-top:10px; 
    /* display:none; */
}
</style>