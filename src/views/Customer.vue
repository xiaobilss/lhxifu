<template>
    <div>
        <h2 >客户信息管理</h2>
         <el-table
            style="width: 96%"
            :data="listData"
            :row-class-name="tableRowClassName">
            <el-table-column
                prop="id"
                label="编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="姓名"
                align="center">
            </el-table-column>
            <el-table-column
                v-if="false"
                prop="resolvingDate(createTime)"
                label="日期"
                align="center">
            </el-table-column>
            <el-table-column
                prop="telephone"
                label="电话"
                align="center">
        
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
      getCustomer(){
          Api.queryCustomerApi()
            .then(res =>{
              console.log(res.data.list);
              this.$data.listData = res.data.list;
            })
            .catch( err =>{
                this.$message.error(err.message)
            });
      },
      
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      
    },
    created(){
        this.getCustomer()
    },
    data() {
      return {
        listData:[],
      }
    }
  }
</script>
<style  scoped>
  .el-table .warning-row {
    background: #f0f9eb;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>