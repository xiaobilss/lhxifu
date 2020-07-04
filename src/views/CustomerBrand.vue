<template>
    <div>
        <div class="header">
            <h2 >全部品牌</h2>
            <el-button type="primary" round  > 新增</el-button>
        </div>
        
         <el-table
            style="width: 96%"
            :data="listData">
            <el-table-column
                prop="id"
                label="品牌编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="menuName"
                label="品牌名称"
                align="center">
            </el-table-column>
            <el-table-column 
                label="品牌操作"
                align="center">
                <!-- <template align="center">
                    <el-button size="mini">编辑</el-button>
                    <el-button type="danger">删除</el-button>
                </template> -->
                <template >
                   <div class="column-but">
                        <el-button
                    size="mini">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger">删除</el-button>
                   </div>
                </template>
            </el-table-column>
            
            
        </el-table>
    </div>
</template>
<script>
import Api from "../network/api"
import moment from 'moment'
 export default {
    methods: {
       resolvingDate(date){
          return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
      getCustomerBrand(){
          Api.queryCustomerBrandApi()
            .then(res =>{
              console.log(res.data.list);
              this.$data.listData = res.data.list;
            })
            .catch( err =>{
                this.$message.error(err.message)
            });
      },
      
    
      
    },
    created(){
        this.getCustomerBrand()
    },
    data() {
      return {
        listData:[],
        
      }
    }
  }
</script>
<style  scoped>
  .el-table{
      text-align: center;
  }
  .el-table .warning-row {
    background: #f0f9eb;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .header{
      display: flex;
      justify-content : space-between;
      align-items : center;
      margin-right: 8%;
  }
  .el-button {
    padding: 5px 50px;
    display: block;
    height: 40px;
    width: 125px;
  }
  .column-but{
    display: flex;
    justify-content: center;
  }
 
</style>