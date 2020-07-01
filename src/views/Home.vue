<template>
    <div class="home">
     <el-container>
        <el-header>
            <el-row >
                <el-col :span="2" ><div ></div></el-col>
                <el-col :span="20"><div>Hi,<span class="userName">{{userName}}</span>欢迎使用龙皇后台管理系统</div></el-col>
                <el-col :span="2"><div class="userName">返回首页</div></el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="20%">
                <el-row>
                <el-col :span="24">
                
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                   
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>全部产品</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">全部产品</span>
                    </el-menu-item>
                   <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">客户管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title">网站管理</span>
                    </el-menu-item>
                    </el-menu>
                </el-col>
                </el-row>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
     </el-container>
    </div>
</template>
<script>
import user from "../network/user"
export default {
    data(){
        return{
            userName:""            
        }
    },
    created(){
        
            this.userName=user.userName
        
    }
    
}
</script>
<style  scoped>
    .el-header,.el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
  
    .el-container{
        height: 100vh;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

  .el-row {
    margin-bottom: 20px;
  }
  .userName{
      color: var(--app-theme-color);
  }
  
</style>