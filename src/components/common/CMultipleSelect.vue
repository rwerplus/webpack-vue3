<template>
  <section class="c-select-main" :style="cDropDownStyle">
    <el-dropdown trigger="click"
                 @visible-change="visibleChange"
                 ref="dropdown"
                 style="width: 100%"
                 placement="bottom-start"
                 :hide-on-click="false">
      <div class="c-select-content el-dropdown-link">
        <p class="c-title"> {{title}}</p>
        <p class="c-content">
          <i class="el-icon-arrow-left"></i>
          {{selectedDeep.length}}个选中
          <i class="el-icon-arrow-right"></i>
        </p>
        <span class="el-icon-arrow-down c-icon"></span>
      </div>
      <el-dropdown-menu slot="dropdown" :style="cDropDownStyle">
        <el-dropdown-item style="min-height: 100px;max-height: 200px;overflow: auto">
          <CCheckbox :options="options"/>
        </el-dropdown-item>
        <el-dropdown-item>
          <div class="c-footer">
            <c-button @click="handleCancel">取消</c-button>
            <c-button @click="handleOk">确定</c-button>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
  import CCheckbox from './CCheckbox'
  import CButton from './CButton'
  export default {
    name: 'CMultipleSelect',
    components: {CCheckbox,CButton},
    provide() {
      return {
        isSelected:this
      }
    },
    data () {
      return {
        hidePopup: true,
        cDropDownStyle: {
          outline: 'none',
          width: this.width + 'px'
        },
        selectedDeep: JSON.parse(JSON.stringify(this.selected)),
        selectedUpdate:JSON.parse(JSON.stringify(this.selected))
      }
    },
    props: {
      title: {
        type: String,
        default: '选择框'
      },
      width: {
        type: [String, Number],
        default: '300'
      },
      options: {
        type: Array,
        required: true
      },
      selected: {
        type: Array,
        required: false
      },
      elementLabel: {
        type: [String, Number],
        default: ''
      },
      elementValue: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      visibleChange(value) {
        if (!value) {
          const leg = this.selectedDeep.toString() === this.selectedUpdate.toString()
          if (!leg) {
            this.selectedDeep = this.selectedUpdate
          }
        }
      },
      closeDropMenu() {
        this.$refs.dropdown.hide()
      },
      handleClick(e) {
        this.hidePopup=true
        console.log(e)
      },
      handleCancel() {
        this.selectedDeep = this.selectedUpdate
        this.closeDropMenu()
      },
      handleOk() {
        this.resetSelected()
        this.$emit('ok',this.selectedDeep)
        this.closeDropMenu()
      },
      resetSelected() {
        this.selectedUpdate = this.selectedDeep
      }
    }
  }
</script>

<style lang="scss">
  .el-popper[x-placement^=bottom] {
    border: none;
    margin-top: 5px!important;
    .popper__arrow {
      display: none;
    }
    .c-footer {
      padding-top: 1em;
      text-align: right;
      .v-button:first-child {
        margin-right: 1em;
      }
    }
  }

  .c-select-main {
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid rgba(0, 255, 255, 0.2) !important;
    outline: none;

    .c-select-content {
      text-align: left;

      &:active {
        border: none;
        outline: none;
      }

      .c-title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 12px;
        padding: .5em 0 .5em 1em;
      }

      .c-content {
        font-size: 12px;
        padding: 0 0 .5em 1em;
        color: rgba(255, 255, 255, 0.4);
      }

      .c-icon {
        position: absolute;
        right: 1em;
        top: 1.5em;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
</style>
