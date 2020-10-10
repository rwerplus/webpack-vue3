<template>
  <div class="c-time-select">
    <el-date-picker
      v-model="value1"
      align="center"
      popper-class="cellClassName"
      type="datetime"
      @change="handleChange"
      size="small"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      placeholder="开始日期"
      :picker-options="pickerOptions">
    </el-date-picker>
    <div style="color: #FFFFFF">~</div>
    <el-date-picker
      v-model="value2"
      align="center"
      ref="dropdown"
      format="yyyy-MM-dd HH:mm:ss"
      value-format="yyyy-MM-dd HH:mm:ss"
      popper-class="cellClassName"
      type="datetime"
      @change="handleChange"
      size="small"
      placeholder="结束日期"
      :default-time="['00:00:00','22:59:59']"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>

  export default {
    name: 'CTimeSelect',
    data () {
      return {
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          },
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        value1: new Date(new Date().setDate(new Date().getDate()-8)),
        value2: new Date(),
      }
    },
    mounted () {
      this.$refs.dropdown.showClose = true
      console.log(this.$refs.dropdown)
    },
    methods: {
      handleChange(e) {
        // this.$refs.dropdown.showPicker()
        console.log(this.$refs.dropdown)
        console.log(this.value1)
        console.log(this.value2)
      }
    }
  }
</script>

<style lang="scss">
  .c-time-select {
    display: flex;
    flex-direction: row;
  }
  .el-picker-panel__body-wrapper {
    margin: 0!important;
    padding: 0!important;
  }
  .el-date-picker .el-picker-panel__content {
    width: 240px!important;
    line-height: 10px!important;
    margin: 5px auto;
  }
  .cellClassName {
    font-size: 12px !important;
    width: 260px !important;


    .el-date-picker__header {
      font-size: 12px;
      margin: 0px 30px;
      span {
        font-size: 12px;
      }
    }
    .el-date-table {
      line-height: 10px!important;
    }
    .el-date-table td {
      width: 15px;
      height: 15px;
      padding: 0;
    }
  }
</style>
