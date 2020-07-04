<template>
    <div class="AllCategories">
        <header>
            <el-dropdown   >
                <el-button type="primary"   >
                    {{mudel}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item v-for="(item,key) of listData"  :key="key"   @click.native="handleClick(item.menuName)"  >{{item.menuName}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </header>
        <el-table 
            style="width: 96%"
            :data="itemDatalist">
            <el-table-column
                prop="id"
                label="产品编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="menuName"
                label="产品名称"
                align="center">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="创建时间"
                align="center">
            </el-table-column>
            <el-table-column 
                label="操作"
                align="center">
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
export default {
    data(){
        return{
            mudel:"更多菜单",
          
            listData:[],
            listItemData:[],
            itemDatalist:[],
        }
    },
    methods: {
        getCustomerBrand(){
          Api.queryCustomerBrandApi()
            .then(res =>{
              console.log(res.data.list);
              this.mudel= res.data.list[0].menuName;
              this.mudelId = res.data.list[0].codeId;
              this.$data.listData = res.data.list;
            })
            .catch( err =>{
                this.$message.error(err.message)
            });
        },
        handleClick(menuName){//
            this.$data.mudel = menuName;
            this.getCodeId(this.$data.mudelId)
            console.log(menuName);   
        },
        getqueryErpTwoLevelMenu(){
            Api.queryErpTwoLevelMenu()
            .then(res =>{
                
            //   console.log(res.data.list);
                this.$data.listItemData = res.data.list;
                this.itemDatalist = this.$data.listItemData.filter(item =>   item.superId == this.mudelId);
            
                

                // getCodeId(this.itemDatalist)
                
                
            })
            .catch( err =>{
                this.$message.error(err.message)
            });
        },
        getCodeId(codeId){
            return this.$data.listItemData.filter(item =>   item.superId == codeId);
        }

         
    },
    created(){
        //品牌
        this.getCustomerBrand();
        // console.log("---");
        //产品
        this.getqueryErpTwoLevelMenu();
    }
}
</script>
<style lang="less" scoped>
    .el-table{
        margin-top: 30px;
    }

</style>