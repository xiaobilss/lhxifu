<template>
    <div class="login">
        <div class="main">
            <img src="../assets/img/img_login.svg" >
            <div>
                <h4>龙煌后台管理</h4>
                <h2><span>管理员登录</span></h2>
                <p>从业服装设计20多年，1000多款职业装设计经验！</p>

                <el-form >
                    
                    <el-input v-model="userName" placeholder="请输入用户名"  >
                        <i slot="prefix" class="el-input__icon el-icon-user"></i>
                    </el-input>
                    <el-input v-model="passWord" placeholder="请输入密码" show-password >
                        <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                    </el-input>
                    
                </el-form>
                <div class="btn" >
                    <el-button type="primary" round @click="btn1">登 录</el-button>
                    <el-button type="info" round @click="btn2">重 置</el-button>
                </div>

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
import axios from "axios"
import user  from "../network/user"

export default {
    nmae:"Login",
    data(){
        return{
            year:new Date().getFullYear(),
            userName:"admin",
            passWord:'a112233.'
        }
    },
    methods:{
        btn1(){
            Api.getLogin(this.userName,this.passWord)
             .then( res =>{
                console.log(res);
                user.toke =res.message;
                this.$router.push("/home")
             }).catch(err =>{
                console.log(err);
             })

            //  this.$router.push("/home")
            
        },
        btn2(){
        //    this.userName = "" ;
        //    this.passWord = "" ;
            Api.querySubordinateSumApi()
            .then( res =>{
                console.log(res);
             }).catch(err =>{
                console.log(err);
             })
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