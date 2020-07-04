<template>
    <el-container class="home-container">
        <!-- 头部区 -->
        <el-header>
            <div>
                <img src="../assets/logo.png">
                Hi,<span class="userName">{{userName}}</span>欢迎使用龙皇后台管理系统
            </div>
             <el-button type="info" round @click="signOut" > 退出</el-button>
        </el-header>
        <!-- 主体 -->
        <el-container>
            
            <!-- 侧边栏 -->
            <el-aside :width="toggle ? '65px':'200px'">
                <div class="tag-nav" v-if="!toggle" @click="toggleClcik">
                    <i class="el-icon-s-fold"></i>
                    <span>收起</span>    
                </div>
                <div class="tag-nav" v-else @click="toggleClcik">
                    <i class="el-icon-s-unfold"></i>
                    <span>展开</span> 
                </div>
                <el-menu
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#409EFF"
                    unique-opened
                    :collapse="toggle"
                    :collapse-transition="false"
                    router>
                    <el-menu-item index="customerBrand">
                        <i class="el-icon-menu"></i>
                        <span slot="title">全部品牌</span>
                    </el-menu-item>

                    <el-menu-item index="allCategories">
                        <i class="el-icon-setting"></i>
                        <span slot="title">全部品类</span>
                    </el-menu-item>

                    <el-menu-item index="mine">
                        <i class="el-icon-setting"></i>
                        <span slot="title">全部产品</span>
                    </el-menu-item>



                    <!-- <el-submenu index="productType">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                         <el-menu-item index="2-1">
                           <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>  
                         </el-menu-item>
                    </el-submenu> -->
                    
                    
                    <el-menu-item index="customer">
                        <i class="el-icon-setting"></i>
                        <span slot="title">客户管理</span>
                    </el-menu-item>
                    <el-menu-item index="website">
                        <i class="el-icon-setting"></i>
                        <span slot="title">网站管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右边内容 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
    
</template>
<script>
import user from "../network/user"
export default {
    data(){
        return{
            userName:"",
            toggle:false            
        }
    },
    created(){
        this.userName=user.userName
        
    },
    methods:{
        //退出
        signOut(){
            window.sessionStorage.clear();
            this.$router.push("/login");
        },
        // 展开 /  收齐
        toggleClcik(){
            this.toggle=!this.toggle
        }
    }

    
}
</script>
<style  scoped>
.home-container{
    height: 100vh;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    color: #fff;
    font-size: 20px;
}
.el-header>div{
    display: flex;
    align-items: center;
}
.el-header>div>img{
    width: 50px;
    height: 50px;
    margin-right: 20px  ;
}

.el-aside{
    background-color: #373d41;
}
.el-main{
    background-color: #eaedf1;
}
.el-menu{
    border-right: none;
}
.tag-nav{
    background-color: #4a5064;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
.tag-nav i{
    margin-right: 5px;
}
  
</style>