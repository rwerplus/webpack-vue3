<template>
  <div class="about">
    <h1>部门</h1>
    <Table
      :tableData="tableDatas"
      :isShowSelect="true"
      :loading="loading"
      :tableConfiguration="tableConfiguration"
      :pagination="pagination"
      @pagination="changePagination"
      @handleSelectionChange="handleSelectionChange"
    >
      <template slot="searchBox">
        <span>部门目录</span>
        <el-select v-model="departmentId" placeholder="请选择部门" size="small">
          <el-option
            v-for="item in departmentList"
            :key="item.departId"
            :label="item.departdepartName"
            :value="item.departId"
          ></el-option>
        </el-select>
        <el-button type="primary" size="small" @click="addDepart"
          >注册部门</el-button
        >
        <div class="buttons">
          <el-input
            v-model="tableParams.departInfo"
            placeholder="请输入内容"
            size="small"
          ></el-input>
          <el-button type="primary" size="small" @click="getTableData"
            >搜索</el-button
          >
        </div>
      </template>
      <template slot="operateBox" slot-scope="scope">
        <el-button
          @click="editItem(scope.row.departId)"
          type="text"
          size="small"
          >编辑</el-button
        >
        <el-button
          @click="deleteItem(scope.row.centerId, scope.row.departId)"
          type="text"
          size="small"
          >删除</el-button
        >
      </template>
    </Table>
  </div>
</template>
<script>
import Table from "../components/c-table/CTable.vue";
// import tableMixin from "@/mixin/tableMixin.js";
import { mapGetters } from "vuex";
import "../config/element";

export default {
  components: { Table },
  // mixins: [tableMixin],
  data() {
    return {
      tableDatas: [
        {
          id:0,
          key:0,
          departId: "2016-05-02",
          departName: "王小虎",
          opLevel: "上海市普陀区金沙江路 1518 弄",
          centerdepartName: "上海市普陀区金沙江路 1516 弄",
          departCode: "上海市普陀区金沙江路 1516 弄",
          desc: "上海市普陀区金沙江路 1516 弄",
        }
      ],
      tableConfiguration: [
        { label: "部门ID", prop: "departId", width: 200 },
        { label: "部门名称", prop: "departdepartName" },
        { label: "优先级", prop: "opLevel" },
        { label: "所属中心", prop: "centerdepartName" },
        { label: "组织机构代码", prop: "departCode" },
        { label: "描述", prop: "desc", width: 200 },
      ],
      departmentList: [
        { label: "部门ID", id: "departId", width: 200 },
        { label: "部门名称", id: "departdepartName" },
        { label: "优先级", id: "opLevel" },
        { label: "所属中心", id: "centerdepartName" },
        { label: "组织机构代码", id: "departCode" },
        { label: "描述", id: "desc", width: 200 },
      ],
      tableParams: {
        departInfo: "",
      },
      pagination: {
        pageSize: 10,
        total: 20,
        page: 1,
      },
      seletedData: [],
      loading: false,
      isShowDialog: false,
      type: "add",
      departmentId: "",
    };
  },
  created() {
    // 加载部门列表数据
    // this.$store.dispatch("department/getDepartment");
  },
  methods: {
    changePagination(val) {
      this.pagination = {
        ...this.pagination,
        ...val,
      };
      this.getTableData();
    },
    handleSelectionChange(val) {
      this.seletedData = val;
    },
    getTableData() {
      const params = {
        ...this.tableParams,
        ...this.pagination,
      };
      this.loading = true;
      const { list, totalPage } = data;
      this.loading = false;
      this.tableData = list;
      this.pagination.total = totalPage;
      // queryDepartment(params)
      //   .then(({ data }) => {
      //     const { list, totalPage } = data;
      //     this.loading = false;
      //     this.tableData = list;
      //     this.pagination.total = totalPage;
      //   })
      //   .catch(() => {
      //     this.loading = false;
      //   });
    },
    editItem(departId) {
      this.isShowDialog = true;
      this.type = "edit";
      this.departmentId = departId;
    },
    addDepart() {
      if (this.departmentId === "") {
        this.$message.warning("请先选择部门目录");
        return;
      }
      this.isShowDialog = true;
      this.type = "add";
    },
    deleteItem(centerId, departId) {
      this.$alert("确定删除该条数据吗", "提示", {
        confirmButtonText: "确定",
        // callback: () => {
        //   deleteDepartment({ centerId, departId })
        //     .then(() => {
        //       this.$message.success("删除成功");
        //       this.getTableData();
        //     })
        //     .catch(() => {});
        // }
      });
    },
  },
};
</script>
