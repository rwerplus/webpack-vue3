<template>
  <section class="c-checkbox">
    <el-checkbox :indeterminate="isIndeterminate"
                 style="width: 100%"
                 v-model="checkAll" @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <el-checkbox-group v-model="isSelected.selectedDeep"
                       style="display: flex;flex-direction: column;width: 100%;padding-left: 10px"
                       @change="handleChange">
      <el-checkbox v-for="item in options"
                   style="font-size: 12px;"
                   :title="item[isSelected.elementLabel]"
                   :label="item[isSelected.elementValue]" :key="item[isSelected.elementLabel]">
        {{item[isSelected.elementLabel]}}
      </el-checkbox>
    </el-checkbox-group>
  </section>
</template>
<script>
  export default {
    name: 'CCheckbox',
    data () {
      return {
        checkAll: false,
        isIndeterminate: true,
      }
    },
    props: ['options'],
    inject: ['isSelected'],
    methods: {
      handleCheckAllChange (val) {
        if (val) {
          this.isSelected.selectedDeep = this.options.map((item) => item[this.isSelected.elementValue])
        }else {
          this.isSelected.selectedDeep = []
        }
        this.isIndeterminate = false
      },
      handleChange (value) {
        this.isSelected.selectedDeep = value
        let checkedCount = value.length
        this.checkAll = checkedCount === this.options.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
      }
    }
  }
</script>
<style lang="scss">
  .el-checkbox__label{
    font-size: 12px;
  }
</style>
