<template>
    <div class="login">
        <div class="main">
            <img src="../assets/img/img_login.svg" >
            <div>
                <h4>龙煌后台管理</h4>
                <h2><span>管理员登录</span></h2>
                <p>从业服装设计20多年，1000多款职业装设计经验！</p>
                <el-form :model="form" :rules="rules" ref="loginFormRef">
                    <el-form-item prop="userName">
                        <el-input v-model="form.userName" prefix-icon="el-input__icon el-icon-user" placeholder="请输入用户名"  />
                    </el-form-item>
                     <el-form-item prop="passWord">
                        <el-input v-model="form.passWord" prefix-icon="el-input__icon el-icon-lock" placeholder="请输入密码" show-password />   
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" round @click="btn1">登 录</el-button>
                        <el-button type="info" round @click="btn2">重 置</el-button>
                    </el-form-item>
                </el-form>
            </div>    
        </div> 
        <p class="login-footer">
           Copyright © {{year}}.Company 龙煌 All rights reserved.More Templates &amp; 上海龙煌服饰有限公司 &amp; 
           <a href="#"><span>返回首页</span></a>
        </p>
    </div>
</template>
<script>
import Api from "../network/api"

import user  from "../network/user"

export default {
    nmae:"Login",
    data(){
        return{
            year:new Date().getFullYear(),
            form:{
                userName:"admin",
                passWord:'a112233.'
            },
            rules:{
                userName:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                passWord:[
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ]

            }

        }
    },
    methods:{
        btn1(){
            //登录
            
            this.$refs.loginFormRef.validate(callback =>{
                if(callback){
                    Api.getLogin(this.form.userName,this.form.passWord)
                    .then( res =>{
                        if(res.result==="success"){
                            user.userName=this.form.userName;
                            window.sessionStorage.setItem("toke",res.message)
                            this.$message({
                                message: '登录成功，欢迎'+user.userName,
                                type: 'success'
                            });
                            this.$router.push("/home");
                        }else{
                            this.$message.error("用户名或者密码输入错误");
                        }
                    }).catch(err =>{
                        console.log(err);
                        this.$message.error("用户名或者密码输入错误");
                    })
                }else{
                      this.$message.error("用户名或者密码不能为空");
                }
            })
        },
        btn2(){
            // 重置
            this.$refs.loginFormRef.resetFields();
        }
    }
    
    
}
</script>
<style lang="less" scoped>

.login{
    width: 960px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.main img{
    width: 482px;
    height: 362px;
    display: inline-block;
}
.main>div{
    display: inline-block;
    margin-left: 72px;
    vertical-align: top;
}
.main>div>h4{
    color: var(--app-theme-color);
}
.login-footer{
    text-align: center;
    color: #ced4da;
}
.login-footer span{
    color: var(--app-theme-color);
}

.el-input{
    width: 344px;
    display: block;
    margin-top: 30px;   
   
    box-shadow: 0 2px 4px  rgba(0, 0, 0, .12)
}

.el-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
    margin-top: 30px;
    margin-right: 50px;
    padding: 10px 40px;
}
.btn{
    text-align: center;
    padding: 0 30px;
}

</style>