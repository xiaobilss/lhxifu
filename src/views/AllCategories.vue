<template>
  <div class="AllCategories">
    <header>
      <el-dropdown>
        <el-button type="primary">
          {{ mudel }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-button type="success" @click="addproduct">新增</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, key) of listData"
            :key="key"
            @click.native="handleClick(item.menuName, item.codeId)"
            >{{ item.menuName }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <el-table
      style="width: 96%"
      :data="itemDatalist"
      ref="singleTable"
      highlight-current-row
    >
      <el-table-column prop="id" label="产品编号" align="center">
      </el-table-column>
      <el-table-column prop="menuName" label="产品名称" align="center">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <div class="column-but">
            <!-- <el-button
                    size="mini">编辑</el-button> -->
            <el-button size="mini" type="danger" @click="getdelBrand(scope.row)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Api from "../network/api";
export default {
  data() {
    return {
      mudel: "更多菜单",

      listData: [],
      listItemData: [],
      itemDatalist: []
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    getCustomerBrand() {
      Api.queryCustomerBrandApi()
        .then(res => {
          console.log(res.data.list);
          this.superId = res.data.list[0].superId;
          this.mudel = res.data.list[0].menuName;
          this.mudelId = res.data.list[0].codeId;
          this.$data.listData = res.data.list;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    handleClick(menuName, codeId) {
      //
      this.$data.mudel = menuName;
      this.$data.mudelId = codeId;
      console.log("menuName:" + menuName);
      console.log(this.$data.mudelId);

      this.getCodeId(this.$data.mudelId);
    },
    getqueryErpTwoLevelMenu() {
      Api.queryErpTwoLevelMenu()
        .then(res => {
          //   console.log(res.data.list);
          this.$data.listItemData = res.data.list;
          console.info(this.$data.listItemData);
          this.itemDatalist = this.$data.listItemData.filter(
            item => item.superId == this.mudelId
          );

          // getCodeId(this.itemDatalist)
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    getCodeId(codeId) {
      return (this.itemDatalist = this.$data.listItemData.filter(
        item => item.superId == codeId
      ));
    },
    addproduct() {
      this.$router.push("/addproduct");
    },
    getdelBrand(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          Api.querydelBrandSuper(id.codeId)
            .then(res => {
              console.log(res);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$nextTick(() => {
                this.getqueryErpTwoLevelMenu();
              });
            })
            .catch(err => {
              this.$message.error(err.message);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    //品牌
    this.getCustomerBrand();
    // console.log("---");
    //产品
    this.getqueryErpTwoLevelMenu();
  }
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 30px;
}
</style>
