<template>
  <div class="Addproduct">
    <h2 class="top">新增产品</h2>
    <div>
      <span class="Addbrand">新增品牌类型</span>
      <el-dropdown>
        <el-button type="primary" class="elBtn">
          {{ mudel }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" class="elBtn">
          <el-dropdown-item
            v-for="(item, key) of listData"
            :key="key"
            @click.native="handleClick(item.menuName, item.codeId)"
            >{{ item.menuName }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="addpin">
      <span>产品名称</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>

    <el-button type="primary" round class="submit" @click="addBrandSuper"
      >保存</el-button
    >
  </div>
</template>
<script>
import Api from "../network/api";
export default {
  name: "Addproduct",
  data() {
    return {
      mudel: "更多菜单",
      input: "",
      listData: [],
      listItemData: []
    };
  },
  methods: {
    getCustomerBrand() {
      Api.queryCustomerBrandApi()
        .then(res => {
          console.log(res.data.list);
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
      this.mudel = menuName;
      this.mudelId = codeId;
      console.log("menuName:" + menuName);
      console.log(this.$data.mudelId);

      this.getCodeId(this.$data.mudelId);
    },
    getqueryErpTwoLevelMenu() {
      Api.queryErpTwoLevelMenu()
        .then(res => {
          //   console.log(res.data.list);
          this.$data.listItemData = res.data.list;
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
    // 保存二级
    addBrandSuper() {
      Api.queryaddBrandSuper(this.input, this.mudelId)
        .then(res => {
          console.log("保存二级" + res);
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.$router.push("/allCategories");
        })
        .catch(err => {
          this.$message.err(err.message);
        });
    }
  },
  created() {
    //品牌
    this.getCustomerBrand();
    // console.log("---");
  }
};
</script>
<style lang="less" scoped>
.el-table {
  margin-top: 30px;
}
.Addbrand {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 30px;
}
.elBtn {
  width: 800px;
}
.addpin {
  margin: 50px;
}
.el-input {
  margin-left: 30px;
  width: 800px;
}

.submit {
  width: 300px;
  margin-left: 400px;
}
</style>
