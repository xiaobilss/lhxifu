<template>
    <div class="home">
       <el-container>
            <el-header>{{message}}</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    Main
                    <el-footer>Footer</el-footer>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import user from "../network/user"
export default {
    data(){
        return{
            message:user.toke
        }
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
    header {
        display: flex;
        justify-self: start;
    }
    header a{
        display: block;
    }
</style>