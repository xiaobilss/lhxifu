<template>
    <div>
        <h2>网站信息管理</h2>
        <el-form  class="form">
            <el-form-item label="座机热线">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="备案号">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" round >登 录</el-button>
                <el-button type="info" round >重 置</el-button>
            </el-form-item>
        </el-form>
      
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.form{
    width: 70%;
    margin-left: 82px;
}
</style>