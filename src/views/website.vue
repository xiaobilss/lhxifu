<template>
    <div>
        <h2>网站信息管理</h2>
        <el-form :model="website" :rules="rules"  class="form" ref="websiteFormRef">
            <el-form-item label="座机热线" prop="infoStrOne">
                <el-input v-model="website.infoStrOne" placeholder="请您输入座机热线"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="infoStrTwo">
                <el-input v-model="website.infoStrTwo" placeholder="请您输入手机号" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="infoStrThree">
                <el-input v-model="website.infoStrThree" placeholder="请您输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="备案号" prop="infoStrFour">
                <el-input v-model="website.infoStrFour" placeholder="请您输入备案号"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="infoStrFive">
                <el-input v-model="website.infoStrFive" placeholder="请您输入地址"></el-input>
            </el-form-item>
            <el-form-item class="submit" >
                <el-button type="primary" @click="submit" round >保 存</el-button>
            </el-form-item>
        </el-form>
      
    </div>

</template>
<script>
import Api from "../network/api"
export default {
    data(){
        return{
            website:{
                infoStrOne:"",
                infoStrTwo:"",
                infoStrThree:"",
                infoStrFour:"",
                infoStrFive:""
            },
            rules:{
                infoStrOne: [{ required: true, message: '座机热线', trigger: 'blur'}],
                infoStrTwo: [{ required: true, message: '手机号', trigger: 'blur' }],
                infoStrThree:[{ required: true, message: '邮箱', trigger: 'blur' }],
                infoStrFour:[{ required: true, message: '备案号', trigger: 'blur' }],
                infoStrFive:[{ required: true, message: '地址', trigger: 'blur' }],
            }
        }
    },
    created(){
        //请求网络信息
       this.getWeb();

    },
    methods:{
        //请求网络信息
        getWeb(){
            Api.queryWebsiteApi()
            .then(res =>{
                console.log("queryWebsiteApi",res.result[0]);
                this.$data.website =res.result[0];
            })
            .catch( err =>{
                this.$message.error(err.message)
            });
        },
        //提交
        submit(){
             this.$refs.websiteFormRef.validate(callback =>{
                 if(callback){
                    Api.queryUpdateWebsiteApi(this.$data.website)
                        .then( res =>{
                            console.log(res);
                            this.$message({
                                message: res.result,
                                type: 'success'
                            });
                        })
                        .catch(err =>{
                            console.log(err);   
                            this.$message.error("输入有误")         
                        })
                 }else{
                    this.$message.error("不能为空哦") 
                 }
             })
            
        }
        
    }

}
</script>
<style lang="less" scoped>
.form{
    width: 70%;
    margin-left: 82px;
}
.el-button.is-round {
    border-radius: 20px;
    padding: 8px 49px;
}
.submit{
    text-align: center;
    margin-top: 30px;
}
</style>