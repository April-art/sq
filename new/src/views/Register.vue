<template>
    <div class="container">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                // 登录用户名配置
                fields:[
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{
                            //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:10,
                        },
                        trigger:'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'用户名不得小鱼3个字符',
                            max:'用户名不得大于10个字符'
                        }
                    },
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                          props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true,
                            min:8,
                            max:12,
                        },
                        trigger:'blur',
                          messages:{
                            required:'密码不能为空',
                            min:'密码不得小鱼8个字符',
                            max:'密码不得大于12个字符'
                        }
                    },
                    
                    {
                        type:'submit',
                        label:'注册'
                    },
                ]
            },
        }
    },
    methods:{
        submitHandler(){
            // e.preventDefault();
            console.log('我注册了');

        }
    }
}
</script>

<style>
.container{
    padding: 20px;
    position: absolute;
    /* bottom: 10px */
    top: 200px

}
</style>