<template>
  <section class="c-select-main" :style="cDropDownStyle">
    <el-dropdown trigger="click"
                 ref="dropdown"
                 @command="handleCommand"
                 style="width: 100%"
                 placement="bottom-start"
                 :hide-on-click="true">
      <div class="c-select-content el-dropdown-link">
        <p class="c-title"> {{title}}</p>
        <p class="c-content">
          {{value}}
        </p>
        <span class="el-icon-arrow-down c-icon"></span>
      </div>
      <el-dropdown-menu slot="dropdown" :style="cDropDownStyle">
        <el-dropdown-item v-for="(item,index) in options" :key="index"
                          :class="[{'isSelected': value===item[elementLabel]}]"
                          :command="item">
          {{item[elementLabel]}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </section>
</template>

<script>
  export default {
    name: 'CSingleSelect',
    data () {
      return {
        cDropDownStyle: {
          outline: 'none',
          width: this.width + 'px'
        },
        value: this.selected
      }
    },
    methods: {
      handleCommand(command) {
        console.log(command)
        this.value = command[this.elementLabel]
        this.$emit('change',command)
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
        type: [String, Number],
        default: '请选择',
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
  }
</script>

<style lang="scss">
  .el-popper[x-placement^=bottom] {
    border: none;
    margin-top: 5px !important;

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
  .isSelected {
    background-color: #2c3e50;
    color: #00ffff;
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
