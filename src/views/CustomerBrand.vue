<template>
  <div>
    <div class="header">
      <h2>全部品牌</h2>
      <el-button type="primary" round @click="addDialogVisibles = true">
        新增
        </el-button>
    </div>

    <el-table style="width: 96%" :data="listData" ref="singleTable"  highlight-current-row>
      <el-table-column prop="id" label="品牌编号" align="center">
      </el-table-column>
      <el-table-column prop="menuName" label="品牌名称" align="center">
      </el-table-column>
      <el-table-column label="品牌操作" align="center">
        <!-- <template align="center">
                    <el-button size="mini">编辑</el-button>
                    <el-button type="danger">删除</el-button>
                </template> -->
        <template slot-scope="scope">
          <div class="column-but">
            <el-button size="mini" type="info" @click="updateBrand(scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" @click="delBrand(scope.row)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
   

    <el-dialog
      title="新增品牌"
      :visible.sync="addDialogVisibles"
      width="40%"
      center
    >
      <el-input v-model="input" placeholder="请输入新增品牌名称"></el-input>
      <span slot="footer" class="addDialogVisibles-footer">
        <el-button @click="addDialogVisibles = false" class="addbtn"
          >取 消</el-button
        >
        <el-button type="primary" @click="addBrand" class="addbtn"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="修改品牌"
      :visible.sync="updateDialogVisibles"
      width="40%"
      center
    >
      <el-input
        v-model="updateinput"
        placeholder="请输入修改品牌名称"
      ></el-input>
      <span slot="footer" class="addDialogVisibles-footer">
        <el-button @click="updateDialogVisibles = false">取 消</el-button>
        <el-button type="primary" @click="updateBrandTwo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Api from "../network/api";
import moment from "moment";
export default {
  name: "CustomerBrand",
  data() {
    return {
      listData: [],
      addDialogVisibles: false,
      updateDialogVisibles: false,
      input: "",
      updateinput: "",
      updateId: ""
    };
  },
  methods: {
     setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      
    resolvingDate(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    getCustomerBrand() {
      Api.queryCustomerBrandApi()
        .then(res => {
          console.log(res.data.list);
          this.$data.listData = res.data.list;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    },
    deleteMenuInfoTwo() {},
    addBrand() {
      if (this.input.toString() == 0) {
        this.$message.error("品牌不能为空！");
      } else {
        // this.addDialogVisibles = false;
        Api.queryaddBrand(this.input.toString())
          .then(res => {
            console.log(res);

            this.addDialogVisibles = false;
            this.$nextTick(() => {
              this.getCustomerBrand();
            });
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      }
    },
    delBrand(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          Api.querydelBrand(id.codeId)
            .then(res => {
              console.log(res);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$nextTick(() => {
                this.getCustomerBrand();
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
    },
    //修改
    updateBrand(id) {
      console.log(id);
      this.updateDialogVisibles = true;
      this.updateId = id;

      this.updateinput = id.menuName;
      // this.updateBrandTwo(id);
    },

    updateBrandTwo() {
      if (this.updateinput.toString() == 0) {
        this.$message.error("修改品牌不能为空！");
      } else {
        Api.queryupdateBrand(this.updateId.codeId, this.updateinput.toString())
          .then(res => {
            console.log(res);
            this.updateDialogVisibles = false;
            this.$nextTick(() => {
              this.getCustomerBrand();
            });
          })
          .catch(err => {
            this.$message.error(err.message);
          });
      }
    }
  },
  created() {
    this.getCustomerBrand();
  }
};
</script>
<style scoped>
.el-table {
  text-align: center;
}
.el-table .warning-row {
  background: #f0f9eb;
}

.el-table .success-row {
  background: #f0f9eb;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8%;
}
.el-button {
  padding: 5px 50px;

  height: 40px;
  width: 125px;
}
.column-but {
  display: flex;
  justify-content: center;
}
.addbtn {
  padding: 5px 50px;

  height: 40px;
  width: 125px;
}
</style>
